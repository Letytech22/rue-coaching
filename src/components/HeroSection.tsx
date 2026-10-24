
import { useState } from "react";
import {
  Linkedin,
  Instagram,
  Facebook,
  Bookmark,
  Menu,
  X,
} from "lucide-react";

export default function HeroSection() {
  const [socialMenuOpen, setSocialMenuOpen] = useState(false);

  return (
    <header className="rue-hero">

      {/* SOCIAL ICONS AND MOBILE MENU */}
      <div className="rue-social-menu">

        {/* Hamburger button for mobile */}
        <button
          type="button"
          className="rue-menu-toggle"
          onClick={() => setSocialMenuOpen(!socialMenuOpen)}
          aria-label={
            socialMenuOpen
              ? "Close social menu"
              : "Open social menu"
          }
          aria-expanded={socialMenuOpen}
          aria-controls="rue-social-links"
        >
          {socialMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Social media links */}
        <div
          id="rue-social-links"
          className={`rue-socials ${
            socialMenuOpen ? "rue-socials-open" : ""
          }`}
        >
          <a
            href="https://www.linkedin.com/in/ruthmwongelimuthoka/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin />
          </a>

          <a href="#" aria-label="More links">
            <Bookmark />
          </a>

          <a
            href="https://instagram.com/ruthmwongeli"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Instagram />
          </a>

          <a
            href="https://www.facebook.com/ruth.mwongeli.1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <Facebook />
          </a>
        </div>
      </div>

      {/* Main hero content */}
      <div className="rue-hero-content">
        <h1>
          Young people shouldn’t have to figure out their future alone.
        </h1>

        <p>
          RueCoaching helps young people understand themselves,
          explore what is possible, and build the confidence
          and skills to make better choices about education,
          career and the future.
        </p>
      </div>

    </header>
  );
}
