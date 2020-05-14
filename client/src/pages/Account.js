import React, { useRef, useState, useEffect, useContext } from "react";
import { useHistory } from 'react-router';
import Subsubheader from "../components/Subsubheader/Subsubheader";
import { UserProvider, useUserContext } from "../utils/userLoginContext";
import "./Account.css";
import axios from "axios";

function Account() {

    // for page redirect
    const history = useHistory();

    // useRef
    var formRef = useRef();

    // useContext
	const [ state, dispatch ] = useUserContext();

    // useState
    const [user, setUser] = useState();
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();

    //to set initial state after page load to display nominee list
    useEffect(() => {

        const getToken = localStorage.getItem('token');
        const getUserid = localStorage.getItem('userId');

        axios.get("/api/users/account/" + getUserid, {
            headers: {
                'accept': 'application/json',
                'Authorization': `Bearer ${getToken}`
            }
        }).then(function (res, err) {
                if (err) throw err;
                console.log("getting userlogin status is successful");
                dispatch({type:"logged in", username: res.data.user.username});
                const accountData = res.data;
                setUser(accountData);
                setUsername(res.data.user.username);
                setEmail(res.data.user.email);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])

    //call api/account to get info and put info inside JSX

    return (
        <div>
            <Subsubheader h4="My Account" p="Update your account details" />

            <div className="wrapperaccount">
                <h5 id="accountHeader">Account Details</h5>
                <div className="container" id="accountContainer">
                    <p className="accountItem" id="accountUsername">Username: <span className="accountValue">{username}</span> <button type="button" className="btn accountChangeBtn">Change Username</button></p>
                    <p className="accountItem" id="accountEmail">Email: <span className="accountValue">{email}</span></p>
                    <p className="accountItem" id="accountPassword">Password: <button type="button" className="btn accountChangeBtn">Change Password</button></p>
                    <br />
                    <br />
                </div>
            </div>
        </div>
    )
}

export default Account;