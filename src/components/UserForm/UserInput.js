import React from "react";

import UserInputForm from "./UserInputForm";
import "./UserInput.css";
import Box from "../UI/Box";
import Dialog from "../Dialog/Dialog";

const UserInput = (props) => {
    const dataLiftupHandler = (liftedUserData) => {
        props.onLastLiftup(liftedUserData);
    };

    const showAlertLUHandler = (isVaild) => {
        console.log("In Input.js");
        console.log(isVaild);
        props.onShowAlertLU([...isVaild]);
    };

    return (
        <Box className="user-input">
            <UserInputForm
                onDataLiftup={dataLiftupHandler}
                onShowAlertLUHandler={showAlertLUHandler}
            />
        </Box>
    );
};

export default UserInput;
