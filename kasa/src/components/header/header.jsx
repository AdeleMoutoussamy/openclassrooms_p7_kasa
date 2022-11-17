import { Link } from "react-router-dom";

function Header()
{
  return (
    <header className="header">
      <nav className="header__nav">
        <Link className="nav-link" to="/">
          Accueil
        </Link>
        <Link className="nav-link" to="about">
          A propos
        </Link>
      </nav>
    </header>
  );
}

export default Header;