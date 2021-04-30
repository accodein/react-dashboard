import classes from "./styles/navbar.module.scss";
import React from "react";

import Dog from "../assets/labrador.jpg";

class Navbar extends React.Component {
  render() {
    return (
      <>
        <header>
          <nav>
            <div className={classes.Nav}>
              <div className={classes.Logo}>
                <h1>Accode Dashboard</h1>
              </div>
              <div className={classes.User}>
                <p>Blacky</p>
                <img src={Dog} alt="User" />
              </div>
            </div>
          </nav>
        </header>
      </>
    );
  }
}

export default Navbar;
