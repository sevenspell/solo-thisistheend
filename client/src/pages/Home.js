// import React from "react";
import Header from "../components/Header/Header";
import "./Home.css";
import React, { useState, useEffect } from 'react'
import axios from 'axios';

function Home() {

	const [users, setUsers] = useState(null);

	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	// useEffect(() => {
	// 	axios
	// 		.get("/api/account")
	// 		.then((users) => setUsers(users))
	// 		.catch((err) => console.log(err));
	// }, []);

	function submitForm() {
		if (username === "") {
			alert("Username is missing");
			return;
		}
		if (password === "") {
			alert("Password is missing");
			return;
		}
		axios
			.post("/api/account", {
				username: username,
				email: email,
			})
			.then(function () {
				alert("Account created successfully");
				window.location.reload();
			})
			.catch(function () {
				alert("Could not create account. Please try again");
			});
	}

	return (
		<div>
			<Header h1="This Is The End" h5="Make It Light For Your Loved Ones" />

			<div className="container w">
				<div className="row centered">
					<br />
					<br />

					<div className="col-lg-4">
						<i className="fa fa-upload"></i>
						<h4>CONSOLIDATE</h4>
						<p>Put all your important documents and last wishes together to make it easier for your loved ones to deal with all that happens after your death.</p>
					</div>

					<div className="col-lg-4">
						<i className="fa fa-heart"></i>
						<h4>NOMINATE</h4>
						<p>Choose the trusted people in your life to deal with your administrative matters.</p>
					</div>

					<div className="col-lg-4">
						<i className="fa fa-lock"></i>
						<h4>SECURE</h4>
						<p>Your important documents and private information are safe and secure with us.</p>
					</div>
				</div>
				<br />
				<br />
			</div>
			<div id="loginContainer">
				<h5 id="loginformheader">Please login to proceed</h5>
				<form id="loginform" onSubmit={submitForm}>
					<label id="usernamelabel">Username:</label>
					<input
						onChange={(e) => setUsername(e.target.value)}
						type="text"
						placeholder="Enter your username"
						className="forminput"
					/>
					<br />
					<label id="passwordlabel">Password:</label>
					<input
						onChange={(e) => setPassword(e.target.value)}
						type="password"
						placeholder="Enter your password"
						className="forminput"
					/>
					<br />
					<button type="submit" id="loginbtn">Login <i className="fa fa-sign-in" id="loginlogo" aria-hidden="true"></i></button>
				</form>
				<p id="signuplink">If you do not have an account, click <a href="/signup">here</a> to create one.</p>
			</div>
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
		</div>
	)
}

export default Home;