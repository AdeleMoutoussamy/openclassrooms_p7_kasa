// J'importe "useState" qui est un hook qui permet d’ajouter le state local React à des composants fonctions.
// Le state local est présent à l’intérieur d’un composant et garde sa valeur, même si l'application se re-render.
import { useState } from "react"

import "./collapse.scss"

import arrowDown from '../../assets/img/arrowDown.svg'

const Collapse = ({ content, title }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="collapse">
      <div
        className={`collapse__content ${
          !isOpen ? "collapse__content--margin" : ""
        }`}
        // Au clique on met l'inverse de l'état actuel d'isOpen grâce à la fonction setIsOpen.
        onClick={() => setIsOpen(!isOpen)}
      >
      <div className="collapse__title">{title}</div>
        <img
          className={`collapse__arrow ${
            isOpen ? "collapse__arrow--rotate" : ""
          }`}
          src={arrowDown}
          alt=""
        />
      </div>
      {/* Si isOpen est "true" on applique la className "collapse__text" sinon "collapse__hide" */}
      <div className={isOpen ? "collapse__text" : "collapse__hide"}>
        {content}
      </div>
    </div>
  )
}

export default Collapse