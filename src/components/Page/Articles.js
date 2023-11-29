import React from "react";
import "./Page.scss";

function Articles() {
  return (
    <div className="ArticlesWrapper" id="articles">
      <div className="Art Art1">
        <a href="/articles/1"></a>
        <div className="ArtContent">
          <h2>Phishing</h2>
          <p>Se protéger des e-mails frauduleux</p>
        </div>
      </div>

      <div className="Art Art2">
        <a href="/articles/2"></a>
        <div className="ArtContent">
          <h2>Password</h2>
          <p>Sécurisation des mots de passe</p>
        </div>
      </div>
      <div className="Art Art3">
        <a href="/articles/3"></a>
        <div className="ArtContent">
          <h2>Scam</h2>
          <p>Éviter les arnaques sur Internet</p>
        </div>
      </div>
      <div className="Art Art4">
        <a href="/articles/4"></a>
        <div className="ArtContent">
          <h2>Social</h2>
          <p>Se protéger sur les réseaux sociaux</p>
        </div>
      </div>
      <div className="Art Art5">
        <a href="/articles/5"></a>
        <div className="ArtContent">
          <h2>Malware</h2>
          <p>Reconnaître un programme malveillant</p>
        </div>
      </div>
      <div className="Art Art6">
        <a href="/articles/6"></a>
        <div className="ArtContent">
          <h2>Social engineering</h2>
          <p>L’ingénierie sociale</p>
        </div>
      </div>
      <div className="Art Art7">
        <a href="/articles/7"></a>
        <div className="ArtContent">
          <h2>DCP</h2>
          <p>Cookies et données à caractère personnel</p>
        </div>
      </div>
      <div className="Art ArtPresentation">
        <a href="/articles/presentation"></a>
        <div className="ArtContent">
          <h2>Présentation</h2>
          <p>Retour sur notre intervention</p>
        </div>
      </div>
    </div>
  );
}
export default Articles;
