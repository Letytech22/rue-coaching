
import { Linkedin, Instagram, Facebook, ArrowRight,ArrowUp, Bookmark,Menu,
    X, } from "lucide-react";

    export default function FooterSection (){
      return (

     

<footer className="rue-footer">
  <div className="rue-footer-container">

    {/* Social media icons */}
    <div className="rue-footer-socials">
      <a
        href="https://www.linkedin.com/in/ruthmwongelimuthoka/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <Linkedin />
      </a>

      <a
        href="#"
        aria-label="More links"
      >
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

    {/* Copyright */}
    <p className="rue-footer-copyright">
  © {new Date().getFullYear()} All Rights Reserved
</p>

{/* Developer Credit */}
<p className="rue-footer-credit">
  Developed by{" "}
  <a
    href="https://letytechconsultancy.co.ke/"
    target="_blank"
    rel="noopener noreferrer"
  >
    LetyTech Consultancy
  </a>
</p>

  

  </div>
</footer>

)
}
