import React from "react";
import "./Footer.css"

function Footer() {
    return (
        <div>
            {/* <p id="detailslink" className="fixed-bottom col-sm-12">
                Credits: logo design @ <a href="https://logomakr.com/" target="blank">logomakr</a>
            </p> */}
            <nav className="navbar fixed-bottom col-sm-12" id="navbarfooter">
            <div id="detailslink" className="fixed-bottom col-sm-12">
                Credits: logo design @ <a href="https://logomakr.com/" target="blank">logomakr</a>
            </div>
                <div id="footerfont">&copy; This Is The End 2020</div>
            </nav>
        </div>
    )
}

export default Footer;