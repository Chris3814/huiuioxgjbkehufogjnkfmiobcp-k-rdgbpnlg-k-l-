// Modal.js
import React from "react";
import "./Modal.scss";

const Modal = ({ article, onClose }) => {
  const { id, titre, description } = article;
  const classeDynamique = `Art${id}`;

  return (
    <div className={`ModalOverlay ${classeDynamique}`} onClick={onClose}>
      <div className="ModalContent" onClick={(e) => e.stopPropagation()}>
        <img
          className="modalImage"
          src={`../../assets/Articles/bg-Art1.jpg`}
          alt={`Background for Art${id}`}
        />
        <h2>{titre}</h2>
        <p>{description}</p>
        <a href={`/articles/${article.id}`}>Lire la suite</a>
        <button onClick={onClose}>Fermer</button>
      </div>
    </div>
  );
};

export default Modal;