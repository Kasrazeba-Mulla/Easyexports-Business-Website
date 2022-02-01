import React, { useState } from "react";
import { Fragment } from "react";
import Dropdown from "../MainPage/Dropdown/Dropdown";
import classes from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import FeaturesButton from "./FeaturesButton";
import Modal from "./Modal";
import { loginActions } from "../../store/login-slice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Header = (props) => {
  const dispatch = useDispatch();

  const [loginIsShown, setLoginIsShown] = useState(false);
  // const showLoginHandler = () => {
  //   setLoginIsShown(true);
  // };
  const hideLoginHandler = () => {
    setLoginIsShown(false);
  };

  const toggleLoginHandler = () => {
    dispatch(loginActions.toggle());
  };

  const showLogin = useSelector((state) => state.login.loginIsShown);

  return (
    <Fragment>
      {showLogin && (
        <Modal onClose={hideLoginHandler}>
          <Dropdown onClose={hideLoginHandler} />
        </Modal>
      )}
      <nav className={classes.nav}>
        <FontAwesomeIcon
          className={classes.briefcase}
          icon={faBriefcase}
          size="2x"
        />
        <h1 className={classes.logo}>Easyexports</h1>
        <FeaturesButton pathData={props.pathData} btnName={props.btnName} />
        <button
          className={classes["login-btn"]}
          onClick={toggleLoginHandler}
          value={loginIsShown}
        >
          Login
        </button>
      </nav>
      <div className={classes["main-image"]}>
        <img src={props.image} alt="Business" />
      </div>
    </Fragment>
  );
};

export default Header;
