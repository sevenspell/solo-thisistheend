import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import axios from 'axios';
import { useHistory } from 'react-router';
import UserLoginContext from "../../utils/userLoginContext";

function Navbar() {

    const { user, setUser } = useContext(UserLoginContext);

    const history = useHistory();

    const logout = e => {
        e.preventDefault();

        axios.get('/api/users/logout').then((res) => {

            if (res.data.success) {
                localStorage.removeItem('jwt')
                setUser(null);
                history.push("/");
            }
        })
    }

    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top" id="navbarContainer">
                <Link className="navbar-brand" to="/">
                    <img id="logo" alt="mylogo" src="./logo192.png" height="50" width="50"
                        align="left" />
                </Link>

                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbartoggler" aria-controls="navbartoggler" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <p id="logotext">A Place To Draw Your Full Stop.</p>
                <div className="collapse navbar-collapse" id="navbartoggler">
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                        {
                            user
                                ?
                                <li className="nav-item">
                                    <Link
                                        to="/"
                                        className={
                                            window.location.pathname === "/"
                                                ? "nav-link active"
                                                : "nav-link"
                                        }>
                                        Home
                                    </Link>
                                </li>
                                :
                                <li></li>
                        }
                        {/* <li className="nav-item">
                            <Link
                                to="/"
                                className={
                                    window.location.pathname === "/"
                                        ? "nav-link active"
                                        : "nav-link"
                                }>
                                Home
                        </Link>
                        </li> */}

                        {
                            user
                                ?
                                <li className="nav-item">
                                    <Link
                                        to="/gameover"
                                        className={window.location.pathname === "/gameover" ? "nav-link active" : "nav-link"}
                                    >
                                        Game Over
                            </Link>
                                </li>
                                :
                                <li></li>
                        }
                        {/* <li className="nav-item">
                            <Link
                                to="/gameover"
                                className={window.location.pathname === "/gameover" ? "nav-link active" : "nav-link"}
                            >
                                Game Over
                        </Link>
                        </li> */}

                        {
                            user
                                ?
                                <li className="nav-item">
                                    <Link
                                        to="/mypeople"
                                        className={window.location.pathname === "/mypeople" ? "nav-link active" : "nav-link"}
                                    >
                                        My People
                            </Link>
                                </li>
                                :
                                <li></li>
                        }
                        {/* <li className="nav-item">
                            <Link
                                to="/mypeople"
                                className={window.location.pathname === "/mypeople" ? "nav-link active" : "nav-link"}
                            >
                                My People
                        </Link>
                        </li> */}

                        {
                            user
                                ?
                                <li className="nav-item">
                                    <Link
                                        to="/myaccount"
                                        className={window.location.pathname === "/myaccount" ? "nav-link active" : "nav-link"}
                                    >
                                        My Account
                            </Link>
                                </li>
                                :
                                <li></li>
                        }
                        {/* <li className="nav-item">
                            <Link
                                to="/myaccount"
                                className={window.location.pathname === "/myaccount" ? "nav-link active" : "nav-link"}
                            >
                                My Account
                        </Link>
                        </li> */}
                        {
                            user
                                ?
                                <li className="nav-item">

                                    <button id="logoutbtn" onClick={logout}>Logout  <i className="fa fa-sign-out" id="logoutlogo" aria-hidden="true"></i></button>
                                </li>
                                :
                                <li></li>
                        }

                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;

