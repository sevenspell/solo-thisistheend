import React from "react";
import Header from "../components/Header/Header";
import "./Home.css";

function Home() {
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
        </div>
    )
}

export default Home;