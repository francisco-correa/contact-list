const getState = ({ getStore, setStore, getActions }) => {
	return {
		store: {
			contact: {
				full_name: "",
				email: "",
				phone: "",
				address: ""
			},
			// all contacts
			agenda: [],
			user: "francisco"
		},
		actions: {
			createNewContact: data => {
				const store = getStore();
				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "POST",
					body: JSON.stringify(data),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => {
						return response.json();
					})
					.then(() => {
						fetch("https://assets.breatheco.de/apis/fake/contact/agenda/francisco")
							.then(d => d.json())
							.then(data => setStore({ agenda: data }));
					});

				// .then(json => {
				// 	getActions().getAllContacts(store.user);
				// });
			},

			getAllContacts: slug => {
				const store = getStore();
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/" + slug, {
					method: "GET"
				})
					.then(response => {
						return response.json();
					})
					.then(json => {
						setStore({
							agenda: json
						});
					});

				// .catch(error => {
				// 	console.log(error);
				// });
			},

			getContact(id) {
				const store = getStore();
				fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`, {
					method: "GET",
					settings: {
						"Content-Type": "application/json"
					}
				})
					.then(response => {
						return response.json();
					})
					.then(json => {
						setStore({
							contact: json
						});
					});
			},

			updateContact: (id, data) => {
				const store = getStore();
				fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`, {
					method: "PUT",
					body: JSON.stringify(data),
					settings: {
						"Content-Type": "application/json"
					}
				})
					.then(response => {
						return response.json();
					})
					// .then(data => {
					// 	setStore({ contacts: data });
					// })
					.then(json => {
						getActions().getAllContacts(store.user);
					})
					.catch(error => {
						console.log(error);
					});
			},

			deleteContact: id => {
				const store = getStore();
				fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`, {
					method: "DELETE",
					settings: {
						"Content-Type": "application/json"
					}
				})
					.then(response => {
						return response.json();
					})
					// .then(data => {
					// 	setStore({ contacts: data });
					// })
					.then(json => {
						getActions().getAllContacts(store.usuario);
					})
					.catch(error => {
						console.log(error);
					});
			}
		}
	};
};

export default getState;
