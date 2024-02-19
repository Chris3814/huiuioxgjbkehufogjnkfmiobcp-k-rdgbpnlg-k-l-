import React, { useState } from "react";
import Articles from "./Articles";
import ScrollToTopButton from "./ScrollToTopButton";
import "./Page.scss";
import instagram_logo from "../../assets/instagram.png";

function Main() {
  const [scrollAmount, setScrollAmount] = useState(0);

  const handleContinueButtonClick = () => {
    window.scrollTo({
      top: scrollAmount + 6000, // Change this value according to your requirement
      behavior: "smooth",
    });
    setScrollAmount(scrollAmount + 300);
  };

  return (
    <div className="Content MainContent">
      <ScrollToTopButton />

      <div className="HeaderGrid">
        <Articles />
        <div className="Title_main">
          <h1 className="h1_text">
            <span>Vous pensez être <br />protégé sur <br /></span>
            <span className="h1_color">internet </span>
            <span>?</span><br /><br />
            <span className="h1_text_span">Laissez-nous vous prouver le contraire !</span>
          </h1>
          <button onClick={handleContinueButtonClick} className="continue-button">Continuer</button>
        </div>
      </div>
      <br /><br /><br /><br /><br /><br /><br />
      <div style={{ width: '100%', height: '100px', backgroundColor: 'white', color: "blue" }}>
      <div className="InstagramBanner">
        <img className="instagram" src={instagram_logo} alt="Logo" />
        <div className="Instagram_text">
          CYBERSAFE-DLS
        </div>
      </div>
      </div>
      <div>
        <h2 className="h2_text"><span>Pourquoi </span><span className="h2_color">Cybersafe </span><span>?</span></h2>
      </div>
    </div>
  );
}

export default Main;
