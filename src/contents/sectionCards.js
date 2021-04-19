import React from "react";
import classes from "./styles/sectionCards.module.scss";

const cards = (props) => {
  return (
    <div className={classes.SectionCards}>
      <div className={classes.Legend}>{props.issue}</div>
      <div className={classes.Count}>{props.count}</div>
    </div>
  );
};

export default cards;
