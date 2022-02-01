import classes from "./FeaturesButton.module.css";
import React from "react";
import { Link } from "react-router-dom";

const FeaturesButton = (props) => {
  return (
    <Link to={props.pathData}>
      <button className={classes.button}>{props.btnName}</button>
    </Link>
  );
};

export default FeaturesButton;
