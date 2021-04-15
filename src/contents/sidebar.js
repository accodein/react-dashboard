import React, { Component } from "react";
import classes from "./styles/sidebar.module.scss";
import Dog from "../assets/labrador.jpg";
import { FaChartPie, FaTicketAlt } from "react-icons/fa";

class Sidebar extends Component {
  render() {
    return (
      <div className={classes.MainSidebar}>
        <div className={classes.Sidebar}>
          <div className={classes.Logo}>Accode Dashboard</div>
          <div>
            <ul className={classes.Menu}>
              <li>
                <FaChartPie />
                &emsp; &emsp;<span>Overview</span>
              </li>
              <li>
                <FaTicketAlt />
                &emsp; &emsp;<span>Tickets</span>
              </li>
            </ul>
          </div>
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
