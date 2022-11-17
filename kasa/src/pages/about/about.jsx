
import BannerAbout from "../../components/bannerAbout/bannerAbout";
import Collapse from "../../components/Collapse/collapse";

import imgBanner from "";
import dataAbout from "../../assets/data/dataAbout.json";

// Composant "About" pour la page À propos.
function About()
{
  return (
    <div>
      <BannerAbout picture={imgBanner} />
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