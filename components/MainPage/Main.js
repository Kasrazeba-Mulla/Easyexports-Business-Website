import React, { useState } from "react";
import Header from "../UI/Header";
import i1 from "../../assets/b1.jpg";
import Container from "./Drag&Drop/Container";
import DraggableCard from "./Drag&Drop/DraggableCard";
import classes from "./Main.module.css";
import FeaturesBottom from "../FeaturesPages/FeaturesBottom";
import styles from "../FeaturesPages/FeaturesBottom.module.css";
import PopulateData from "../Plans/PlanData";
import { useDispatch } from "react-redux";
import { planActions } from "../../store/plan-slice";

function Main() {
  const dispatch = useDispatch();
  const [planIsShown, setPlanIsShown] = useState(false);

  const togglePlanHandler = () => {
    dispatch(planActions.showPlan());
  };
  return (
    <>
      <Header
        image={i1}
        btnName={"Features"}
        loginBtnName={"Login"}
        pathData={"/features"}
      />

      <h1 className={classes.headings}>
        Drag and drop your preferences into the bins below...
      </h1>
      <h4 className={classes.headings}>
        An exercise to understand your requirements better!
      </h4>
      <main className={classes.flexbox}>
        <Container id="board-1" className={classes.container}>
          <h1 className={classes.headings}>I prefer this!</h1>
          <DraggableCard
            id="card-1"
            draggable="true"
            className={classes.draggable}
          >
            <p>Customised Products</p>
          </DraggableCard>

          <DraggableCard
            id="card-2"
            draggable="true"
            className={classes.draggable}
          >
            <p>Performance Analysis</p>
          </DraggableCard>
        </Container>
        <Container id="board-2" className={classes.container}>
          <h1 className={classes.headings}>I don't prefer this!</h1>
          <DraggableCard
            id="card-3"
            draggable="true"
            className={classes.draggable}
          >
            <p>Faster Communications</p>
          </DraggableCard>

          <DraggableCard
            id="card-4"
            draggable="true"
            className={classes.draggable}
          >
            <p>Secure Data Transfer</p>
          </DraggableCard>
          <DraggableCard
            id="card-5"
            draggable="true"
            className={classes.draggable}
          >
            <p>Results per Search</p>
          </DraggableCard>
        </Container>
      </main>
      {/* section plans data  */}

      <button
        className={classes["plan-btn"]}
        onClick={togglePlanHandler}
        value={planIsShown}
      >
        View Plans
      </button>

      <PopulateData />

      <div className={styles["feature-icons"]}>
        <FeaturesBottom />
      </div>
    </>
  );
}

export default Main;
