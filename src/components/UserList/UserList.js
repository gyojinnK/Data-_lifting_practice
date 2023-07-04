import React from "react";
import Box from "../UI/Box";
import UserDatas from "./UserDatas";

const UserList = (props) => {
    return (
        <Box className="user-list">
            <UserDatas userList={props.userList} />
        </Box>
    );
};

export default UserList;
