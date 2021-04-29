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
			}
		},
		actions: {
			getAllContacts: () => {
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/", {
					method: "GET",
					headers: { "Content-type": "application/json" }
				})
					.then(response => response.json())
					.then(data => {
						setStore({ agenda: data });
						console.log(data, "<--get-all-contacts");
					})
					.catch(error => console.log(error));
			},

			getAgenda: () => {
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/panchoCorrea", {
					method: "GET",
					headers: { "Content-type": "application/json" }
				})
					.then(response => response.json())
					.then(data => {
						setStore({ agenda: data });
						console.log(data, "<--get-my-agenda");
					})
					.catch(error => console.log(error));
			},

			createNewContact: contact => {
				const contactList = {
					full_name: contact.full_name,
					email: contact.email,
					phone: contact.phone,
					address: contact.address,
					agenda_slug: "panchoCorrea"
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
					});
			},

			getContact: id => {
				fetch("https://assets.breatheco.de/apis/fake/contact/" + id, {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => {
						return response.json();
					})
					.then(data => {
						console.log(data, "<--get-one-contact");
						setStore({ contact: data });
					});
			},

			updateContact: (id, full_name, email, phone, address) => {
				const contactListUpdate = {
					full_name: full_name,
					email: email,
					phone: phone,
					address: address,
					agenda_slug: "panchoCorrea"
				};
				fetch("https://assets.breatheco.de/apis/fake/contact/" + id, {
					method: "PUT",
					body: JSON.stringify(contactListUpdate),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(() => {
						fetch("https://assets.breatheco.de/apis/fake/contact/agenda/panchoCorrea")
							.then(response => response.json())
							.then(data => {
								console.log(data, "<--update-agenda");
								setStore({ agenda: data });
							});
					})
					.catch(error => {
						console.log(error);
					});
			},

			deleteContact: id => {
				fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => {
						return response.json();
					})
					.then(data => {
						console.log(data, "<--delete-one-contact");
					})
					.catch(error => {
						console.log(error);
					});
			}
		}
	};
};

export default getState;
