import React from "react";

import "./UserInfo.css";

const UserInfo = (props) => {
    return (
        <div className="user-info">
            <p>{`${props.name} (${props.age} years old)`}</p>
        </div>
    );
};

export default UserInfo;
