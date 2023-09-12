import React, { useState } from "react";
import styles from "./Form.module.css";
import Button from "../Button/Button";
import Input from "../Input/Input";

import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = (e) => {
    e.preventDefault();
    setName(e.target[0].value);
    setEmail(e.target[1].value);
    setMessage(e.target[2].value);
  };

  return (
    <div className={styles.form_style}>
      <div>
        <Button icon={<MdMessage />} text="HI " />
        <Button icon={<FaPhoneAlt />} text="HI " />
      </div>
      <div>
        <Button icon={<MdMessage />} text="Via email form" isoutlined={true} />
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className={styles.form_control}>
            <div className={styles.form_control_individual}>
              <Input name="Name" type="text" />
            </div>
            <div className={styles.form_control_individual}>
              <Input name="Email" type="email" />
            </div>

            <div className={styles.form_control_individual}>
              <label htmlFor="text">Text</label>
              <textarea name="text" rows="8" />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button text="Submit" />
          </div>
        </form>
      </div>

      <div className={styles.write_values}>
        <div>{name}</div>
        <div>{email}</div>
        <div>{message}</div>
      </div>
    </div>
  );
};

export default Form;
