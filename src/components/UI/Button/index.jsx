import React from "react";
import style from "./style.module.css";

const Button = (props) => {
  return (
    <div className={style.wrapper}>
      <button type={props.type || "button"} onClick={props.onClick}>
        {props.children}
      </button>
    </div>
  );
};

export default Button;
