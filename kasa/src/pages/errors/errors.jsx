import { Link } from "react-router-dom"

import "./errors.scss"

// Composant "Errors" pour la page d'Erreur.
const Errors = () => {
  return (
    <div className="error">
      <div className="error__number">404</div>
      <div className="error__msg">
        Oups! La page que vous demandez n'existe pas.
      </div>
      <Link
        className="error__back-link"
        to="/"
        title="Retour page d'accueil"
      >
        Retourner sur la page d'accueil
      </Link>
    </div>
  )
}

export default Errors