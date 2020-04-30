// import React from "react";
import Header from "../components/Header/Header";
import "./Signup.css";
import React, { useState, useEffect } from 'react';
// import { Redirect, Link } from 'react-router-dom';
import { useHistory } from 'react-router';  
import axios from 'axios';



function Signup() {

    const history = useHistory();

    // const {loggedIn, loggedInUsername} = useContext(userLoginContext);

    const [username, setUsername] = useState();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState();


    const submitForm = e => {
        e.preventDefault();

        axios.post('/api/users/signup', {
            username: username,
            email: email,
            password: password
        }).then((res) => {
            if(res.data.success){
                history.push("/");
            }
        })

       


    // // When the signup button is clicked, we validate the username and password are not blank
    // // signUpForm.on('submit', function (event) {
    // // event.preventDefault()
    // var userData = {
    //   username: usernameInput.val().trim(),
    //   password: passwordInput.val().trim(),
    //   rePassword: rePasswordInput.val().trim()
    // }

    // if (!userData.username && !userData.email && !userData.password && !userData.rePassword) {
    //   $('#errorEntry').attr('style', 'display: none')
    //   $('#errorHead').attr('style', 'display: block')
    //   $('#usernameLabel').attr('class', 'is-invalid-label')
    //   $('#userForm').attr({ class: 'is-invalid-input', 'aria-invalid': 'true' })
    //   $('#formNameError').attr('class', 'form-error is-visible')
    //   $('#emailLabel').attr('class', 'is-invalid-label')
    //   $('#emailForm').attr({ class: 'is-invalid-input', 'aria-invalid': 'true' })
    //   $('#formEmailError').attr('class', 'form-error is-visible')
    //   $('#passwordLabel').attr('class', 'is-invalid-label')
    //   $('#passwordForm').attr({ class: 'is-invalid-input', 'aria-invalid': 'true' })
    //   $('#formPasswordError').attr('class', 'form-error is-visible')
    //   $('#rePasswordLabel').attr('class', 'is-invalid-label')
    //   $('#rePasswordForm').attr({ class: 'is-invalid-input', 'aria-invalid': 'true' })
    //   $('#formRePasswordError').attr('class', 'form-error is-visible')
    // } else if (!userData.username && !userData.password) {
    //   $('#errorEntry').attr('style', 'display: none')
    //   $('#errorHead').attr('style', 'display: block')
    //   $('#usernameLabel').attr('class', 'is-invalid-label')
    //   $('#userForm').attr({ class: 'is-invalid-input', 'aria-invalid': 'true' })
    //   $('#formNameError').attr('class', 'form-error is-visible')
    //   $('#passwordLabel').attr('class', 'is-invalid-label')
    //   $('#passwordForm').attr({ class: 'is-invalid-input', 'aria-invalid': 'true' })
    //   $('#formPasswordError').attr('class', 'form-error is-visible')
    //   $('#rePasswordLabel').attr('class', '')
    //   $('#rePasswordForm').attr({ class: '', 'aria-invalid': '' })
    //   $('#formRePasswordError').attr('class', 'form-error')
    // } else if (!userData.username && !userData.rePassword) {
    //   $('#errorEntry').attr('style', 'display: none')
    //   $('#errorHead').attr('style', 'display: block')
    //   $('#usernameLabel').attr('class', 'is-invalid-label')
    //   $('#userForm').attr({ class: 'is-invalid-input', 'aria-invalid': 'true' })
    //   $('#formNameError').attr('class', 'form-error is-visible')
    //   $('#passwordLabel').attr('class', '')
    //   $('#passwordForm').attr({ class: '', 'aria-invalid': '' })
    //   $('#formPasswordError').attr('class', 'form-error')
    //   $('#rePasswordLabel').attr('class', 'is-invalid-label')
    //   $('#rePasswordForm').attr({ class: 'is-invalid-input', 'aria-invalid': 'true' })
    //   $('#formRePasswordError').attr('class', 'form-error is-visible')
    // } else if (!userData.password && !userData.rePassword) {
    //   $('#errorEntry').attr('style', 'display: none')
    //   $('#errorHead').attr('style', 'display: block')
    //   $('#usernameLabel').attr('class', '')
    //   $('#userForm').attr({ class: '', 'aria-invalid': '' })
    //   $('#formNameError').attr('class', 'form-error')
    //   $('#passwordLabel').attr('class', 'is-invalid-label')
    //   $('#passwordForm').attr({ class: 'is-invalid-input', 'aria-invalid': 'true' })
    //   $('#formPasswordError').attr('class', 'form-error is-visible')
    //   $('#rePasswordLabel').attr('class', 'is-invalid-label')
    //   $('#rePasswordForm').attr({ class: 'is-invalid-input', 'aria-invalid': 'true' })
    //   $('#formRePasswordError').attr('class', 'form-error is-visible')
    // } else if (!userData.username) {
    //   $('#errorEntry').attr('style', 'display: none')
    //   $('#errorHead').attr('style', 'display: block')
    //   $('#usernameLabel').attr('class', 'is-invalid-label')
    //   $('#userForm').attr({ class: 'is-invalid-input', 'aria-invalid': 'true' })
    //   $('#formNameError').attr('class', 'form-error is-visible')
    //   $('#passwordLabel').attr('class', '')
    //   $('#passwordForm').attr({ class: '', 'aria-invalid': '' })
    //   $('#formPasswordError').attr('class', 'form-error')
    //   $('#rePasswordLabel').attr('class', '')
    //   $('#rePasswordForm').attr({ class: '', 'aria-invalid': '' })
    //   $('#formRePasswordError').attr('class', 'form-error')
    // } else if (!userData.password) {
    //   $('#errorEntry').attr('style', 'display: none')
    //   $('#errorHead').attr('style', 'display: block')
    //   $('#passwordLabel').attr('class', 'is-invalid-label')
    //   $('#passwordForm').attr({ class: 'is-invalid-input', 'aria-invalid': 'true' })
    //   $('#formPasswordError').attr('class', 'form-error is-visible')
    //   $('#usernameLabel').attr('class', '')
    //   $('#userForm').attr({ class: '', 'aria-invalid': '' })
    //   $('#formNameError').attr('class', 'form-error')
    //   $('#rePasswordLabel').attr('class', '')
    //   $('#rePasswordForm').attr({ class: '', 'aria-invalid': '' })
    //   $('#formRePasswordError').attr('class', 'form-error')
    // } else if (!userData.rePassword) {
    //   $('#errorEntry').attr('style', 'display: none')
    //   $('#errorHead').attr('style', 'display: block')
    //   $('#rePasswordLabel').attr('class', 'is-invalid-label')
    //   $('#rePasswordForm').attr({ class: 'is-invalid-input', 'aria-invalid': 'true' })
    //   $('#formRePasswordError').attr('class', 'form-error is-visible')
    //   $('#usernameLabel').attr('class', '')
    //   $('#userForm').attr({ class: '', 'aria-invalid': '' })
    //   $('#formNameError').attr('class', 'form-error')
    //   $('#passwordLabel').attr('class', '')
    //   $('#passwordForm').attr({ class: '', 'aria-invalid': '' })
    //   $('#formPasswordError').attr('class', 'form-error')
    // } else if (userData.password === userData.rePassword) {
    //   // If we have a username and password, run the signUpUser function
    //   signUpUser(userData.username, userData.password)
    //   usernameInput.val('')
    //   passwordInput.val('')
    // } else {
    //   console.log('password entries do not match')
    //   $('#errorEntry').attr('style', 'display: block')
    //   $('#errorHead').attr('style', 'display: none')
    //   $('#usernameLabel').attr('class', '')
    //   $('#userForm').attr({ class: '', 'aria-invalid': '' })
    //   $('#formNameError').attr('class', 'form-error')
    //   $('#passwordLabel').attr('class', 'is-invalid-label')
    //   $('#passwordForm').attr({ class: 'is-invalid-input', 'aria-invalid': 'true' })
    //   $('#formPasswordError').attr('class', 'form-error')
    //   $('#rePasswordLabel').attr('class', 'is-invalid-label')
    //   $('#rePasswordForm').attr({ class: 'is-invalid-input', 'aria-invalid': 'true' })
    //   $('#formRePasswordError').attr('class', 'form-error is-visible')
    // }


    
//   })



    }



    return (
        <div>
            <Header h1="This Is The End" h5="Make It Light For Your Loved Ones" />

            <div className="container w">
                <div className="row centered">
                    <br />
                    <br />
                    <div id="signupContainer">
                        <h5 id="signupformheader">Create Your User Account</h5>
                        <br />
                        <form onSubmit={submitForm} data-abide noValidate className="login" id="loginForm">
                            <div data-abide-error className="alert callout" id="errorHead">
                                <p><i className="fi-alert"></i> All fields are required.</p>
                            </div>
                            <div data-abide-error className="alert callout" id="errorEntry">
                                <p><i className="fi-alert"></i> Password entries don't match. Please check and re-enter password.</p>
                            </div>
                            <div className="grid-container">
                                <div className="grid-x grid-margin-x">
                                    <div className="cell small-12">
                                        <label id="usernameLabel">
                                            Username:
                                            <br/>
                                            <input 
                                            onChange={e => setUsername(e.target.value)}
                                            className="forminput" 
                                            id="userForm" 
                                            type="text" 
                                            placeholder="username" 
                                            aria-describedby="usernameinput"
                                            aria-errormessage="usernameinputerror" required />
                                            <span id="formNameError" className="form-error">
                                                This field is required.
                                            </span>
                                        </label>
                                    </div>
                                    <div className="cell small-12">
                                        <label id="emailLabel">
                                            Email:
                                            <br/>
                                            <input 
                                            onChange={e => setEmail(e.target.value)}
                                            className="forminput" 
                                            id="emailForm" 
                                            type="text" 
                                            placeholder="username@email.com" 
                                            aria-describedby="emailinput"
                                            aria-errormessage="emailinputerror" required />
                                            <span id="formEmailError" className="form-error">
                                                This field is required.
                                            </span>
                                        </label>
                                    </div>
                                    <div className="cell small-12">
                                        <label id="passwordLabel"> Password:
                                        <br/>
                                            <input 
                                            onChange={e => setPassword(e.target.value)}
                                            className="forminput" 
                                            id="passwordForm" 
                                            type="password" 
                                            placeholder="password" 
                                            aria-describedby="passwordinput"
                                            aria-errormessage="passwordinputerror" required />
                                            <span id="formPasswordError" className="form-error">
                                                This field is required.
                                            </span>
                                        </label>
                                    </div>
                                    <div className="cell small-12">
                                        <label id="rePasswordLabel">Re-enter password:
                                        <br/>
                                            <input className="forminput" id="rePasswordForm" type="password" placeholder="re-enter password"
                                                aria-describedby="reenterpasswordinput" aria-errormessage="reenterpasswordinputerror" required
                                                pattern="alpha_numeric" data-equalto="password" />
                                            <span id="formRePasswordError" className="form-error">
                                                Password does not match.
                                            </span>
                                        </label>
                                    </div>
                                    <br />
                                    <button className="alert button" id="signupbtn" type="submit" value="Submit">Create my account <i id="signuplogo" className="fa fa-user-circle" aria-hidden="true"></i></button>
                                </div>
                                <div>
                                    <p className="loginlink">Click <a href="/">here</a> to go back to login page.</p>
                                </div>
                            </div>
                        </form>
                    </div>
                    <br />
                </div>
            </div>
        </div>
    )
}

export default Signup;