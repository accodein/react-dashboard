import classes from "./styles/navbar.module.scss";
import React from "react";

class Navbar extends React.Component {
  render() {
    let navMenu = (
      <div className={classes.NavMenu}>
        <div>
          <a href="/">Home</a>
        </div>
        <div>
          <a href="/">Dashboard</a>
        </div>
      </div>
    );
    return (
      <>
        <header>
          <nav>
            <div className={classes.Nav}>
              <div className={classes.Logo}>Accode</div>
              <div>
                <div className={classes.Desktop}>
                  <ul>{navMenu}</ul>
                </div>
              </div>
              <div>
                <button className={classes.LoginButton}>
                  <a href="/">Login</a>
                </button>
              </div>
            </div>
          </nav>
        </header>
      </>
    );
  }
}

export default Navbar;
