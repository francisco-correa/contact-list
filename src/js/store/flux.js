const getState = ({ getStore, setStore, getActions }) => {
	return {
		store: {
			agenda: [],
			contact: {
				full_name: "",
				email: "",
				agenda_slug: "panchoCorrea",
				address: "",
				phone: ""
			}
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
						console.log(data, "<--full agenda");
					})
					.catch(error => console.log(error));
			},

			createNewContact: contact => {
				console.log(contact);
				const contactList = {
					full_name: contact.full_name,
					email: contact.email,
					agenda_slug: "panchoCorrea",
					address: contact.address,
					phone: contact.phone
				};
				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "POST",
					body: JSON.stringify(contactList),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => {
						return response.json();
					})
					.then(data => {
						console.log(data, "<--new-contact-data");
						// getActions().getAllContacts();
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

			getContact: id => {
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
						console.log(json);
						setStore({
							contact: json
						});
					});
			},

			updateContact: id => {
				const contactListUpdate = {
					full_name: id.full_name,
					email: id.email,
					agenda_slug: "panchoCorrea",
					address: id.address,
					phone: id.phone
				};
				fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`, {
					method: "PUT",
					body: JSON.stringify(contactListUpdate),
					settings: {
						"Content-Type": "application/json"
					}
				})
					.then(response => {
						return response.json();
					})
					.then(data => {
						console.log(data, "<--update-contact-data");
					})
					.catch(error => {
						console.log(error);
					});
			},

			deleteContact: id => {
				// const store = getStore();
				fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`, {
					method: "DELETE",
					settings: {
						"Content-Type": "application/json"
					}
				})
					.then(response => {
						return response.json();
					})
					.then(json => {
						console.log(json, "soy un json");
					})
					.catch(error => {
						console.log(error);
					});
			}
		}
	};
};

export default getState;
