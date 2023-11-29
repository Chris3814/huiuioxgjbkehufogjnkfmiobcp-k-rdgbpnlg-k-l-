import React from "react";
import "./Page.scss";

function Main() {
  return (
    <div className="Content">
      <h1>Bienvenue sur notre site !</h1>
      <img
        className="CenteredImg"
        src="https://cybersafe-dls.fr/accueil-img/accueil-img1.webp"
      ></img>
      <h2>Qui sommes-nous?</h2>
      <p>
        Nous sommes une équipe composée de 5 étudiants en 2ème année de BTS SIO
        (Services Informatiques aux Organisations).
      </p>
      <img
        className="CenteredImg"
        src="https://cybersafe-dls.fr/accueil-img/accueil-img5.webp"
      ></img>
    </div>
  );
}
export default Main;
