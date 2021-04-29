import React, { useState, useContext, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal";
import { Footer } from "../component/footer";

export const Contacts = () => {
	const [state, setState] = useState({
		showModal: false,
		id: null
	});

	const { store, actions } = useContext(Context);
	const [redirect, setRedirect] = useState();

	useEffect(() => {
		actions.getAgenda();
	}, []);

	return (
		<div className="container">
			{redirect ? <Redirect to="/add" /> : ""}
			<div>
				<p className="text-right my-3">
					<Link className="btn btn-success" to="/add">
						Add new contact
					</Link>
				</p>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						{store.agenda.map((contact, index) => {
							return (
								<ContactCard
									onDelete={() => setState({ showModal: true })}
									key={index}
									setRedirect={setRedirect}
									full_name={contact.full_name}
									email={contact.email}
									phone={contact.phone}
									address={contact.address}
									id={contact.id}
								/>
							);
						})}
					</ul>
				</div>
			</div>
			<Modal show={state.showModal} onClose={() => setState({ showModal: false })} />
			<Footer></Footer>
		</div>
	);
};
