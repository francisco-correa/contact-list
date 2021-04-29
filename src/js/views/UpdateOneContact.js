import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import PropTypes from "prop-types";
import Swal from "sweetalert2";

export function UpdateOneContact(props) {
	const { store, actions } = useContext(Context);

	let id = props.match.params.id;
	const [fullName, setFullName] = useState(store.contact ? store.contact.full_name : "");
	const [email, setEmail] = useState(store.contact ? store.contact.email : "");
	const [phone, setPhone] = useState(store.contact ? store.contact.phone : "");
	const [address, setAddress] = useState(store.contact ? store.contact.address : "");

	useEffect(() => {
		actions.getContact(id);
	}, []);

	const handleSubmit = e => {
		e.preventDefault();
		actions.updateContact(id, fullName, email, phone, address);
		console.log(id, "<--i-am-the-id");

		const ShowAlert = Swal.mixin({
			toast: true,
			position: "bottom",
			showConfirmButton: true,
			confirmButtonColor: "#EEAA7B",
			cancelButtonText: "Ok",
			timer: 4000,
			timerProgressBar: true,
			didOpen: toast => {
				toast.addEventListener("mouseenter", Swal.stopTimer);
				toast.addEventListener("mouseleave", Swal.resumeTimer);
			}
		});

		ShowAlert.fire({
			icon: "info",
			title: "contact has been updated."
		});
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
