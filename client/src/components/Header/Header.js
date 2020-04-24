import React from "react";
import "./Header.css"

function Header(props) {
    return (
        <div className="jumbotron jumbotron-fluid" id="headerwrap">
            {/* <div className="container">
                <h4 className="display-4 headerFont" id="headerFont">{props.h4}</h4>
                <p className="lead headerFont" id="headerPFont">{props.p}</p>
            </div> */}
            {/* <div id="headerwrap"> */}
                <div className="container">
                    <div className="row centered">
                        <div className="col-lg-8 col-lg-offset-2">
                            <h1>{props.h1}</h1>
                            <h5>{props.h5}</h5>
                        </div>
                    </div>
                </div>
            </div>
        // </div>
    )
}

export default Header;