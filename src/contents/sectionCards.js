import React from "react";
import classes from "./styles/sectionCards.module.scss";

const cards = (props) => {
  return (
    <div className={classes.SectionCards}>
      <div>{props.issue}</div>
      <div>{props.count}</div>
    </div>
  );
};

export default cards;
