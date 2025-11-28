import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenuAddLine } from "react-icons/ri";   // <-- YOUR ICON
import { FiX } from "react-icons/fi";             // Close icon
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2><img src="/style1.jpg" alt="" /></h2>
      </div>

      {/* Menu Links */}
      <ul className={open ? "navbar-links active" : "navbar-links"}>
        <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setOpen(false)}>About</Link></li>
        <li><Link to="/skills" onClick={() => setOpen(false)}>Skills</Link></li>
        <li><Link to="/projects" onClick={() => setOpen(false)}>Projects</Link></li>
        <li><Link to="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
      </ul>

      {/* Mobile Menu Icon */}
      <div className="menu-icon" onClick={() => setOpen(!open)}>
        {open ? <FiX size={28} /> : <RiMenuAddLine size={30} />}  
      </div>
    </nav>
  );
}

export default Navbar;
