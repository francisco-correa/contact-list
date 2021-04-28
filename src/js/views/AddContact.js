import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddContact = () => {
	const { actions } = useContext(Context);
	const [full_name, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");

	const handleSubmit = e => {
		e.preventDefault();
		const newContact = {
			full_name: full_name,
			email: email,
			phone: phone,
			address: address,
			agenda_slug: "panchoCorrea"
		};

		actions.createNewContact(newContact);
		alert("New contact has been successfully created");
		setFullName("");
		setEmail("");
		setPhone("");
		setAddress("");
	};
	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							className="form-control"
							name="full_name"
							placeholder="Full Name"
							onChange={e => setFullName(e.target.value)}
							value={full_name}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							name="email"
							placeholder="Enter email"
							onChange={e => setEmail(e.target.value)}
							value={email}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							className="form-control"
							name="phone"
							placeholder="Enter phone"
							onChange={e => setPhone(e.target.value)}
							value={phone}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className="form-control"
							name="address"
							placeholder="Enter address"
							onChange={e => setAddress(e.target.value)}
							value={address}
						/>
					</div>
					<button type="button" className="btn btn-primary form-control" onClick={handleSubmit}>
						Save New Contact
					</button>
					<Link className="mt-3 w-100 text-center" to="/">
						Back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};
