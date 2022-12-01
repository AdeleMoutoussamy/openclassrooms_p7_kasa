import { useState } from "react"

import "./carrousel.scss"

import arrowLeft from "../../assets/img/arrowLeft.svg"
import arrowRight from "../../assets/img/arrowRight.svg"

const Carrousel = ({ pictures }) => {
  // Je crée un State "current" que j'initialise à 0 et déclare la fonction "updateCurrent" qui met à jour ce State.
  const [current, updateCurrent] = useState(0)

  // Je vérifie dans "props" le nombre de pictures qu'il y a dans la page "details".
  const length = pictures.length

  // Si current est égale à length (total) - 1 on le passe à 0 (1ere img) sinon on fait +1 (suivant).
  const nextPic = () => {
    updateCurrent(current === length - 1 ? 0 : current + 1);
  }

  const prevPic = () => {
    updateCurrent(current === 0 ? length - 1 : current - 1);
  }

  return (
    <div className="carrousel">
      {pictures.map((pictures, index) => {
        return (
          /* Pour chaque photo du tableau "picture" on renvoit une div */
          <div
            key={index}
            // Si l'index de la photo est égale à "current" on applique la classe "active" sinon la classe "inactive"
            className={index === current ? "carrousel__active-picture" : ""}
          >
            {/* Contenu de la div : on mappe et affiche la photo dont l'index correspond à "current" */}
            {index === current && (
              <img
                src={pictures}
                alt="Appartement"
                className="carroussel__picture"
              />
            )}
          </div>
        );
      })}
      {/* affichage du bouton s'il y a plus d'une photo.
      La src ce sont les svg et au clique on appele les variables d'expression qui mettent à jour le state */}
      {length > 1 ? (
        <>
          <div className="carrousel__prev" onClick={prevPic}>
            <img src={arrowLeft} alt="" className="carrousel__prev-icon" />
          </div>
          <div className="carrousel__next" onClick={nextPic}>
            <img src={arrowRight} alt="" className="carrousel__next-icon" />
          </div>
        </>
      ) : null}
    </div>
  );
}

export default Carrousel;
