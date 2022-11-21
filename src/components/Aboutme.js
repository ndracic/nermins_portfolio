import React from "react";

export default function Aboutme() {
  const pic =[
    {
      image: require('../images/me.jpeg'),
      id: 'profile pic'
    }
  ]
    return (
      <div className="Aboutme">
        {pic.map((e) => (
          <div className='p-5'>
            <div className='border border-dark p-2'>

              <img className="card-img-top" src={e.image} alt={e.id} />

            </div>
          </div>

      ))}        
      <p className="about">
            Hello, my name is Nermin, and I love developing ideas for the web. I began my career as a developer when I was a teenager. I discovered the passion for coding over the years, I've honed my coding skills receiving a Full Stack Development certification from NorthWestern University, leading me to create apps that I actually use.
            <br></br>
            Recently, I've discovered my passion for web development and the joy of creating useful websites like the ones in this portfolio. I'm now seeking for a junior development role to kickstart my career and learn with professionals.
        </p>
      </div>
    );
  }