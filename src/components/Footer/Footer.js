// Importation de la bibliothèque react
import React from "react";

// Importation de la feuille de style
import "./Footer.scss";

// Création d'une fonction nommée 'Footer' qui contiendra le footer
function Footer() {
  // Contiendra ce que va retourner la fonction 'Footer'
  return (
    <div className="Footer">
      <ul className="FooterGroup">
        <a href="/#">
          <li className="FooterItem">Accueil</li>
        </a>
        <a href="./A-propos.js">
          <li className="FooterItem">A Propos</li>
        </a>
        <a href="/mentions-legales-cgu">
          <li className="FooterItem">Mentions Légales</li>
        </a>
        <a href="mailto:cybersafe-dls@protonmail.com">
          <li className="FooterItem">Contact</li>
        </a>
      </ul>
      <span>Copyright © cybersafe-dls.fr - Tous droits réservés</span>
    </div>
  );
}
export default Footer;
