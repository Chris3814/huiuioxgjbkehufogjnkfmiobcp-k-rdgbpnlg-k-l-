import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="Footer">
      <ul className="FooterGroup">
        <a href="/#">
          <li className="FooterItem">Accueil</li>
        </a>
        <a href="/#a-propos">
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
