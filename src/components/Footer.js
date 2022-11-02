import React from 'react';
// import { FontAwesomeIcon } from './FooterStyles'
// Import hooks from React Router
// import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  // We retrieve the current `location` object data from React Router
//   const location = useLocation();
//   // We get React Router's navigate object so we can access and adjust browser history
//   const navigate = useNavigate();
  return (
    <footer className="w-100 mt-auto text-dark p-4">
      <div className="container text-center mb-5">
        {/* {location.pathname !== '/' && ( */}
          {/* <button
            className="btn btn-dark mb-3"
            // Go back to the previous page in our browser's history. -1 represents one page back in the browser history.
            // onClick={() => navigate(-1)}
          >
            &larr; Go Back
          </button>
        )} */}
        <h4>&copy; {new Date().getFullYear()} - Nermin Dracic</h4>
        <div>
          <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
          <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" />
        </div>
      </div>
    </footer>
  );
};

export default Footer
