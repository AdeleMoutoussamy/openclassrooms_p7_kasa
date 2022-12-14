import { Link } from "react-router-dom"

import "./footer.scss"

import Logo from "../logo/logo"

const Footer = () => {
  return (
    <footer className="footer">
      {/* Renvoie à l'accueil en cliquant dessus */}
      <Link
      className="footer__logo"
      to="/">
        <Logo
        fill="#ffffff"
        className="logo" />
      </Link>
      <div className="footer__mentions">© 2020 Kasa. All rights reserved</div>

    </footer>
  );
}

export default Footer