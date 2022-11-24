import React from "react"

import "./logementCard.scss"

const LogementCard = ({ cover, title }) => {
  return (
    <article className="article">
      <img className="article__image" src={cover} alt="Appartement" />
      <div className="article__title">{title}</div>
    </article>
  )
}

export default LogementCard