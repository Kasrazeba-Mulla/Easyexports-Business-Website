import { Fragment } from "react";
import classes from "./Modal.module.css";
import { loginActions } from "../../store/login-slice";
import { useDispatch } from "react-redux";

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  const dispatch = useDispatch();

  const toggleLoginHandler = () => {
    dispatch(loginActions.toggle());
  };
  const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={toggleLoginHandler} />;
  };

  return (
    <Fragment>
      <Backdrop onClick={toggleLoginHandler} />
      <ModalOverlay>{props.children}</ModalOverlay>
    </Fragment>
  );
};

export default Modal;
