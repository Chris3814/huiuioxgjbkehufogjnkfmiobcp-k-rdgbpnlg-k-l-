import React from "react";
import "./Page.scss";

function Article1() {
  return (
    <div className="Content">
      <h1>
        Article 1 : <br />
        Se protéger des e-mails frauduleux
      </h1>
      <img
        className="ArticleImg"
        src={require("../../assets/theme1-img/t1-img1.webp")}
      ></img>
      <h2>Sommaire</h2>
      <ul className="Summary">
        <li>L'objectif du cybercriminel</li>
        <li>Les démarches de l'attaquant</li>
        <li>Les moyens de remédiation</li>
        <li>Le point juridique</li>
      </ul>
      <br />

      <h2>❓ Qu'est-ce qu'un e-mail frauduleux ?</h2>
      <hr />
      <div className="CategoryContent">
        <p>
          L’hameçonnage (phishing en anglais) est une technique frauduleuse
          destinée à leurrer un internaute pour l’inciter à communiquer des
          données personnelles et/ou bancaires en se faisant passer pour un
          tiers de confiance. Cette arnaque peut être réalisée via différents
          canaux de communication, par exemple : courriels (emails), page
          internet...
        </p>
      </div>

      <h2>🎯 L'objectif du cybercriminel</h2>
      <hr />
      <div className="CategoryContent">
        <p>
          L'objectif du cybercriminel est de récupérer des données personnelles,
          professionnelles et/ou bancaires pour les revendre ou les utiliser de
          manière frauduleuse.
          <br />
          <br />
          Les informations demandées concernent généralement :
          <ul className="ArticleList">
            <li>
              ➡️ Les données personnelles : nom, prénom, adresse postale ou de
              messagerie, numéro de téléphone,{" "}
            </li>
            <li>
              ➡️ Des identifiants de connexion : nom d'utilisateur, mot de
              passe, ...
            </li>
            <li>
              ➡️ Des informations bancaires : RIB (Relevé d'Identité Bancaire),
              numéro de carte bancaire, le cryptogramme. Autrefois facilement
              identifiables, ces arnaques par message électronique apparaissent
              de mieux en mieux réalisées et même les internautes les plus
              avertis peuvent parfois s’y méprendre.
            </li>
          </ul>
        </p>
      </div>
      <h2>👨‍💻 Les démarches de l'attaquant</h2>
      <hr />
      <div className="CategoryContent">
        <p>
          Avant de parler de ses démarches, voici comment repérer l'attaquant.
          Les cybercriminels sont davantage ingénieux, car ils se font passer
          pour des organismes connus que vous utilisez au quotidien. Voici les
          identités les plus susceptibles d’être empruntées :
        </p>
        <ul className="ArticleList">
          <li>➡️Les banques, systèmes de paiement en ligne, </li>
          <li>➡️Les opérateurs télécom, </li>
          <li>➡️Les fournisseurs d’énergie, </li>
          <li>➡️Les sites de commerce en ligne, </li>
          <li>
            ➡️Les administrations comme le Trésor public (les impôts), la
            Sécurité sociale (Ameli), la caisse d’assistance familiale (CAF),
          </li>
          <li>➡️Les services de messagerie et stockage en ligne (Cloud),</li>
          <li>➡️Les sociétés de livraison. </li>
        </ul>
        <p>
          ⚠️Attention : Cette liste n'est pas exhaustive ! Les méthodes
          employées dans le cadre de ce type d’attaque sont de plus en plus
          sophistiquées voici comment procède un cybercriminel.
        </p>
        <ul className="ArticleList">
          <li>
            ▶️ Dans un premier temps, le cybercriminel va vous envoyer un
            message par email en se faisant passer pour un tiers de confiance
            comme vu précédemment.
          </li>
          <li>
            ▶️ Une fois le courrier reçu, après l'avoir lu, vous remarquez que
            le message semble légitime et fiable, mais il s'agit d'un mail de
            phishing. En effet, dans ce courriel il vous est indiqué de cliquer
            sur un lien afin de réaliser une action comme changer le mot de
            passe d’un compte, annuler une commande, recevoir un cadeau…
          </li>
          <li>
            ▶️ Lorsque vous avez cliqué sur le lien, vous êtes redirigé sur un
            site internet qui semble être authentique, mais ce site a été créé
            par l'attaquant dans le but d'enregistrer vos identifiants.
          </li>

          <li>
            ▶️ Après s'être connecté vous serez en fait redirigé vers le site
            officiel pour vous connecter de nouveau, mais le cybercriminel aura
            déjà récupéré vos informations lors de l'étape précédente sur le
            faux site.
          </li>
        </ul>
        <img
          className="ContentImg"
          src={require("../../assets/theme1-img/t1-img2.webp")}
        ></img>
      </div>
      <h2>✅ Les moyens de remédiation</h2>
      <hr />
      <div className="CategoryContent">
        <div className="GridContainer">
          <img
            className="ContentImg"
            src={require("../../assets/theme1-img/t1-img3.webp")}
          ></img>

          <div>
            <p>
              Afin de vous sensibiliser sur les mails frauduleux, nous allons
              vous expliquer comment les reconnaître et vous en protégez. Il est
              important d’apprendre à repérer les arnaques, et ce, avant même de
              cliquer sur le contenu du message.
            </p>
            <br />
            <p>
              💡Conseil pour les liens : <br />
              <br />
              Vous pouvez vérifier la destination du lien qui est caché derrière
              le mot "Connexion" en positionnant le curseur devant celui-ci sans
              cliquer dessus, vous pourrez ensuite voir le lien s'afficher en
              bas à gauche de votre navigateur. <br />
              <br />
              ➡️ Le meilleur moyen reste de vous rendre manuellement le sur site
              officiel via l'adresse sur votre moteur de recherche au lieu de
              cliquer sur le lien du mail.
            </p>
          </div>
        </div>
      </div>

      <h2>📘 Le point juridique</h2>
      <hr />
      <div className="CategoryContent">
        <p>
          Lorsque l'auteur de l'escroquerie est identifiable, la victime de
          l'arnaque sur Internet peut saisir une juridiction civile pour obtenir
          le remboursement des sommes extorquées et des dommages et intérêts en
          cas de préjudice.
        </p>
        <p>
          En cas de phishing où toute autre forme d'escroquerie, la victime peut
          porter plainte auprès d'un commissariat. Si l'auteur de l'arnaque sur
          Internet n'est pas identifiable, la victime peut porter plainte contre
          escroc. Le tribunal pénal saisi peut non seulement sanctionner
          l'auteur de l'escroquerie, mais aussi octroyer des dommages et
          intérêts au particulier arnaqué sur Internet.
        </p>
        <p>
          Le particulier arnaqué sur Internet peut toujours opter pour la saisie
          des tribunaux français, que l'auteur de l'escroquerie se situe en
          France ou à l'étranger.
        </p>
        <p>Procédure judiciaire</p>
        <p>
          À défaut de résolution amiable après l'envoi d'une lettre de mise en
          demeure, le particulier arnaqué sur Internet peut saisir au choix le
          tribunal d'instance lorsque le montant du litige est inférieur à 10
          000 € pour obtenir réparation. Ou le tribunal pénal pour faire
          sanctionner l'auteur de l'infraction et obtenir des dommages et
          intérêts.
        </p>
        <br />
        <p>
          <p></p>Usurpation d’identité :
        </p>
        <p>
          L’article 434-23 du Code pénal, qui punit de 5 ans d’emprisonnement et
          75 000 euros d’amende le fait de prendre le nom d’un tiers. Mais
          surtout, depuis la loi LOPSI II du 14 mars 2011, le « phishing »
          rentre dans le champ de la nouvelle incrimination relative à
          l’usurpation d’identité en ligne, que l’article 226-4-1 de Code pénal
          punit d’un an d’emprisonnement et de 15 000 € d’amende.
        </p>
        <p>
          Source :{" "}
          <a href="https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070719/LEGISCTA000006165379/#LEGISCTA000006165379">
            legifrance.gouv.fr
          </a>
        </p>
        <br />
        <p>Escroquerie :</p>
        <p>
          L’article 313-1 du Code pénal, punit de 5 ans d’emprisonnement et de
          375 000 € d’amende.
        </p>
        <p>
          Source :{" "}
          <a href="https://www.legifrance.gouv.fr/codes/id/LEGISCTA000006165331/">
            legifrance.gouv.fr
          </a>
        </p>
        <br />
        <p>Collecte frauduleuse de données à caractère personnel :</p>
        <p>
          L’article 226-18 du Code pénal, qui prévoit une peine de 5 ans de
          prison et de 300 000 € d’amende.
        </p>
        <p>
          Source :{" "}
          <a href="https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070719/LEGISCTA000006165313/#LEGISCTA000006165313">
            legifrance.gouv.fr
          </a>
        </p>
        <br />
        <p>Atteinte à un système de traitement automatisé de données :</p>
        <p>
          L’article 323-3 du Code pénal, punit de deux ans d’emprisonnement et
          30 000 € d’amende.
        </p>
        <p>
          Source :{" "}
          <a href="https://www.legifrance.gouv.fr/codes/id/LEGISCTA000006149839/">
            legifrance.gouv.fr
          </a>
        </p>
      </div>
    </div>
  );
}
export default Article1;
