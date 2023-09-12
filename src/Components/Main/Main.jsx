import React from "react";
import styles from "./Main.module.css";
import Heading from "../Heading/Heading";
import Form from "../Form/Form";
import Banner from "../Banner/Banner";

const Main = () => {
  return (
    <div className="container">
      <Heading />
      <div className={styles.form_container}>
        <div>
          <Form />
        </div>
        <Banner />
      </div>
    </div>
  );
};

export default Main;
