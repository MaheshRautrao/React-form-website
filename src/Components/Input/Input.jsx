import React from "react";

const input = ({ type, name }) => {
  return (
    <>
      <label htmlFor={name}>{name}</label>
      <input type={type} name={name} />
    </>
  );
};

export default input;
