import React, { Component } from "react";
import classes from "./styles/sectionCards.module.scss";
import { NavLink } from "react-router-dom";

class Cards extends Component {
  render() {
    return (
      <div>
        <NavLink
          to="/overview"
          exact
          activeClassName={classes.Active}
          style={{ textDecoration: "none" }}
        >
          <div className={classes.SectionCards}>
            <div className={classes.Legend}>{this.props.issue}</div>
            <div className={classes.Count}>{this.props.count}</div>
          </div>
        </NavLink>
      </div>
    );
  }
}

export default Cards;
