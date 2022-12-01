import "./rate.scss"

import redStar from "../../assets/img/redStar.svg"
import greyStar from "../../assets/img/greyStar.svg"

const Rate = (props) => {
  const rating = props.rating
  const stars = [1, 2, 3, 4, 5]
  return (
    <div className="rating">
      {/* Je map l'array "stars" et je compare avec la note fournit dans data ("logements.json").
      Si stars est > ou = on met une étoile rouge sinon grise */}
      {stars.map((star) =>
        rating >= star ? (
          <img
            key={star.toString()}
            className="rating__icon"
            src={redStar}
            alt="étoile plus"
          />
        ) : (
          <img
            key={star.toString()}
            className="rating__icon"
            src={greyStar}
            alt="étoile moins"
          />
        )
      )}
    </div>
  )
}

export default Rate