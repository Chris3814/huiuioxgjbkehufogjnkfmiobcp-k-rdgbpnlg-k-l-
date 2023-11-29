import React from "react";
import "./Page.scss";

function ArticlePresentation() {
  return (
    <div className="Content">
      <h1>
        Présentation : <br />
        Retour sur notre intervention
      </h1>

      <h2>⚠️ Page en cours de création...</h2>
      <hr />
      <div className="CategoryContent">
        <p>
          Vous pouvez cependant vous rendre sur le site dont on vous a parlé :
        </p>
        <a href="https://www.haveibeenpwned.com">HaveIBeenPwned?</a>
      </div>
    </div>
  );
}
export default ArticlePresentation;
