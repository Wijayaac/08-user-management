import React from "react";

import ReactDOM from "react-dom";

import Button from "../Button";
import Card from "../Card";

import style from "./style.module.css";

const Backdrop = (props) => {
  return <div className={style.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
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
  );
};
const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onClose={props.onClose}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default Modal;
