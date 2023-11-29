import React from "react";
import "./Page.scss";

function Article5() {
  return (
    <div className="Content">
      <h1>
        Article 5 : <br />
        Les programmes malveillants
      </h1>
      <img
        className="ArticleImg"
        src={require("../../assets/theme5-img/t5-img1.webp")}
      ></img>
      <h2>Sommaire</h2>
      <ul className="Summary">
        <li>L'objectif du cybercriminel</li>
        <li>Les démarches de l'attaquant</li>
        <li>Les moyens de remédiation</li>
        <li>Le point juridique</li>
      </ul>
      <br />

      <h2>❓ Problématique du thème</h2>
      <hr />
      <div className="CategoryContent">
        <p>
          La dangerosité des programmes malveillants sur internet se renforce de
          plus en plus avec l’utilisation des outils informatiques par le grand
          public. Quel genre de programme malveillant pourriez-vous rencontrer ?
        </p>
      </div>
      <h2>🎯 L'objectif du cybercriminel</h2>
      <hr />
      <div className="CategoryContent">
        <p>
          L'objectif des cybercriminels à utiliser des programmes malveillants
          est le plus souvent pour de l’escroquerie, du vols de données à
          caractère personnel, rançons, blocage de système informatique. Pour
          une finalité, souvent de l'argent ou la revente de données à des fin
          de profits.
        </p>
      </div>
      <h2>👨‍💻 Les démarches de l'attaquant</h2>
      <hr />
      <div className="CategoryContent">
        <h3>Comment les logiciels malveillants se propagent-ils ?</h3>
        <p>
          Les logiciels malveillants peuvent s'introduire dans votre ordinateur
          de différentes façons. Voici quelques exemples courants :
        </p>
        <ul className="ArticleList">
          <li>
            ➡️ Vous téléchargez un logiciel gratuit sur Internet, dissimulant un
            logiciel malveillant.{" "}
          </li>
          <li>
            ➡️ Vous téléchargez un logiciel fiable dissimulant un logiciel
            malveillant.{" "}
          </li>
          <li>
            ➡️ Vous visitez un site Web infecté par un logiciel malveillant.{" "}
          </li>
          <li>
            ➡️ Vous cliquez sur un faux message d'erreur ou une fenêtre pop-up,
            ce qui génère le téléchargement d'un logiciel malveillant.{" "}
          </li>
          <li>
            ➡️ Vous ouvrez une pièce jointe d'un e-mail contenant un logiciel
            malveillant.{" "}
          </li>
        </ul>
        <p>
          Les logiciels malveillants peuvent se propager de différentes façons.
          Cela ne signifie pas que vous n'avez aucun moyen de les bloquer.
          Maintenant que vous savez en quoi consiste les logiciels malveillants
          et ce qu'ils sont susceptibles de faire, nous vous proposons quelques
          mesures pratiques pour vous protéger.
        </p>
        <p>
          Il existe une multitude de types de programmes malveillants
          différents. Les attaques d’appareils mobiles ont augmenté de 50% en un
          an ! Elles incluent autant de menaces que sur les ordinateurs de
          bureau : ransomwares, fraude aux clics publicitaires, vers etc...
        </p>
        <p>Voici quelques types de programmes malveillants :</p>
        <br />
        <div className="GridContainer">
          <img
            className="ContentImg"
            src={require("../../assets/theme5-img/t5-img2.webp")}
          ></img>
        </div>

        <h3>Le ransomware</h3>
        <p>
          Apparus pour la première fois en 2012, ces chevaux de Troie sont
          redoutables. Ils infectent votre ordinateur et chiffrent vos fichiers.
          Sans la clé de déchiffrement, vos fichiers sont pris en otage.
        </p>
        <p>
          {" "}
          Vous recevez ensuite une demande de rançon à verser contre l’obtention
          de la clé de déchiffrement qui vous rendra vos données. En aucun cas
          vous avez la certitude que vous aurez cette clé, alors vous ne devez
          pas payer ! D’une part, rien ne certifie que vous allez récupérer vos
          fichiers si vous payez, et d’autre part, si plus personne ne paie,
          cela décourage le cybercriminel de faire de même chez d’autres
          victimes.
        </p>

        <h3>Les virus</h3>
        <p>
          Un virus est un morceau de code, un programme qui s’insère dans une
          application et s’exécute lorsque celle-ci est ouverte. Il a la
          particularité de s’autoreproduire en infectant d’autres programmes.
          Une fois à l’intérieur d’un réseau, il peut être utilisé pour voler
          des données sensibles, lancer des attaques DDOS.{" "}
        </p>

        <h3>Les spywares ou logiciels espions</h3>
        <p>
          Les logiciels espions ou « espiogiciels » permettent de connaître et
          de collecter toute l’activité de l’utilisateur sur son ordinateur les
          informations à son insu ou sans son consentement.
        </p>
        <p>
          {" "}
          Mots de passe, informations de paiement ou messages, tout ce qui est
          tapé sur votre ordinateur est enregistré.
        </p>

        <h3>Le cheval de Troie</h3>
        <p>
          Le cheval de Troie est un logiciel en apparence légitime, mais qui
          contient une fonctionnalité malveillante. Son but est de faire entrer
          cette fonctionnalité malveillante sur l'ordinateur et de l'installer à
          l'insu de l'utilisateur.{" "}
        </p>

        <h3>Les vers</h3>
        <p>
          Les vers ciblent les vulnérabilités des systèmes d’exploitation pour
          s’installer dans les réseaux. Plus faciles à programmer qu’un virus,
          ils utilisent internet sous toutes ses formes pour se propager via des
          emails ou des sites web.
        </p>
        <p>
          {" "}
          Une fois en place, les vers peuvent être utilisés par les
          cybercriminels pour lancer des attaques DDOS, voler des données
          sensibles ou mener des attaques de ransomware.
        </p>
      </div>
      <h2>✅ Les moyens de remédiation</h2>
      <hr />
      <div className="CategoryContent">
        <h3>Comment éviter les logiciels malveillants ?</h3>
        <ul className="ArticleList">
          <li>
            ➡️ Mettre régulièrement à jour votre ordinateur et vos logiciels.{" "}
          </li>
          <li>
            ➡️ Dans la mesure du possible, utiliser un compte
            non-administrateur.{" "}
          </li>
          <li>
            ➡️ Réfléchir avant de cliquer sur des liens ou de télécharger un
            fichier.{" "}
          </li>
          <li>
            ➡️ Être prudent lors de l'ouverture de pièces jointes ou d'images
            contenues dans un e-mail.{" "}
          </li>
          <li>
            ➡️ Se méfier des fenêtres pop-up qui vous invitent à télécharger un
            logiciel.{" "}
          </li>
          <li>➡️ Limiter le partage de vos fichiers. </li>
          <li>➡️ Utilisez un logiciel antivirus. </li>
          <li>➡️ Lire les évaluations des utilisateurs. </li>
          <li>➡️ Vérifier le nombre de téléchargements. </li>
          <li>➡️ Vérifier les autorisations demandées. </li>
          <li>➡️ Ne pas cliquer sur des liens non vérifiés. </li>
          <li>
            ➡️ Être prudent lors de l’utilisation d’une connexion Wi-Fi gratuite
            (privilégier d'utilisation d'un VPN).{" "}
          </li>
          <li>➡️ Ne jamais utiliser de supports USB inconnus. </li>
        </ul>
      </div>

      <h2>📘 Le point juridique</h2>
      <hr />
      <div className="CategoryContent">
        <p>
          Le nouvel article 323-3-1 du Code pénal, introduit par la loi sur
          l’économie numérique (LEN), est conçu pour lutter contre la
          prolifération des virus sur les réseaux informatiques. Pour accentuer
          la répression, il n’est plus nécessaire que l’intrusion soit réalisée
          pour qu’il y ait poursuite au pénale !
        </p>
        <p>
          Source :{" "}
          <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000028345220">
            legifrance.gouv.fr
          </a>
        </p>
      </div>
    </div>
  );
}
export default Article5;
