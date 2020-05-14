// import React from "react";
import Header from "../components/Header/Header";
import "./Home.css";
import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router';
import { UserProvider, useUserContext } from "../utils/userLoginContext"


function Home() {

	const history = useHistory();

	const [state, dispatch] = useUserContext();

	const [user, setUser] = useState({});
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	useEffect(() => {

		const getToken = localStorage.getItem('token');
		const getUserid = localStorage.getItem('userId')
		const getLoggedIn = localStorage.getItem('loggedIn')
		const getUsername = localStorage.getItem('username')

		// axios.get using userid and token from localstorage, backend use id to verify against mongoose id + token (middle)

		if (!getUserid) {
			console.log("no userid exists")
			return;
		} 
		if (getUserid) {
			console.log("userid exists")
			axios.get("/api/users/account/" + getUserid, {
				headers: {
					'accept': 'application/json',
					'Authorization': `Bearer ${getToken}`
				}
			}).then((res, err) => { // then print response status
				if (err) throw (err)

				if (res.data.success) {
					console.log(res.data.user.username)
					console.log("get userlogin status is successful")
					setUsername(getUsername)
					dispatch({ type: "logged in", username: res.data.user.username })
				}
			}).catch(err => {
				if (err) throw err;
				console.log(err)
			})
		}


	}, [])


	const submitForm = e => {
		e.preventDefault();

		axios.post('/api/users/login', {
			email: email,
			password: password
		}).then((res) => {
			console.log(res)
			if (res.data.user.success) {

				setUser(res.data.user)
				history.push("/mypeople");
				console.log(res.data.user)
				console.log(res.data.user.mes)
				console.log(res.data.user.id)
				console.log(res.data.user.username)
				console.log(res.data.token)
				localStorage.setItem('token', res.data.token)
				localStorage.setItem('userId', res.data.user.id)
				localStorage.setItem('loggedIn', true)
				localStorage.setItem('username', res.data.user.username)
				dispatch({ type: "logged in", username: res.data.user.username })
			}
		})
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

			{
				!state.username
					?
					<div id="loginContainer">
						<h5 id="loginformheader">Please login to proceed</h5>
						<form id="loginform" onSubmit={submitForm}>
							<label id="emaillabel">Email:</label>
							<input
								onChange={(e) => setEmail(e.target.value)}
								type="text"
								placeholder="Enter your login email"
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
					:
					<div></div>
			}
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