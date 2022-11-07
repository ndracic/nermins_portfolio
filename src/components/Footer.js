import React from 'react';



const Footer = () => {
  return (
    <footer className="">
      <div className="">
          <a className=""  href="https://github.com/ndracic" target="_blank" rel="noreferrer">Git--</a>
          <a className=""href="www.linkedin.com/in/nermin-dracic" target="_blank" rel="noreferrer">linkedin--</a>
          <a className="" href="mailto:nermin.dracic@gmail.com" target="_blank" rel="noreferrer">email--</a>
        <h4>&copy; {new Date().getFullYear()} - Nermin Dracic</h4>
      </div>
    </footer>
  );
};

export default Footer
