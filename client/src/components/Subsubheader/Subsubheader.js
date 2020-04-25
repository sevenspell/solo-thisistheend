import React from "react";
import "./Subsubheader.css"

function Subsubheader(props) {
    return (
        <div id="blue2">
		<div className="container">
			<div className="row centered">
				<div className="col-lg-8 col-lg-offset-2">
				<h4>{props.h4}</h4>
				<p>{props.p}</p>
				</div>
			</div>
		</div>
	</div>
    )
}

export default Subsubheader;