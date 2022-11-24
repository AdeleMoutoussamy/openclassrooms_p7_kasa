import "./about.scss";

import BannerAbout from "../../components/bannerAbout/bannerAbout";
import Collapse from "../../components/collapse/collapse";

import bannerAboutImg from "../../assets/img/bannerAboutImg.jpg";
import dataAbout from "../../assets/data/dataAbout.json";

// Composant "About" pour la page À propos.
function About()
{
  return (
    <div className="about">

      <BannerAbout picture={bannerAboutImg} />
      <div className="about__dropdown">
        {dataAbout.map((dataA, index) =>
        {
          return (
            <Collapse key={index} title={dataA.title} content={dataA.content} />
          );
        })}
     </div>

    </div>
  );
}

export default About;