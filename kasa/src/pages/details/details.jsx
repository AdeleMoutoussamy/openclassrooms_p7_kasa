// J'importe useParams qui va me permettre de récupérer l'id des paramètres de l'URL actuelle qui ont été mis en correspondance par la <Route path="/details/:id" element={<Details />} />.
import { useParams } from "react-router-dom"

import data from "../../assets/data/logements.json"

import Carrousel from "../../components/carrousel/carrousel"
import Tags from "../../components/Tags/tags"
import Rate from "../../components/Rate/rate"
import HostName from "../../components/hostname/hostname"
import Collapse from "../../components/collapse/collapse"





const Logement = () => {
  // Je récupère l'id dans la constante "productId".
  const { productId } = useParams()

  // Je map "data" pour récupèrer l'Appartement et ses caractéristiques qui a pour id celui renseigné dans les paramètres d'url
  const logement = data.find((logement) => logement.id === productId)

  // Permet directement de déclarer une variable et de lui assigner la valeur d'une propriété d'un objet
  const { title, pictures, description, host, rating, location, equipments } = logement

  return (
    <section className="logement">

      <Carrousel props={pictures} />
        <div className="logement__content">
          <div className="logement__infos">
            <h1 className="logement__title">{title}</h1>
            <p className="logement__location">{location}</p>

            <div className="logement__tags">
              {logement.tags.map((tag, index) => (
                <Tags key={index} getTag={tag} />
              ))}
            </div>

          </div>

          <div className="logement__rating-and-host">
            <Rate rating={rating} />
            <HostName host={host} />
          </div>
        </div>

        <div className="logement__dropdowns">

        <Collapse title="Description" content={description} />
        <Collapse
          title="Equipements"
          content={equipments.map((equipment, index) => (
            <li className="logement__dropdowns__list" key={index}>
              {equipment}
            </li>
          ))}
        />
      </div>

    </section>
  )
}

export default Logement