import React from "react";
import navbar_styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav>
      <div className={`${navbar_styles.navcontainer} container `}>
        <div className={navbar_styles.logo}>
          <img src="/images/contact-logo.avif" alt="logo" />
        </div>
        <div className={navbar_styles.menu}>
          <ul>
            <li href="#">HOME</li>
            <li href="#">ABOUT</li>
            <li href="#">CONTACT</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
