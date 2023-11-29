import React from "react";
import "./Page.scss";

function Article3() {
  return (
    <div className="Content">
      <h1>
        Article 3 : <br />
        Les arnaques sur internet
      </h1>
      <img
        className="ArticleImg"
        src={require("../../assets/theme3-img/t3-img1.webp")}
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
          Les arnaques sur internet sont de plus en plus présentes sur internet,
          c’est pour cela qu’on peut se poser la question suivante :<br />
          Comment se protéger au mieux de ces attaques?
        </p>
      </div>

      <h2>🎯 L'objectif du cybercriminel</h2>
      <hr />
      <div className="CategoryContent">
        <p>
          Les objectifs des pirates sur internet est de récupérer au maximum des
          informations sur leurs "victimes" pour ensuite commencer à l'arnaquer
          avec les informations récupérées. L'objectif final est de récupérer
          souvent de l’argent ou de récupérer toutes sortes de données à
          caractère personnel.
        </p>
      </div>
      <h2>👨‍💻 Les démarches de l'attaquant</h2>
      <hr />
      <div className="CategoryContent">
        <img
          className="ContentImg"
          src={require("../../assets/theme3-img/t3-img2.webp")}
        ></img>
        <img
          className="ContentImg"
          src={require("../../assets/theme3-img/t3-img3.webp")}
        ></img>
        <br />
        <p>
          Les attaquants peuvent utiliser plusieurs manières afin d'arriver à
          leurs fins. En voici quelques-unes :
        </p>
        <br />
        <p>
          <strong>Le phishing ou hameçonnage :</strong>
          <br />
          Le phishing consiste à aller à la "pêche" aux informations. "C’est une
          technique frauduleuse qui trompe l’internaute pour l’inciter à
          communiquer ses données personnelles en se faisant passer pour un
          tiers de confiance". Il peut s’agir de faux e-mails de banque qui
          prétendent faire un dépôt de documents sur votre compte, de faux
          e-mails pour demander une indemnisation, ou encore de fausses offres.
        </p>
        <p>
          <strong>Le drop shipping :</strong>
          <br />
          Le drop shipping est une pratique commerciale qui se développe de plus
          en plus sur Internet, notamment chez les influenceurs et via les
          réseaux sociaux. Il s’agit d’une technique utilisée par des sites
          internet qui proposent des produits déjà en vente chez d’autres
          fournisseurs et qui gonflent artificiellement le prix afin d’empocher
          une jolie commission au passage. "Par exemple, un influenceur va nous
          promettre 50% sur une montre si on l’achète sur telle boutique en
          ligne. Et puis, on se rend compte par la suite que cette boutique
          n’est qu’un intermédiaire avec le grossiste et qu’elle a obtenu une
          commission énorme sur votre achat. Finalement, on a payé cette montre
          10x plus cher".
        </p>
        <p>
          <strong>Les faux sites arnaqueurs :</strong>
          <br />
          Certains sites sont simplement frauduleux et n'enverront jamais notre
          commande. Ils utilisent des adresses quasi-identiques aux magasins en
          ligne bien connus. Ils usurpent les noms de marques célèbres puis
          disparaissent du paysage pour réapparaître plus tard sous une autre
          dénomination.
        </p>
        <p>
          <strong>Arnaques aux dépannages :</strong>
          <br />
          L’arnaque aux faux supports techniques (Tech support scam en anglais)
          consiste à effrayer la victime, par SMS, téléphone, chat, courriel, ou
          par l’apparition d’un message qui bloque son ordinateur. Cela lui
          indique un problème technique grave et un risque de perte de ses
          données ou de l’usage de son équipement, afin de pousser la victime à
          contacter un prétendu support technique officiel (Microsoft, Apple,
          Google…), pour ensuite la convaincre de payer un pseudo-dépannage
          informatique et / ou à acheter des logiciels inutiles, voire
          nuisibles. Si la victime refuse de payer, les criminels peuvent la
          menacer de détruire ses fichiers ou de divulguer ses informations
          personnelles.
        </p>
        <p>
          <strong>Le chantage à la webcam :</strong>
          <br />
          Il peut arriver que des arnaqueurs prétendent avoir une vidéo de nous
          en train de regarder des films pornographiques. Ils vont nous
          manipuler et demander de l’argent pour ne pas divulguer ces soi-disant
          vidéos.
        </p>
      </div>
      <h2>✅ Les moyens de remédiation</h2>
      <hr />
      <div className="CategoryContent">
        <div>
          <h3>Comment bien réagir en cas d'escroquerie</h3>
          <p>
            Si vous êtes victime d'un paiement frauduleux, alertez rapidement
            votre banque pour annuler l’opération et faites opposition à votre
            carte bancaire si elle a été utilisée par l’escroc. Consignez toutes
            les preuves possibles : URL, capture d’écran, référence de la
            transaction… Déposez plainte contre l’auteur des faits ou, s’il
            n’est pas identifié, contre X. Les autorités développent une
            plateforme en ligne, baptisée "Thésée", pour faciliter la démarche.
            Elle sera opérationnelle dans le courant de l’année.
          </p>
          <h3>Comment éviter les pièges</h3>
          <p>
            Il existe bien d’autres méthodes pour vous tromper sur le net, et
            chaque jour de nouvelles techniques voit le jour. Il est impossible
            de toutes les recenser ici, par contre nous pouvons vous donner
            quelques conseils pour vous protéger :
          </p>
          <ul className="ArticleList">
            <li>
              ➡️ N’envoyez jamais vos informations confidentielles (numéros de
              carte bancaire, mots de passe, etc...) en réponse à un mail. Les
              banques, assurances, service public ne vous demanderont jamais vos
              identifiants. Souvent les arnaqueurs vont essayer de vous mettre
              la pression pour vous inciter à payer rapidement.
            </li>
            <li>
              ➡️ Prenez le temps de vérifier le sérieux de l’organisme qui vous
              sollicite pour un paiement ou autres. Un simple passage par le net
              suffit souvent à obtenir de nombreuses informations. Des erreurs
              de syntaxe et des approximations doivent vous alerter.
            </li>
            <li>
              ➡️ Prenez le temps de lire les conditions contractuelles.
              Concernant l’arnaque aux faux produits d’essai, la mention d’un
              abonnement est bien présente dans les conditions de vente, mais
              soigneusement noyée dans les informations pour que vous passiez à
              côté.
            </li>
            <li>
              ➡️ En cas d’infection de votre ordinateur, ne cédez surtout pas à
              la panique. Dans tous les cas, n’acceptez jamais la prise en main
              à distance de votre ordinateur par un support que vous n’avez pas
              sollicité.
            </li>
            <li>
              ➡️ Pour toute démarche administrative, privilégié les sites
              officiels et ne passer jamais par des intermédiaires.
            </li>
          </ul>
          <h3>Les risques encourus :</h3>
          <p>
            Suite aux arnaques/escroquerie, il y a plusieurs risques qu’il faut
            prendre en compte comme :
          </p>
          <ul className="ArticleList">
            <li>➡️ Vol de données bancaires,</li>
            <li>➡️ Vol d'identité,</li>
            <li>➡️ Vol d’argent,</li>
            <li>➡️ Vol de données personnelles,</li>
            <li>➡️ Vol de données médicales.</li>
          </ul>
        </div>
      </div>

      <h2>📘 Le point juridique</h2>
      <hr />
      <div className="CategoryContent">
        <p>
          L’incrimination principale qui peut-être retenue est l’escroquerie.
          L’article 313-1 du code pénal. L’escroquerie est passible de cinq ans
          d’emprisonnement et de 375 000 euros d’amende.
          <br />
          Source :{" "}
          <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006418192/">
            legifrance.gouv.fr
          </a>
        </p>
        <p>
          Si la victime est menacée de suppression de ses fichiers ou en est
          victime, de tels procédés relèvent de l’extorsion de fonds.
          L’extorsion est passible de sept ans d’emprisonnement et de 100 000
          euros d’amende.
        </p>
        <p>
          Les articles 323-1 à 323-7 du code pénal disposent que : « la
          suppression ou la modification de données contenues dans le système »,
          ou l’« altération du fonctionnement de ce système » sont passibles de
          deux ans à sept ans d’emprisonnement et de 60 000 à 300 000 euros
          d’amende.
          <br />
          Source :{" "}
          <a href="https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070719/LEGISCTA000006149839/#LEGISCTA000006149839">
            legifrance.gouv.fr
          </a>
        </p>
        <p>
          Le harcèlement via internet (mails, réseaux sociaux...) est appelé
          cyber harcèlement. Il s'agit d'un délit : infraction jugée par le
          tribunal correctionnel est punie principalement d'une amende et/ou
          d'une peine d'emprisonnement inférieure à 10 ans.
          <br />
          Source :{" "}
          <a href="https://www.service-public.fr/particuliers/vosdroits/F32239">
            service-public.fr
          </a>
        </p>
      </div>
    </div>
  );
}
export default Article3;
