import React from "react";
import "./Page.scss";

function Promo({ promoValue }) {
  switch (promoValue) {
    case "1":
      return (
        <>
          <p>
            Nous sommes une équipe composée de 5 étudiants en 2ème année de BTS
            SIO (<em>Services Informatiques aux Organisations</em>).
          </p>
          <img
            className="CenteredImg"
            src={require("../../assets/accueil-img/accueil-img5.webp")}
          ></img>
        </>
      );
      break;

    default:
      return (
        <>
          <p>
            Nous sommes une équipe composée de 6 étudiants en 2ème année de BTS
            SIO (<em>Services Informatiques aux Organisations</em>).
          </p>
          <div className="PromoWrapper">
            <div className="PromoItem">
              <div className="PromoItemContent">
                <h2>
                  Mathis <br />
                  Hervé
                </h2>
                <p>Chef de Projet</p>
              </div>
            </div>
            <div className="PromoItem">
              <div className="PromoItemContent">
                <h2>
                  Dorian <br />
                  Biojout
                </h2>
                <p>Secrétaire / Rédacteur</p>
              </div>
            </div>
            <div className="PromoItem">
              <div className="PromoItemContent">
                <h2>
                  Pierre-Louis <br />
                  Le Pouliquen
                </h2>
                <p>Rédacteur en chef</p>
              </div>
            </div>
            <div className="PromoItem">
              <div className="PromoItemContent">
                <h2>
                  Nathan <br />
                  Boël
                </h2>
                <p>Rédacteur</p>
              </div>
            </div>
            <div className="PromoItem">
              <div className="PromoItemContent">
                <h2>
                  Jimmy <br />
                  Le Goff
                </h2>
                <p>Développeur</p>
              </div>
            </div>
            <div className="PromoItem">
              <div className="PromoItemContent">
                <h2>
                  Nicolas <br />
                  Le Tertre
                </h2>
                <p>Intégrateur / Développeur</p>
              </div>
            </div>
          </div>
        </>
      );
      break;
  }
}
export default Promo;
