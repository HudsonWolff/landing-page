import { useEffect, useState } from "react";
import './style.css'

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleMouseMove = () => {
      setHidden(false);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleLinkClick = () => {
    setHidden(true);
  };
  
  return (
   
      <header className={`${scrolled ? 'scrolled' : ''} ${hidden ? 'hidden' : ''}`}>
<img src="src\assets\logo.jpg" alt="logo do evento AnimeConnect" />
<nav>
<ul>
<li> <a href="#section-hero" onClick={handleLinkClick}>Home</a>  </li>
    <li> <a href="#about-section" onClick={handleLinkClick}>Sobre</a>  </li>
    <li> <a href="#schedule-section" onClick={handleLinkClick}>Cronograna</a>  </li>
    <li><a href="#section-tickets" onClick={handleLinkClick}> Ingressos</a> </li>
    <li> <a href="#location-section" onClick={handleLinkClick}>Localização</a> </li>
    <li> <a href="#contact-section" onClick={handleLinkClick}>Contato</a> </li>
    <li> <a href="#section-form"  onClick={handleLinkClick}>NewsLetter</a> </li>
</ul>



</nav>


</header>
  )
}

export default Header