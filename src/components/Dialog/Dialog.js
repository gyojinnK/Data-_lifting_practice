import React from "react";

import Box from "../UI/Box";
import "./Dialog.css";

const Dialog = (props) => {
    const isEmpty = "Please enter a vaild name or age (non-empty values).";
    const isMinus = "Please enter a vaild age (> 0).";

    return (
        <div className="dialog-wrap">
            <Box className="dialog">
                <div className="dialog-title">
                    <p>Invaild input</p>
                </div>
                <div className="dialog-text">
                    <p>none</p>
                </div>
                <button className="dialog-btn">Okay</button>
            </Box>
        </div>
    );
};

export default Dialog;
