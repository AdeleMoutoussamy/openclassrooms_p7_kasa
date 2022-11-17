// J'importe le style.
import "./banner.scss";

function Banner({ title, picture })
{
  return (
    <div className="banner">
        <img className="banner__img" src={picture} alt="Paysage, montagnes" />
        <div className="banner__background">
            <div className="banner__title">{title}</div>
        </div>
    </div>
  );
}

export default Banner;