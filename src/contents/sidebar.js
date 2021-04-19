import React, { Component } from "react";
import { Route, Switch, NavLink } from "react-router-dom";

import classes from "./styles/sidebar.module.scss";
import Dog from "../assets/labrador.jpg";
import { FaChartPie, FaTicketAlt } from "react-icons/fa";
// import RightView from "./rightView";
// import Overview from "./overview";
// import Tickets from "./tickets";

class Sidebar extends Component {
  render() {
    return (
      <div className={classes.MainSidebar}>
        <div className={classes.Sidebar}>
          <div className={classes.Logo}>Accode Dashboard</div>
          <div>
            <ul className={classes.Menu}>
              <li>
                <NavLink
                  to="/overview"
                  exact
                  activeClassName={classes.MenuActive}
                >
                  <FaChartPie />
                  &emsp; &emsp;<span>Overview</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/tickets"
                  exact
                  activeClassName={classes.MenuActive}
                >
                  <FaTicketAlt />
                  &emsp; &emsp;<span>Tickets</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className={classes.User}>
          <p>Blacky</p>
          <img src={Dog} alt="User" />
        </div>
        {/* <RightView /> */}
        {/* <Switch>
          <Route path="/overview" component={Overview} />
          <Route path="/tickets" component={Tickets} />
        </Switch> */}
      </div>
    );
  }
}

export default Sidebar;
