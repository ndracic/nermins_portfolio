import React from "react";
import MyResume from '../assets/Resume.pdf'


export default function Aboutme() {
    return (
      <div className="Aboutme">
        <p>
            Hello, my name is Nermin, and I love developing ideas for the web." I began my career as a developer when I was a teenager. I discovered a over the years, I've honed my coding skills receiving a Full Stack Development certification from NorthWestern University, most importantly, by apps for my actual daily use.
            <br></br>
            Recently, I've discovered my passion for web development and the joy of creating useful websites like the ones in this portfolio. I'm now seeking for a junior development role to kickstart my career and learn with professionals.
        </p>
        <div>
                <h3>Resume</h3>
                <a href={MyResume} download='Nermins-Resume.pdf'>
                    <button>Download CV</button>
                </a>
            </div>
      </div>
    );
  }