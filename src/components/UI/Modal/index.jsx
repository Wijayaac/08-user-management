import React from "react";

import Button from "../Button";
import Card from "../Card";

import style from "./style.module.css";

const Modal = (props) => {
  return (
    <div>
      <div className={style.backdrop} onClick={props.onClose} />
      <Card className={style.modal}>
        <header className={style.header}>
          <h2>{props.title || "Modal title"}</h2>
        </header>
        <section className={style.content}>
          <p>{props.message || "Modal message"}</p>
        </section>
        <footer className={style.actions}>
          <Button onClick={props.onClose}>Close</Button>
        </footer>
      </Card>
    </div>
  );
};

export default Modal;
