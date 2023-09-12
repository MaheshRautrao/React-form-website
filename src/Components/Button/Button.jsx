import React from "react";
import styles from "./Button.module.css";

const Button = ({ icon, text, isoutlined }) => {
  console.log(icon, text, isoutlined);
  return (
    <button className={isoutlined == true ? styles.btn_outlined : styles.btn}>
      <i>{icon}</i>
      <span>{text}</span>
    </button>
  );
};

export default Button;
