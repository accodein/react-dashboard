import React, { Component } from "react";
import classes from "./styles/sidebar.module.scss";

class Sidebar extends Component {
  render() {
    return (
      <div className={classes.MainSidebar}>
        <div className={classes.Sidebar}>
          <div className={classes.Logo}>Accode Dashboard</div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
