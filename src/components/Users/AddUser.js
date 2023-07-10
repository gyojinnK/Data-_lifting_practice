import React, { useState, useRef } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
    const nameInputRef = useRef(); // current 프롭을 갖는 객체 반환
    const ageInputRef = useRef();
    // 값을 업데이트할 목적이 아닌 단순히 사용자에게 값만을 빠르게 받아오고 싶을 때 state대신 ref를 사용하면 이점이 있음.

    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;
        if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: "Invalid input",
                message:
                    "Please enter a valid name and age (non-empty values).",
            });
            return;
        }
        if (+enteredAge < 1) {
            // +기호를 사용하여 문자열을 숫자형으로 변경
            setError({
                title: "Invalid age",
                message: "Please enter a valid age (> 0).",
            });
            return;
        }
        props.onAddUser(enteredName, enteredAge);
        nameInputRef.current.value = "";
        ageInputRef.current.value = "";
    };

    const errorHandler = () => {
        setError(null);
    };

    return (
        <Wrapper>
            {error && (
                <ErrorModal
                    title={error.title}
                    message={error.message}
                    onErrorHandler={errorHandler}
                />
            )}
            <Card cssClass={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" ref={nameInputRef} />
                    {/* ref로 연결된 태그는 제어되지 않는 컴포넌트가 된다. */}
                    {/* state로 연결되었다면 제어되는 컴포넌트가 된다. */}
                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" type="number" ref={ageInputRef} />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Wrapper>
    );
};

export default AddUser;
