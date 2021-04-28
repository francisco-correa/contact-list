import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal";

export const Contacts = () => {
	const [state, setState] = useState({
		showModal: false,
		contact: {}
	});

	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getAllContacts(store.user);
	}, []);

	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					<Link className="btn btn-success" to="/add">
						Add new contact
					</Link>
				</p>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						{store.agenda.map((elem, index) => {
							return (
								<ContactCard
									deleteContact={() => setState({ showModal: true })}
									key={index}
									Name={elem.full_name}
									Email={elem.email}
									Phone={elem.phone}
									Address={elem.address}
									Id={elem.id}
								/>
							);
						})}
					</ul>
				</div>
			</div>
			<Modal show={state.showModal} onClose={() => setState({ showModal: false })} />
		</div>
	);
};
