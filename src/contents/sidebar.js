import React, { Component } from "react";
import classes from "./styles/sidebar.module.scss";
import Dog from "../assets/labrador.jpg";

class Sidebar extends Component {
  render() {
    return (
      <div className={classes.MainSidebar}>
        <div className={classes.Sidebar}>
          <div className={classes.Logo}>Accode Dashboard</div>
        </div>
        <div className={classes.User}>
          <p>Blacky</p>
          <img src={Dog} alt="User" />
        </div>
      </div>
    );
  }
}

export default Sidebar;
