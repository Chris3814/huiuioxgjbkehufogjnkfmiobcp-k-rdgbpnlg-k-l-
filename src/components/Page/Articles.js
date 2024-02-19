function Articles() {
  return (
    <div className="ArticlesWrapper" id="articles">
      <div className="Art Art1">
        <a href="/articles/1"></a>
        <div className="ArtContent hidden">
          <h2>Phishing</h2>
          <p>Se protéger des e-mails frauduleux</p>
        </div>
      </div>

      <div className="Art Art2">
        <a href="/articles/2"></a>
        <div className="ArtContent hidden">
          <h2>Password</h2>
          <p>Sécurisation des mots de passe</p>
        </div>
      </div>
      <div className="Art Art3">
        <a href="/articles/3"></a>
        <div className="ArtContent hidden">
          <h2>Scam</h2>
          <p>Éviter les arnaques sur Internet</p>
        </div>
      </div>
      <div className="Art Art4">
        <a href="/articles/4"></a>
        <div className="ArtContent hidden">
          <h2>Social</h2>
          <p>Se protéger sur les réseaux sociaux</p>
        </div>
      </div>
      <div className="Art ArtPresentation">
        <a href="/articles/presentation"></a>
        <div className="ArtContent hidden">
          <h2>Présentation</h2>
          <p>Retour sur notre intervention</p>
        </div>
      </div>
      <div className="Art ArtQuiz">
        <a href="/Quiz"></a>
        <div className="ArtContent hidden">
          <h2>Quiz</h2>
          <p>Se tester via un quiz</p>
        </div>
      </div>
    </div>
  );
}
export default Articles;
