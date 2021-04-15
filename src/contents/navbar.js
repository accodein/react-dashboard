import classes from "./styles/navbar.module.scss";
import React from "react";

class Navbar extends React.Component {
  state = {
    showSidebar: false,
  };

  showSidebarHandler = () => {
    this.setState({ showSidebar: !this.state.showSidebar });
  };
  render() {
    let navMenu = (
      <div className={classes.NavMenu}>
        <div>
          <a href="/">Home</a>
        </div>
        <div>
          <a href="/">Project</a>
        </div>
        <div>
          <a href="/">About</a>
        </div>
        <div>
          <a href="/">Contact</a>
        </div>
      </div>
    );
    const toggle = !this.state.showSidebar
      ? classes.DrawerToggle
      : classes.CrossToggle;

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
              <div className={toggle} onClick={this.showSidebarHandler}>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </nav>
        </header>
        {this.state.showSidebar ? (
          <div className={classes.SideDrawer}>
            <ul>{navMenu}</ul>
          </div>
        ) : null}
      </>
    );
  }
}

export default Navbar;
