import React, { useState } from "react";

import "./App.css";
import UserInput from "./components/UserForm/UserInput";
import UserList from "./components/UserList/UserList";
import Dialog from "./components/Dialog/Dialog";

function App() {
    const [userList, setUserList] = useState([]);
    const [showAlert, setShowAlert] = useState(false);

    const lastLiftupHandler = (liftedUserData) => {
        setUserList((prev) => {
            return [liftedUserData, ...prev];
        });
    };

    const showAlertLU = (isVaild) => {
        if (isVaild.includes(1)) {
            setShowAlert(true);
        }
        console.log("In App.js");
        console.log(showAlert);
    };

    let userListContent = null;
    if (userList.length > 0) {
        userListContent = <UserList userList={userList} />;
    }

    let showAlertContent = null;
    if (showAlert) {
        showAlertContent = <Dialog showAlert={showAlert} />;
    }

    return (
        <div className="App">
            <UserInput
                onLastLiftup={lastLiftupHandler}
                onShowAlertLU={showAlertLU}
            />
            {userListContent}
            {showAlertContent}
        </div>
    );
}

export default App;
