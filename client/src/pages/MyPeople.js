import React from "react";
import Subheader from "../components/Subheader/Subheader";
import "./MyPeople.css";

function MyPeople() {
    return (
        <div>
            <Subheader h4="My People" p="Nominate your trusted people to take care of administrative matters" />

            <div className="container w">
                <ul className="list-group">
                    <li className="list-group-item">Dapibus ac facilisis in</li>


                    <li className="list-group-item list-group-item-primary">This is a primary list group item</li>
                    <li className="list-group-item list-group-item-secondary">This is a secondary list group item</li>
                    <li className="list-group-item list-group-item-success">This is a success list group item</li>
                    <li className="list-group-item list-group-item-danger">This is a danger list group item</li>
                    <li className="list-group-item list-group-item-warning">This is a warning list group item</li>
                    <li className="list-group-item list-group-item-info">This is a info list group item</li>
                    <li className="list-group-item list-group-item-light">This is a light list group item</li>
                    <li className="list-group-item list-group-item-dark">This is a dark list group item</li>
                </ul>
                <br />
                <br />
            </div>
        </div>
    )
}

export default MyPeople;