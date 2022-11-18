
import BannerAbout from "../../components/bannerAbout/bannerAbout";
import Collapse from "../../components/Collapse/collapse";

import bannerAboutImg from "../../assets/img/bannerAboutImg.jpg";
import dataAbout from "../../assets/data/dataAbout.json";

// Composant "About" pour la page À propos.
function About()
{
  return (
    <div>
      <BannerAbout picture={bannerAboutImg} />
      <div>
        {dataAbout.map((data, index) =>
        {
          return (
            <Collapse key={index} title={data.title} content={data.content} />
          );
        })}
      </div>
    </div>
  );
}

export default About;