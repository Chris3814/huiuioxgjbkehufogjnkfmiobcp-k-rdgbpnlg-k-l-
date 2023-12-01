// Importation da la bibliothèque react et du hook permettant de gérer l'état locale des composants
import React, { useState } from "react";

// Importation de la page 'Articles'
import Promo from "./Promo";

// Importation de la feuille de style
import "./Page.scss";

// Création d'une fonction nommée 'APropos' qui contiendra la page à propos du projet de CyberSafe
function APropos() {
  const [choixPromoValue, setChoixPromoValue] = useState();

  // Contiendra ce que va retourner la fonction 'Main'
  return (
    <div className="Content">
      <h2 id="a-propos">📌 À propos du projet</h2>
      <hr />
      <div className="CategoryContent">
        <p>
          Dans le cadre de notre 2ème année de BTS nous devons mettre en œuvre
          un projet annuel. Nous avons choisi de traiter un sujet en lien avec
          notre filière, c'est donc pour ça que nous sommes partis sur le thème
          de la cybersécurité.
        </p>
        <p>
          Le numérique étant de plus en plus présent dans notre quotidien et les
          cyberattaques ne cessant d'augmenter ces dernières années, les
          utilisateurs sont de plus en plus vulnérables. Le manque d’information
          se faisant ressentir, c’est pour cela que nous avons décidé de
          réaliser un site web qui a pour but de sensibiliser à la sécurité
          numérique.
        </p>
        <p>
          Notre projet se nomme <strong>CyberSafe-DLS</strong> et nous traitons
          divers sujets de cybersécurité, nous vulgarisons un maximum afin
          d’être compréhensible pour le plus grand nombre d’entre vous. Ainsi
          nous souhaitons promouvoir les bonnes pratiques en matière de sécurité
          numérique. Cette plateforme contiendra des ressources de
          sensibilisation adaptées à des utilisateurs non-initiés et nous leur
          mettons à disposition une boîte à outils numérique afin de se prémunir
          contre les attaques informatiques.
        </p>
      </div>
      <h2>❓ Qui sommes-nous ?</h2>
      <hr />
      <div className="CategoryContent">
        <div className="ChoixPromoCenter">
          <p>Choix de la promo à afficher :</p>
          <select
            id="choixPromo"
            value={choixPromoValue}
            onChange={(e) => setChoixPromoValue(e.target.value)}
          >
            <option value="2">2022-2023</option>
            <option value="1">2021-2022</option>
          </select>
        </div>
        <Promo promoValue={choixPromoValue} />
      </div>
    </div>
  );
}
export default APropos;
