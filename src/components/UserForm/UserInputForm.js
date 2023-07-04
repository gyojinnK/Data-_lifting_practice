import React, { useState } from "react";

import "./UserInputForm.css";

const UserInputForm = (props) => {
    const [username, setUsername] = useState("");
    const [userage, setUserage] = useState("");
    const [isVaild, setIsVaild] = useState([0, 0]);

    const enteredNameHandler = (e) => {
        setUsername(e.target.value);
    };

    const enteredAgeHandler = (e) => {
        setUserage(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();

        if (username === "" || userage === "") {
            setIsVaild([1, 0]);
            console.log("In Form \n" + isVaild);
            props.onShowAlertLUHandler(isVaild);
        } else if (parseInt(userage) < 0) {
            setIsVaild([0, 1]);
            console.log("In Form \n" + isVaild);
        } else {
            const userData = {
                id: Math.random().toString(),
                name: username,
                age: userage,
            };
            props.onDataLiftup(userData);
        }
    };

    return (
        <form onSubmit={submitHandler} className="user-input-form">
            <label>
                <b>Username</b>
            </label>
            <input type="text" onChange={enteredNameHandler} />
            <label>
                <b>Age(Years)</b>
            </label>
            <input type="text" min="2" max="4" onChange={enteredAgeHandler} />
            <button className="user-input-form__button" type="submit">
                Add User
            </button>
        </form>
    );
};

export default UserInputForm;
