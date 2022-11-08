import React from "react";
import MyResume from '../assets/Resume.pdf'

function Resume() {
    return(
        <div className="Resume">
            <h4>FrontEnd</h4>
            <span>HTML5, CSS3, JAVASCRIPT ES6+, API, Bootstrap, Google Fonts and jQuery</span>
            <br></br>
            <br></br>
            <h4>BackEnd</h4>
            <span>Node.js,<br></br> Database (MySQL, MySql2, Sequelieze, MongoDB) <br></br> Express, Bcrypt, Express-session, Express-Handlebars, Handlebars, Controllers (API Route), REACT</span>
            <br></br>
            <br></br>
            <h4>JS Framework</h4>
            <span>MERN</span>
            <br></br>
            <br></br>

            <div>
                <h3>Resume</h3>
                <a href={MyResume} download='MyResume.pdf'>
                    <button>Download CV</button>
                </a>
            </div>
        </div>
    )
}

export default Resume