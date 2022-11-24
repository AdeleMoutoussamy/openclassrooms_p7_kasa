import { Link } from "react-router-dom";

import "./header.scss";

import Logo from "../logo/logo";

function Header() {
  return (
    <header className="header">
      <Link 
      className="header__logo" 
      to="/">
        <Logo 
        fill="#FF6060" 
        className="logo" />
      </Link>
      <nav className="header__nav">
        <Link 
        className="nav-link" 
        to="/">
          Accueil
        </Link>

        <Link 
        className="nav-link" 
        to="about">
          A propos
        </Link>
      </nav>
    </header>
  );
}

export default Header;