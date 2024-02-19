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
      <hr className="Hr" />

      {/* Mise en page en grille (grid) pour le h1 et la section Articles */}
      <div className="HeaderGrid">
        {/* Ajout de la section 'Articles' */}
        <Articles />
        <div className="Title_main">
        <h1 className="h1_text">
          <span>Vous pensez être <br />protégé sur <br /></span><span className="H1_color">internet </span><span>?</span><br />
          <span className="h1_text_span">Laissez-nous vous prouver le contraire !</span>
        </h1>
      </div>
      </div>
      <hr></hr>
      <div>
        <h1><span>Pourquoi</span><span className="H1_color">Cybersafe </span><span>?</span></h1>
        <div style={{ width: '100%', height: '50px', backgroundColor: 'white' }}></div>
      </div>
    </div>
  );
}

// Exportation de la fonction créée précédemment
export default Main;
