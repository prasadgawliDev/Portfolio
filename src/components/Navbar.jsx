import { useEffect, useState } from "react";
import "./Navbar.css";
import menuIcon from "../assets/toggle.png"; 

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      {/* Left: Name always visible */}
      <div className="navbar-logo" onClick={() => scrollToSection("home")}>
        Prasad<span> Gawli</span>
      </div>

      {/* Right: Hamburger only on mobile */}
      <img
        src={menuIcon}
        alt="menu"
        className={`menu-icon ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      />

      {/* Desktop nav links */}
      <ul className="navbar-links">
        <li onClick={() => scrollToSection("home")}>Home</li>
        <li onClick={() => scrollToSection("about")}>About</li>
        <li onClick={() => scrollToSection("projects")}>Projects</li>
        <li onClick={() => scrollToSection("skills")}>Skills</li>
        <li onClick={() => scrollToSection("experience")}>Experience</li>
        <li onClick={() => scrollToSection("contact")}>Contact</li>
        
      </ul>

      {/* Mobile slide-out menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <ul>
          <li onClick={() => scrollToSection("home")}>Home</li>
          <li onClick={() => scrollToSection("about")}>About</li>
          <li onClick={() => scrollToSection("projects")}>Projects</li>
          <li onClick={() => scrollToSection("skills")}>Skills</li>
           <li onClick={() => scrollToSection("experience")}>Experience</li>
          <li onClick={() => scrollToSection("contact")}>Contact</li>
        </ul>
      </div>
    </nav>
  );
}
