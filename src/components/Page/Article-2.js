import React from "react";
import "./Page.scss";

function Article2() {
  return (
    <div className="Content">
      <h1>
        Article 2 : <br />
        Securisation des mots de passe
      </h1>
      <img
        className="ArticleImg"
        src={require("../../assets/theme2-img/t2-img1.webp")}
      ></img>
      <h2>Sommaire</h2>
      <ul className="Summary">
        <li>L'objectif du cybercriminel</li>
        <li>Les démarches de l'attaquant</li>
        <li>Les moyens de remédiation</li>
        <li>Le point juridique</li>
      </ul>
      <br />

      <h2>❓ Qu'est-ce qu'un mot de passe ?</h2>
      <hr />
      <div className="CategoryContent">
        <p>
          Un mot de passe est un mot ou une série de caractères utilisés comme
          moyens d'authentification pour prouver son identité lorsque l'on
          désire accéder à un espace protégé, comme un ordinateur, ou un compte
          par exemple.
        </p>
      </div>

      <h2>🎯 L'objectif du cybercriminel</h2>
      <hr />
      <div className="CategoryContent">
        <p>
          Le but du cybercriminel est de récupérer vos mots de passe pour
          pouvoir accéder à vos comptes. L’accès à vos comptes est dangereux
          puisque le hackeur peut récupérer vos données personnelles et se faire
          passer pour vous. Il pourra aussi réinitialiser votre mot de passe
          actuel et ensuite revendre votre compte sur des sites illégaux. De
          même pour vos données personnelles, elles peuvent être revendues à des
          fins illégales.
          <br />
          <br />
          Voici ce qu’il peut récupérer :
          <ul className="ArticleList">
            <li>➡️ Nom, Prénom, </li>
            <li>➡️ Adresse Mail,</li>
            <li>➡️ Mot de passe,</li>
            <li>➡️ Numéro de téléphone,</li>
            <li>➡️ Comptes bancaires,</li>
            <li>➡️ Comptes sur les réseaux sociaux.</li>
          </ul>
        </p>
      </div>
      <h2>👨‍💻 Les démarches de l'attaquant</h2>
      <hr />
      <div className="CategoryContent">
        <p>
          Un attaquant a plusieurs manières de récupérer vos mots de passe :
        </p>
        <ul className="ArticleList">
          <li>➡️ Espionnage,</li>
          <li>➡️ Phishing,</li>
          <li>➡️ Écoute téléphonique,</li>
          <li>➡️ Un logiciel qui enregistre votre écran ou votre voix.</li>
        </ul>
        <p>
          Afin de récupérer vos mots de passe, l'attaquant peut passer par un
          mail frauduleux, en vous appelant en se faisant passer pour une autre
          personne.
          <br />
          De plus, il peut vous contacter via les réseaux sociaux et encore plus
          facilement si votre compte est en public.
          <br />
          Sans oublier qu’il peut très bien récupérer la feuille ou le post-it
          qui contient vos mots de passe.
        </p>
        <p>
          Cependant la plus connue reste celle du brut force.
          <br />
          <br />
          Cette attaque consiste à :
        </p>
        <ul className="ArticleList">
          <li>
            ➡️ Essayer une liste de mot de passe qui sont rangés ou non, jusqu’à
            trouver votre mot de passe,
          </li>
          <li>
            ➡️ Plus le mot de passe est compliqué et peu commun, plus
            l’attaquant prendra du temps à le trouver avec cette attaque.
          </li>
        </ul>
      </div>
      <h2>✅ Les moyens de remédiation</h2>
      <hr />
      <div className="CategoryContent">
        <div className="GridContainer">
          <div>
            <h3>Composition d'un mot de passe :</h3>
            <p>
              Votre mot de passe est l’élément-clé de n’importe quel compte que
              vous avez, donc il doit être difficile à deviner pour cela qu’il
              ne faut surtout pas utiliser :
            </p>
            <ul className="ArticleList">
              <li>➡️ Votre adresse,</li>
              <li>➡️ Votre date de naissance,</li>
              <li>➡️ Le nom de votre animal domestique,</li>
              <li>
                ➡️ Ou des mots en lien avec le service ou application que vous
                utilisez.
              </li>
            </ul>
            <p>
              Un mot de passe robuste est un mot de passe possédant minimum 12
              caractères, car plus votre mot de passe est long plus il est
              difficile de le trouver. Mais il faudra également s'en souvenir.
            </p>
            <p>
              Mais qu'en est-il des inclusions de lettre majuscule au début du
              mot de passe ou du remplacement les "a" par "@" ?
            </p>
            <p>Plus votre mot de passe est long plus il est robuste.</p>
            <p>
              Pour cela que nous allons vous proposer différentes solutions pour
              vos mots de passe :
            </p>
            <ul className="ArticleList">
              <li>
                ➡️ Dans un premier temps vous pouvez utiliser une phrase que
                vous pouvez retenir facilement : UnLapinDansLaForet
              </li>
              <li>
                ➡️ Composer un votre mot de passe en utilisant la première
                lettre de chaque mot d’une phrase. Vous n’aurez qu’à vous
                rappeler cette phrase pour vous rappeler le mot de passe. Par
                exemple avec la phrase : « Un mot de passe possède 12 caractères
                minimum », vous pouvez obtenir le mot de passe : UmdPp12Cm
              </li>
            </ul>
            <img
              className="ContentImg"
              src={require("../../assets/theme2-img/t2-img2.webp")}
            ></img>
            <p>Ne pas oublier de changer régulièrement vos mots de passe !</p>
            <p>
              Pour la dernière solution, vous pouvez utiliser un gestionnaire de
              mot de passe. Normalement, il est conseillé d'utiliser un mot de
              passe unique pour chaque application ou système, mais c’est
              compliqué de retenir tous nos mots de passe, alors on utilise
              parfois le même pour plusieurs applications / systèmes ce qui est
              fortement déconseillé.
            </p>
            <h3>Gestionnaire de mots de passe :</h3>
            <p>
              Ne commettez pas pour autant l’erreur de les noter sur un
              pense-bête que vous laisserez à proximité de votre équipement. À
              la place commencer à utiliser des gestionnaires de mots passe tel
              que :<br />
              <a href="https://keepass.info/">KeePass</a>,{" "}
              <a href="https://bitwarden.com/">Bitwarden</a>,{" "}
              <a href="https://www.dashlane.com/">Dashlane</a> ou bien{" "}
              <a href="https://1password.com/">1Password</a>.
            </p>
            <p>
              Comment ça marche ? Les gestionnaires de mots de passe stockent
              tous vos mots de passe derrière un unique mot de passe « maître ».
              Il s'agit de logiciels à installer sur votre ordinateur.
            </p>
            <p>
              Bien plus qu’un outil de confort, le gestionnaire de mot de passe
              propose de nombreuses fonctionnalités :
            </p>
            <ul className="ArticleList">
              <li>
                ➡️ Générer un mot de passe unique et complexe pour chaque site
                internet,
              </li>
              <li>
                ➡️ Gérer ses mots de passe de manière collaborative dans un
                trousseau sécurisé, une sorte de coffre-fort numérique,
              </li>
              <li>➡️ Remplir automatiquement les formulaires,</li>
              <li>
                ➡️ Stocker les mots de passe en local dans un format chiffré,
              </li>
              <li>➡️ Synchroniser sa base de mots de passe,</li>
              <li>
                ➡️ Stocker des données personnelles comme un identifiant, nom
                d’utilisateur, nom, prénom, numéro de téléphone.
              </li>
            </ul>
            <h3>À retenir :</h3>
            <p>
              Un bon mot de passe est un mot de passe long. Plus un mot de passe
              est long, plus il est robuste. N’écrivez votre mot de passe nulle
              part, au besoin,
              <br />
              Utilisez un gestionnaire de mot de passe. Utilisez un mot de passe
              distinct pour le travail et vos sites personnels préférés.
              <br />
              Ne divulguez pas et ne partagez jamais un mot de passe.
            </p>
          </div>
        </div>
      </div>

      <h2>📘 Le point juridique</h2>
      <hr />
      <div className="CategoryContent">
        <p>
          Le RGPD a été adopté le 17 avril 2016 et les deux délibérations de la
          CNIL « mot de passe » datent respectivement du 19 janvier 2017
          (délibération n°2017-012) et du 22 juin 2017 (délibération
          n°2017-190).
        </p>

        <p>
          La directive sur les services de paiement (DSP2) a pour objectif
          d'instaurer notamment des normes de sécurité plus strictes pour les
          paiements en ligne afin de renforcer la confiance des consommateurs
          dans les achats en ligne.
          <br />
          Source :{" "}
          <a href="https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000031878407/">
            legifrance.gouv.fr
          </a>
        </p>
        <p>
          Les mots de passe sont liés aux vols de données à caractère personnel.
          Cela est susceptible de 2 ans d’emprisonnement et 60 000€ d’amende.
          <br />
          Source :{" "}
          <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000030939438">
            legifrance.gouv.fr
          </a>
        </p>
      </div>
    </div>
  );
}
export default Article2;
