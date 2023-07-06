import React from "react";

import Card from "../UI/Card";
import classes from "./AddUser.module.css";

const AddUser = () => {
    const addUserHandler = (event) => {
        event.preventDefault();
    };

    return (
        <Card cssClass={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlForme="username">Username</label>
                <input id="username" type="text" />
                <label htmlForme="age">Age (Years)</label>
                <input id="age" type="number" />
                <button type="submit">Add User</button>
            </form>
        </Card>
    );
};

export default AddUser;
