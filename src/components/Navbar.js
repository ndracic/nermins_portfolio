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
    <nav>
    <ul className="navbar navbar-expand-lg navbar-light" id="mainNav">
      <li className="nav-item">
      <Link to="">
          Homepage
        </Link>
        </li>
      <li className="nav-item">
        <Link
          to="resume"
        >
          Resume
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="aboutme"
        >
          Aboutme
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="projects"
        >
          Projects
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="contact"
        >
          Contact
        </Link>
      </li>
    </ul>
    </nav>

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
