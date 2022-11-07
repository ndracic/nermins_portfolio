import React from 'react';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Aboutme from './Aboutme';
import Contact from './Contact';
import Homepage from './Homepage';
import Portfolio from './Portfolio';
import Resume from './Resume';

// import { useState } from 'react';
// import '../styles/Navbar.css';

// By importing the Navbar.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding
function Navbar({ currentPage, handlePageChange }) {
  return (
    <BrowserRouter>

    <ul className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
      <li className="nav-item">
        <Link
          to="resume"
          onClick={() => handlePageChange('Resume')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Resume"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </Link>
      </li>
      <Link
          to=""
          onClick={() => handlePageChange('Homepage')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Homepage"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'Homepage' ? 'nav-link active' : 'nav-link'}
        >
          Homepage
        </Link>
      <li className="nav-item">
        <Link
          to="aboutme"
          onClick={() => handlePageChange('Aboutme')}
          // Check to see if the currentPage is `Aboutme`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Aboutme' ? 'nav-link active' : 'nav-link'}
        >
          Aboutme
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="projects"
          onClick={() => handlePageChange('Projects')}
          // Check to see if the currentPage is `Projects`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
        >
          Projects
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="contact"
          onClick={() => handlePageChange('Contact')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </Link>
      </li>
    </ul>
      <Routes>
        <Route path='' element={<Homepage />} />
        <Route path='aboutme' element={<Aboutme />} />
        <Route path='contact' element={<Contact />} />
        <Route path='projects' element={<Portfolio />} />
        <Route path='resume' element={<Resume />} />
      </Routes>
    </BrowserRouter>

  );
}

export default Navbar;
