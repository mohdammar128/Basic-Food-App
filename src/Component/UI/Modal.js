import ReactDOM from "react-dom";
import { Fragment } from "react";
import classes from "./Modal.module.css";
const BackDrop = (props) => {
  return <div className={classes["backdrop"]} />;
};

const OverLay = (props) => {
  return (
    <div className={classes["modal"]}>
      <div className={classes["modal_content"]}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <BackDrop></BackDrop>,
        document.getElementById("backdrop")
      )}

      {ReactDOM.createPortal(
        <OverLay>{props.children}</OverLay>,
        document.getElementById("cart-modal")
      )}
    </Fragment>
  );
};

export default Modal;
