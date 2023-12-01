import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';


const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const handleScroll = () => {
    // Déterminez la position de défilement actuelle
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Définissez la visibilité en fonction de la position de défilement
    setIsVisible(scrollTop > 300); // Vous pouvez ajuster ce nombre selon vos besoins
  };

  useEffect(() => {
    // Ajoutez un écouteur d'événements de défilement lors du montage du composant
    window.addEventListener('scroll', handleScroll);

    // Nettoyez l'écouteur d'événements lors du démontage du composant
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button onClick={scrollToTop} 
    style={{
      display: isVisible ? 'block' : 'none',
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      width: '50px',
      height: '50px',
      background: '#0a6894',
      color: '#fff',
      borderRadius: '50%',
      cursor: 'pointer',
      border: 'none',
    }}
    >
      {/* Utilisation de l'icône */}
      <FontAwesomeIcon
        icon={faArrowUp}
        style={{
          fontSize: '30px',
          fontWeight: 'bold',
        }}
        />
    </button>
  );
};

export default ScrollToTopButton;
