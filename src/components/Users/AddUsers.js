import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
const AddUsers = (props) => {
  const [user, setUser] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();
  const addUserHandler = (event) => {
    event.preventDefault();
    if (user.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values)",
      });
      return;
    }
    if (+age < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (age > 0)",
      });
      return;
    }
    // console.log(user, age);
    props.onAddUser(user, age);
    setUser("");
    setAge("");
  };
  const usernameChangeHandler = (event) => {
    setUser(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };
  const errorHandler = () => {
    setError(null);
  };
  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={user}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (years)</label>
          <input
            id="age"
            type="number"
            value={age}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUsers;
