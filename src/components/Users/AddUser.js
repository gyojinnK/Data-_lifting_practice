import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";

const AddUser = () => {
    const [enteredUsername, setEnteredUsername] = useState("");

    const addUserHandler = (event) => {
        event.preventDefault();
    };

    const usernameChangeHandler = (e) => {
        setEnteredUsername(e.target.value);
    };

    return (
        <Card cssClass={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlForme="username">Username</label>
                <input
                    id="username"
                    type="text"
                    onChange={usernameChangeHandler}
                />
                <label htmlForme="age">Age (Years)</label>
                <input id="age" type="number" />
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    );
};

export default AddUser;
