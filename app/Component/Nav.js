"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const Nav = () => {
  const [bgcolor, setBgcolor] = useState(false);

  const handle = () => {
    document.body.style.backgroundColor = bgcolor ? "white" : "black";
    document.body.style.color = bgcolor ? "black" : "white";
    setBgcolor(!bgcolor);
  };

  return (
    <div className="nav flex justify-between gap-6 mb-4">
      <h1 className="head text-2xl font-bold"><Link href="/">Mohit Portfolio</Link></h1>
      <nav className="main text-2xl font-bold flex gap-5">
        <h1><Link href="./About">About Me</Link></h1>
        <h1><Link href="./Skills">Skills</Link></h1>
        <h1><Link href="./Project">Project</Link></h1>
        <h1><Link href="./Contact">Contact Me</Link></h1>
        <button 
        onClick={handle} 
        aria-label={bgcolor ? "Switch to Light Mode" : "Switch to Dark Mode"}
        className="h-[35px] w-[35px] rounded-[25%] bg-gray-300 hover:bg-gray-400 transition-all duration-300"
      >
        {bgcolor ? "☀️" : "🌙"}
      </button>
      </nav>
    
    </div>
  );
};

export default Nav;
