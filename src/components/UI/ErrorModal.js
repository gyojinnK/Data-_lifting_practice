import React from "react";
import ReactDOM from "react-dom";

import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";

// rendering하는 요소를 다른 위치로 이동시키는 작업 : Potal
// 이는 규모가 커지는 프로젝트에서 깊은 의존성을 해결하기 위해서 사용
// ex) 모달창, 상위 요소에서 떨어져보이는 요소
const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onErrorHandler} />;
};

const ModalOverlay = (props) => {
    return (
        <Card cssClass={classes.modal}>
            <header className={classes.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={classes.content}>
                <p>{props.message}</p>
            </div>
            <footer className={classes.actions}>
                <Button onClick={props.onErrorHandler}>Okay</Button>
            </footer>
        </Card>
    );
};

const ErrorModal = (props) => {
    return (
        <>
            {/* ReactDOM.createPotal()의 인자 두가지
                1. 랜더링할 요소(컴포넌트)
                2. 랜더링할 위치
                    -> 위치는 public 폴더 속 index.html에서 div에 id명으로 생성
            */}
            {ReactDOM.createPortal(
                <Backdrop onErrorHandler={props.onErrorHandler} />,
                document.getElementById("backdrop-root")
            )}
            {ReactDOM.createPortal(
                <ModalOverlay
                    title={props.title}
                    message={props.message}
                    onErrorHandler={props.onErrorHandler}
                />,
                document.getElementById("overlay-root")
            )}
        </>
    );
};

export default ErrorModal;
