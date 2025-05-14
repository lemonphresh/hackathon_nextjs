"use client";
import React, { useState } from "react";
import "./Navbar.css";
import Button from "@/components/atoms/Button";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className="navbar-logo">
        <h1>Logo</h1>
      </div>
      <div className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="navbar-search">
        <Button circular variant="default" icon={MagnifyingGlassIcon}>
          Search
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
