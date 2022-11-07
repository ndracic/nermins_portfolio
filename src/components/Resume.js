import React from "react";
import MyResume from '../assets/Resume.pdf'

function Resume() {
    return(
        <div>
            <h3>Skills</h3>
            <h4>FrontEnd</h4>
            <span>HTML5, CSS3, JAVASCRIPT ES6+, API, Bootstrap, Google Fonts and jQuery</span>
            <h4>BackEnd</h4>
            <span>Node.js, Database (MySQL, MySql2, Sequelieze,NoSQL(MongoDB)), Express, Bcrypt, Express-session, Express-Handlebars, Handlebars, Controllers (API Route), REACT</span>
            <h4>JS Framework</h4>
            <span>MERN</span>

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