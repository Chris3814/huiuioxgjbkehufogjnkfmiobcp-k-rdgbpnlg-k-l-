import React from "react";
import "./Page.scss";

function Article7() {
  return (
    <div className="Content">
      <h1>
        Article 7 : <br />
        Les cookies et les DCP
      </h1>
      <img
        className="ArticleImg"
        src={require("../../assets/theme7-img/t7-img1.webp")}
      ></img>
      <h2>Sommaire</h2>
      <ul className="Summary">
        <li>L'objectif du cybercriminel</li>
        <li>Les démarches de l'attaquant</li>
        <li>Les moyens de remédiation</li>
        <li>Le point juridique</li>
      </ul>
      <br />

      <h2>
        ❓ Comment limiter les cookies et protéger ses données à caractère
        personnel ?
      </h2>
      <hr />
      <div className="CategoryContent">
        <p>
          Les cookies sont de petits fichiers texte enregistrés sur l'ordinateur
          de l'utilisateur lorsqu'il visite un site web. Ils sont généralement
          utilisés pour stocker des informations comme les préférences de
          l'utilisateur, le contenu du panier et le suivi des informations
          d'identification pour ainsi améliorer leur expérience de navigation.
        </p>
        <p>
          Une donnée à caractère personnel (DCP), c’est toute information
          relative à une personne physique qui permettent de l’identifier
          directement ou indirectement. Les informations pouvant être
          considérées comme des données à caractère personnel incluent le nom,
          l'adresse, le numéro de téléphone, l'adresse e-mail et les données
          biométriques.
        </p>
      </div>

      <h2>🎯 L'objectif du cybercriminel</h2>
      <hr />
      <div className="CategoryContent">
        <p>
          Le but de cybercriminel est de voler les cookies afin de pouvoir
          récupérer des informations sensibles sur l’utilisateur et ainsi les
          revendre, mais également pouvoir dans certains cas, se procurer un
          accès à la session de l’utilisateur.
        </p>
      </div>
      <h2>👨‍💻 Les démarches de l'attaquant</h2>
      <hr />
      <div className="CategoryContent">
        <p>
          Lorsqu’un individu se connecte à une application Web, le serveur va
          créer un cookie de session temporaire dans le navigateur qui
          contiendra les informations utilisées lors de la connexion et
          permettra au site de vous garder connecter.
        </p>
        <p>
          Si un attaquant venait à se procurer ce cookie de session temporaire,
          celui-ci pourrait alors utiliser la session de l’utilisateur et ainsi
          voler des informations personnelles, et ainsi les revendre.
        </p>
        <p>
          Un cyberattaquant peut s'y prendre de différentes manières pour voler
          des cookies :
        </p>
        <ul className="ArticleList">
          <li>
            ➡️ La méthode la plus courante est d'utiliser des logiciels
            malveillants pour infecter un ordinateur cible et voler des cookies
            qui sont stockés dans le navigateur du système. Ces logiciels
            malveillants peuvent être injectés dans le système à l'aide de
            campagnes de phishing, de liens malveillants ou même par le biais de
            logiciels légitimes infectés.
          </li>
          <li>
            ➡️ Une autre méthode consiste à utiliser des techniques d'injection
            SQL pour accéder à la base de données d'un site Web et voler les
            cookies qui y sont enregistrés.
          </li>
          <li>
            ➡️ Les cyberattaquants peuvent également utiliser des outils de
            piratage tels que le Wi-Fi sniffing pour observer les paquets qui
            transitent sur un réseau et ainsi voler les cookies d'autres
            utilisateurs connectés à un réseau Wi-Fi non sécurisé.
          </li>
        </ul>
      </div>
      <h2>✅ Les moyens de remédiation</h2>
      <hr />
      <div className="CategoryContent">
        <ul className="ArticleList">
          <li>
            ➡️ Limiter l’utilisation des cookies en refusant les cookies
            non-essentiels ou en paramétrant son navigateur afin de le faire
            automatiquement
          </li>
          <li>
            ➡️ Effacer les cookies présents sur l’ordinateur via l’historique du
            navigateur
          </li>
          <li>➡️ Ne pas cliquer sur des liens suspects</li>
          <li>➡️ Ne pas utiliser de réseau Wi-Fi public</li>
          <li>
            ➡️ Ne pas stocker d’informations sensibles comme le mot de passe, ou
            la carte bancaire avec le navigateur
          </li>
        </ul>
      </div>

      <h2>📘 Le point juridique</h2>
      <hr />
      <div className="CategoryContent">
        <p>
          En cas d’infraction frauduleuse dans un système de traitement
          automatisé de données, l’article 323-3 du code pénal prévoit une peine
          de deux ans d’emprisonnement et de 60 000€ d’amende.
        </p>
        <p>
          S’il y a eu modification ou suppression de données contenues dans le
          système, la peine est de trois ans d’emprisonnement et de 100 000€
          d’amende.
        </p>
        <p>
          En cas d’infraction commise envers un système de traitement automatisé
          de données à caractère personnel mis en œuvre par l'Etat, la peine
          sera ici de cinq ans d’emprisonnement et de 150 000€ d’amende.
        </p>
        <p>
          Source :{" "}
          <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000030939438">
            legifrance.gouv.fr
          </a>
        </p>
      </div>
    </div>
  );
}
export default Article7;
