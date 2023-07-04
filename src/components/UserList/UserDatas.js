import React from "react";

import "./UserDatas.css";
import UserInfo from "./UserInfo";

const UserDatas = (props) => {
    return (
        <div className="user-data">
            {props.userList.map((data) => {
                return (
                    <UserInfo key={data.id} name={data.name} age={data.age} />
                );
            })}
        </div>
    );
};

export default UserDatas;
