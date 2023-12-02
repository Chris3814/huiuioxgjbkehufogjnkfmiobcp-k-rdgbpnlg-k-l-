// Articles.js
import React, { useState } from "react";
import Modal from "./Modal"; // Assurez-vous d'importer le composant Modal
import "./Page.scss";

function Articles() {
  const [articleEtendu, setArticleEtendu] = useState(null);

  const gererClicArticle = (idArticle) => {
    setArticleEtendu((prevState) => (prevState === idArticle ? null : idArticle));
  };

  const articlesData = [
    { id: 1, titre: "Phishing", description: "Se protéger des e-mails frauduleux", imageSrc: "url_de_l_image" },
    { id: 2, titre: "Password", description: "Sécurisation des mots de passe", imageSrc: "url_de_l_image" },
    // Ajoutez les données pour les autres articles
    // ...
  ];

  const articleSelectionne = articlesData.find((article) => article.id === articleEtendu);

  return (
    <div className="ArticlesWrapper" id="articles">
      {articlesData.map((article) => (
        <div
          key={article.id}
          className={`Art Art${article.id} ${articleEtendu === article.id ? "etendu" : ""}`}
          onClick={() => gererClicArticle(article.id)}
        >
          <div className="ArtContent">
            <div className="ImageWrapper"></div>
          </div>
        </div>
      ))}

      {articleSelectionne && (
        <Modal article={articleSelectionne} onClose={() => setArticleEtendu(null)} />
      )}
    </div>
  );
}

export default Articles;