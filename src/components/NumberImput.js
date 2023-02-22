import "./NumberImput.css";
import React, { Component } from "react";

let NumberImput = (props) => {
  let { name, label, value } = props;
  return (
    <label htmlFor={name}>
      {label}
      <input
        onChange={event => {
          props.onChange(event.target.value)
        }}
        id={name}
        value={value}
        type="number"
        name={name}
        required
      />
    </label>
  );
};

export default NumberImput;
