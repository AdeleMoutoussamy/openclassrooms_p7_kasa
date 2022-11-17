// J'importe le style.
import "./home.scss";

// J'importe les composants dont j'ai besoin.
import Banner from "../../components/banner/banner";
import LogementCard from "../../components/logementCard/logementCard";

// J'importe les données.
import data from "../../assets/data/logements.json";
import bannerImg from "../../assets/img/bannerImg.jpg";

import { Link } from "react-router-dom";

// Composant fonction "Home" pour la page d'Accueil.
function Home()
{
  const bannerTitle = "Chez vous, partout et ailleurs";
  return (
    <div>
      {/* Utilisation de props (objets que l'on peut récupérer dans les paramètres de notre composant fonction.). */}
      <Banner title={bannerTitle} picture={bannerImg} />
      <main className="main">
        {/* Méthode "map" passe sur chaque élément d'un tableau. Elle lui applique une fonction, et renvoie un nouveau tableau contenant les résultats de cette fonction appliquée sur chaque élément. */}
        {data.map((logement) =>
        {
          return (
            <Link to={`/logement/${logement.id}`}
              /* "key" aident React à identifier quels éléments d’une liste ont changé, ont été ajoutés ou supprimés. */
              key={logement.id} title={logement.title}>
              {/* Le spread operator "..." permert de récupérer toutes les données de chaque logement mappé. Ici on récupère le "cover" et le "title". */}
              <LogementCard {...logement} />
            </Link>
          );
        })}
      </main>
    </div>
  );
}

// "export default" Syntaxe qui permet de ne pas utiliser les accolades au moment de l'import.
export default Home;