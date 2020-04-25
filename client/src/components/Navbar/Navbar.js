import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {

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
                        {/* <li className="nav-item">
                            <Link
                                to="/"
                                className={
                                    // window.location.pathname === "/" || 
                                    window.location.pathname === "/"
                                        ? "nav-link active"
                                        : "nav-link"
                                }>
                                About
                        </Link>
                        </li> */}
                        <li className="nav-item">
                            <Link
                                to="/"
                                className={
                                    // window.location.pathname === "/" || 
                                    window.location.pathname === "/home"
                                        ? "nav-link active"
                                        : "nav-link"
                                }>
                                Home
                        </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/gameover"
                                className={window.location.pathname === "/gameover" ? "nav-link active" : "nav-link"}
                            >
                                Game Over
                        </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/mypeople"
                                className={window.location.pathname === "/mypeople" ? "nav-link active" : "nav-link"}
                            >
                                My People
                        </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/myaccount"
                                className={window.location.pathname === "/myaccount" ? "nav-link active" : "nav-link"}
                            >
                                My Account
                        </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;

