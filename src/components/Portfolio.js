import React from 'react'

function Portfolio() {

    const projects = [
        {
            id: '1',
            title: 'Shaken or Stirred Cocktails',
            github: 'https://github.com/NWbootcamp/ShakenorStirred_Cocktails',
            live : 'https://nwbootcamp.github.io/ShakenorStirred_Cocktails/',
            text: 'What are you drinking tonight? Don’t know? Shaken or Stirred has you covered! The site suggests cocktails for whatever kind of evening you want to have. The site will pull random cocktails and allows the user to get a more curated choice by specifying what kind of night they want to have, or what liquor they want to use (including none!).   And if the user is under 21, it offers a fun mix of non-alcoholic drinks. Drink choice includes a photo of the drink and the drinks name, ingredients, and instructions to make it.',
        },
        {
            id: '2',
            title: 'A quiz app',
            github: 'https://github.com/ndracic/04-WebAPIs-Coding_Quiz',
            live : 'https://ndracic.github.io/04-WebAPIs-Coding_Quiz/',
            text: 'A quiz application asking you questions about coding. Good luck!',
        },
        {
            id: '3',
            title: 'Remote Reviewer',
            github: 'https://github.com/videogame-reviewer/videogame_reviewer',
            live : 'https://remotereviewer.herokuapp.com/',
            text: 'A website that allows its users to leave reviews on the content that they please.',
        },
        {
            id: '4',
            title: 'PWA Text',
            github: 'https://github.com/ndracic/pwa-text-editor',
            live : 'https://warm-garden-48923.herokuapp.com/',
            text: 'Your own personal terminal that you can use online and offline.',
        },
     ]

    return (
        <section >
            <div className='d-flex justify-content-center p-4'>
                <h1>My Projects</h1>
            </div>
            <div className='row p-5'>
                {projects.map((e) => (
                    <div className='col-sm-6 p-5'>
                        <div className='border border-dark p-2'>
                            <div className={e.id}>
                            <img className="card-img-top" src={e.image} alt={e.id} />
                                <h5 className="card-header">{e.title}</h5>
                                <p className='card-text'>{e.text}</p>
                                <a href={e.github} className='btn btn-primary' target="_blank" rel="noreferrer">Github</a>
                                <a href={e.live} className='btn btn-primary' target="_blank" rel="noreferrer">Deployed</a>                   
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default Portfolio