import React, { useState, useRef } from "react";

import Button from "../UI/Button";
import Card from "../UI/Card";
import Modal from "../UI/Modal";

import style from "./AddUser.module.css";

const AddUser = (props) => {
  const usernameInput = useRef();
  const ageInput = useRef();

  const [error, setError] = useState();

  const submitHandler = (e) => {
    e.preventDefault();

    const usernameValue = usernameInput.current.value;
    const ageValue = ageInput.current.value;

    if (+ageValue < 1 || usernameValue.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "please input valid name or age",
      });
      return;
    }
    props.onAddUser(usernameValue, ageValue);
  };
  const closeHandler = () => {
    setError(null);
  };
  return (
    <>
      {error && (
        <Modal
          title={error.title}
          message={error.message}
          onClose={closeHandler}
        />
      )}
      <Card>
        <form onSubmit={submitHandler}>
          <div className={style["form-control"]}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" ref={usernameInput} />
          </div>
          <div className={style["form-control"]}>
            <label htmlFor="age">Age (Years)</label>
            <input id="age" type="number" ref={ageInput} />
          </div>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
