import React, { useState } from "react";

import Button from "../UI/Button";
import Card from "../UI/Card";
import Modal from "../UI/Modal";

import style from "./AddUser.module.css";

const AddUser = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState(0);
  const [error, setError] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    if (+age < 1 || username.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "please input valid name or age",
      });
      return;
    }
    props.onAddUser(username, age);
    setAge(0);
    setUsername("");
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
            <input
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
            />
          </div>
          <div className={style["form-control"]}>
            <label htmlFor="age">Age (Years)</label>
            <input
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              type="number"
            />
          </div>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
