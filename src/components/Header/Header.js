import React, { useState, useEffect, useRef } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./Header.scss";
import HeaderLogo from "../../assets/logo_title-nobg.webp";
import "../MenuBurger/MenuBurger.scss";

function Header() {
  const [menuStatus, setMenuStatus] = useState("close");
  const menuRef = useRef(null);

  const handleClickMenu = () => {
    setMenuStatus((status) => (status === "open" ? "close" : "open"));
  };

  useEffect(() => {
    const handleClickOutsideMenu = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !event.target.closest(".MenuBurger-container")
      ) {
        setMenuStatus("close");
      }
    };
    document.addEventListener("mousedown", handleClickOutsideMenu);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideMenu);
    };
  }, []);

  useEffect(() => {
    const handleCloseMenu = () => {
      setMenuStatus("close");
    };
    window.addEventListener("hashchange", handleCloseMenu);
    return () => {
      window.removeEventListener("hashchange", handleCloseMenu);
    };
  }, []);

  return (
    <div className="Header">
      <div className="MenuBurger">
        <div
          className="MenuBurger-container"
          role="button"
          onClick={handleClickMenu}
        >
          <i className={menuStatus}></i>
          <i className={menuStatus}></i>
          <i className={menuStatus}></i>
        </div>
      </div>

      <nav ref={menuRef} className={"NavigationList-wrapper " + menuStatus}>
        <ul className="NavigationList" style={{ paddingLeft: 0 }}>
          <li>
            <Link to="/#" className="underline" onClick={handleClickMenu}>
              Accueil
            </Link>
          </li>
          <li>
            <Link
              to="/#articles"
              className="underline"
              onClick={handleClickMenu}
            >
              Articles
            </Link>
          </li>
          <li>
            <Link
              to="/#a-propos"
              className="underline"
              onClick={handleClickMenu}
            >
              A propos
            </Link>
          </li>
          <li>
            <a
              href="mailto:cybersafe-dls@protonmail.com"
              className="underline"
              onClick={handleClickMenu}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <span className="LogoSpan">
        <img className="Logo" src={HeaderLogo} alt="Header Logo" />
      </span>
    </div>
  );
}

export default Header;
