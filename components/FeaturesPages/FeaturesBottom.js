import React from "react";
import classes from "./FeaturesBottom.module.css";

function FeaturesBottom() {
  return (
    <div>
      <div className={classes.b}>
        <h2>1000+ Users and Companies and Counting...</h2>
      </div>
      <section className={classes["features-bottom-box"]}>
        <div className={classes["features-bottom-span"]}>
          <i class="fas fa-chart-line fa-2x"></i>
          <p className={classes["features-bottom-text"]}>
            Performance Insights
          </p>
        </div>
        <div className={classes["features-bottom-span"]}>
          <i class="fas fa-network-wired fa-2x"></i>
          <p className={classes["features-bottom-text"]}>Huge Network</p>
        </div>
        <div className={classes["features-bottom-span"]}>
          <i class="fas fa-shield-alt fa-2x"></i>
          <p className={classes["features-bottom-text"]}>Security</p>
        </div>
        <div className={classes["features-bottom-span"]}>
          <i class="far fa-envelope fa-2x"></i>
          <p className={classes["features-bottom-text"]}>
            Faster Communication
          </p>
        </div>

        <div className={classes["features-bottom-span"]}>
          <i class="fas fa-dollar-sign fa-2x"></i>
          <p className={classes["features-bottom-text"]}>More Profits</p>
        </div>
      </section>
    </div>
  );
}

export default FeaturesBottom;
