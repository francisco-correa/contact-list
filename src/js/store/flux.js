const getState = ({ getStore, setStore, getActions }) => {
	return {
		store: {
			agenda: [],
			contact: {
				full_name: "",
				email: "",
				phone: "",
				address: "",
				agenda_slug: "panchoCorrea"
			},
			agenda_slug: "panchoCorrea"
		},
		actions: {
			getAgenda: () => {
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/panchoCorrea", {
					method: "GET",
					headers: { "Content-type": "application/json" }
				})
					.then(response => response.json())
					.then(data => {
						setStore({ agenda: data });
					})
					.catch(error => console.log(error));
			},

			createNewContact: contact => {
				const store = getStore();
				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "POST",
					body: JSON.stringify(store.contact),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => {
						return response.json();
					})
					.then(data => {
						console.log(contact, "<--new-contact-data");
						getActions().getAllContacts();
					});
			},

			getAllContacts: () => {
				const store = getStore();
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/panchoCorrea", {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => {
						return response.json();
					})
					.then(data => {
						console.log(data, "<--agenda-name");
						setStore({
							agenda: data
						});
					})

					.catch(error => {
						console.log(error);
					});
			},

			getContact(id) {
				// const store = getStore();
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
						console.log(contact);
						setStore({
							contact: json
						});
					});
			},

			updateContact: (id, data) => {
				// const store = getStore();
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

					.then(json => {
						getActions().getAllContacts(store.agenda_slug);
					})
					.catch(error => {
						console.log(error);
					});
			},

			deleteContact: () => {
				// const store = getStore();
				fetch(`https://assets.breatheco.de/apis/fake/contact/panchoCorrea`, {
					method: "DELETE",
					settings: {
						"Content-Type": "application/json"
					}
				})
					.then(response => {
						return response.json();
					})
					.then(json => {
						getActions().getAllContacts(store.agenda_slug);
					})
					.catch(error => {
						console.log(error);
					});
			}
		}
	};
};

export default getState;
