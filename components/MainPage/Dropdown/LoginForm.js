import React, { useState } from "react";
import "./LoginForm.css";
import { loginActions } from "../../../store/login-slice";
import { useDispatch } from "react-redux";

function LoginForm(props) {
  const dispatch = useDispatch();
  const [loginIsShown, setLoginIsShown] = useState(false);

  const toggleLoginHandler = () => {
    dispatch(loginActions.toggle());
  };
  return (
    <form className="login-form">
      <div className="heading-info">Pls enter your correct credentials!</div>
      <div className="nameControlClasses">
        <label htmlFor="username">Your Username</label>
        <input type="text" id="username" />
      </div>
      <div className="passwordControlClasses">
        <label htmlFor="pwd">Your Password</label>
        <input type="text" id="pwd" />
      </div>
      <div className="actions">
        <button
          type="button"
          className="cancel-btn"
          onClick={toggleLoginHandler}
          value={loginIsShown}
        >
          Cancel
        </button>
        <button className="submit-btn">Confirm</button>
      </div>
    </form>
  );
}

export default LoginForm;
