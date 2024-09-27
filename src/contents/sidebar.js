import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import classes from "./styles/sidebar.module.scss";
import { FaChartPie, FaTicketAlt } from "react-icons/fa";

class Sidebar extends Component {
  render() {
    return (
      <div className={`${classes.MainSidebar} ${classes.Responsive}`}>
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
      </div>
    );
  }
}

export default Sidebar;
