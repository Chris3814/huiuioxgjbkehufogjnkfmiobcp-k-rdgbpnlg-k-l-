// Importation da la bibliothèque react et du hook permettant de gérer l'état locale des composants
import React, { useState, useEffect } from "react";

// Importation de la page 'Articles'
import Articles from "./Articles";

// Importation du composant ScrollToTopButton
import ScrollToTopButton from "./ScrollToTopButton"; // Assurez-vous de donner le bon chemin d'accès

// Importation de la feuille de style
import "./Page.scss";

// Création d'une fonction nommée 'Main' qui contiendra la page principale
function Main() {
  
  // Contiendra ce que va retourner la fonction 'Main'
  return (
    <div className="Content MainContent">

      {/* Ajout du composant ScrollToTopButton */}
      <ScrollToTopButton />

      <img
        className="Banner"
        src={require("../../assets/accueil-img/accueil-banner-1.webp")}
      ></img>
      <br />
      <h1>
        Vous pensez être protégé sur internet ?<br />
        Laissez-nous vous prouver le contraire !
      </h1>
      <br />
      <hr />

      {/* Ajout de la section 'Articles' */}
      <Articles />
    </div>
  );
}

// Exportation de la fonction créée précédemment
export default Main;
