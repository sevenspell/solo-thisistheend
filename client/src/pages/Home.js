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
                        <i className="fa fa-heart"></i>
                        <h4>DESIGN</h4>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even believable.</p>
                    </div>

                    <div className="col-lg-4">
                        <i className="fa fa-laptop"></i>
                        <h4>BOOTSTRAP</h4>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even believable.</p>
                    </div>

                    <div className="col-lg-4">
                        <i className="fa fa-trophy"></i>
                        <h4>SUPPORT</h4>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even believable.</p>
                    </div>
                </div>
                <br />
                <br />
            </div>
        </div>
    )
}

export default Home;