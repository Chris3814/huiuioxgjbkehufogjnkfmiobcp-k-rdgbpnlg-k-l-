import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./App.css";

const Main = lazy(() => import("../../components/Page/Main"));
const Articles = lazy(() => import("../../components/Page/Articles"));
const Article1 = lazy(() => import("../../components/Page/Article-1"));
const Article2 = lazy(() => import("../../components/Page/Article-2"));
const Article3 = lazy(() => import("../../components/Page/Article-3"));
const Article4 = lazy(() => import("../../components/Page/Article-4"));
const Article5 = lazy(() => import("../../components/Page/Article-5"));
const Article6 = lazy(() => import("../../components/Page/Article-6"));
const Article7 = lazy(() => import("../../components/Page/Article-7"));
const ArticlePresentation = lazy(() =>
  import("../../components/Page/Article-Presentation")
);
const MentLegales = lazy(() => import("../../components/Page/MentLegales"));

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Suspense fallback={<h1>Chargement...</h1>}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/articles/1" element={<Article1 />} />
            <Route path="/articles/2" element={<Article2 />} />
            <Route path="/articles/3" element={<Article3 />} />
            <Route path="/articles/4" element={<Article4 />} />
            <Route path="/articles/5" element={<Article5 />} />
            <Route path="/articles/6" element={<Article6 />} />
            <Route path="/articles/7" element={<Article7 />} />
            <Route
              path="/articles/presentation"
              element={<ArticlePresentation />}
            />
            <Route path="/mentions-legales-cgu" element={<MentLegales />} />
          </Routes>{" "}
          <Footer />
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
