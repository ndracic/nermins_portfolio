import React from 'react';



const Footer = () => {
  return (
    <footer className="text-center text-grey ">
      <div className="">
          <a className=""  href="https://github.com/ndracic" target="_blank" rel="noreferrer">Git -</a>
          <a className=""href="www.linkedin.com/in/nermin-dracic" target="_blank" rel="noreferrer">- LinkedIn -</a>
          <a className="" href="mailto:nermin.dracic@gmail.com" target="_blank" rel="noreferrer">- Email</a>
        <h4>&copy; {new Date().getFullYear()} - Nermin Dracic</h4>
      </div>
    </footer>
  );
};

export default Footer
