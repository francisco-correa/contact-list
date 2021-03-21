import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext.js";

export function UpdateContact() {
	const params = useParams();

	const { store, actions } = useContext(Context);

	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");

	useEffect(() => {
		actions.getContact(params.id);
	}, []);

	useEffect(() => {
		setFullName(store.contact.full_name);
		setPhone(store.contact.phone);
		setEmail(store.contact.email);
		setAddress(store.contact.address);
	}, [store.contact]);

	const UpdateContact = event => {
		const newContact = {
			full_name: fullName,
			phone: phone,
			email: email,
			address: address,
			agenda_slug: store.user
		};

		actions.updateContact(params.id, newContact);

		alert("Contact successfully updated");
		setFullName("");
		setPhone("");
		setEmail("");
		setAddress("");
	};

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Update a new contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							className="form-control"
							placeholder="Full Name"
							onChange={event => setFullName(event.target.value)}
							value={fullName}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							placeholder="Enter email"
							onChange={event => setEmail(event.target.value)}
							value={email}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							className="form-control"
							placeholder="Enter phone"
							onChange={event => setPhone(event.target.value)}
							value={phone}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className="form-control"
							placeholder="Enter address"
							onChange={event => setAddress(event.target.value)}
							value={address}
						/>
					</div>
					<Link to="/">
						<button type="button" className="btn btn-primary form-control" onClick={UpdateContact}>
							Update
						</button>
					</Link>
					<Link className="mt-3 w-100 text-center" to="/">
						Get Back To Contacts
					</Link>
				</form>
			</div>
		</div>
	);
}
