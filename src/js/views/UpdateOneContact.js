import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import PropTypes from "prop-types";

export function UpdateOneContact(props) {
	const { store, actions } = useContext(Context);

	let id = props.match.params.id;
	let contact = store.contact[props.match.params];
	const [phone, setPhone] = useState(contact ? contact.phone : "");
	const [fullName, setFullName] = useState(contact ? contact.full_name : "");
	const [email, setEmail] = useState(contact ? contact.email : "");
	const [address, setAddress] = useState(contact ? contact.address : "");

	useEffect(() => {
		actions.getContact();
	}, []);

	const handleSubmit = e => {
		e.preventDefault();
		actions.updateContact(id, fullName, email, phone, address);
		console.log(store.contact);
		console.log(id, "<--soy el id");
		console.log(fullName, "<--soy el name");
		console.log(phone, "<--soy el phone");
		console.log(email, "<--soy el email");
		console.log(address, "<--soy el address");
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
							name="fullName"
							onChange={e => setFullName(e.target.value)}
							value={fullName}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							placeholder="Enter email"
							name="email"
							onChange={e => setEmail(e.target.value)}
							value={email}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							className="form-control"
							placeholder="Enter phone"
							name="phone"
							onChange={e => setPhone(e.target.value)}
							value={phone}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className="form-control"
							placeholder="Enter address"
							name="address"
							onChange={e => setAddress(e.target.value)}
							value={address}
						/>
					</div>
					<Link to="/">
						<button type="button" className="btn btn-primary form-control" onClick={handleSubmit}>
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

UpdateOneContact.propTypes = {
	match: PropTypes.object
};
