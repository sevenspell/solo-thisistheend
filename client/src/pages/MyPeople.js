import React from "react";
import Subheader from "../components/Subheader/Subheader";
import "./MyPeople.css";

function MyPeople() {
    return (
        <div>
            <Subheader h4="My People" p="Nominate your trusted people to take care of administrative matters" />

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
                        <p>Your private information is safe and secure with us.</p>
                    </div>
                </div>
                <br />
                <br />
            </div>
        </div>
    )
}

export default MyPeople;