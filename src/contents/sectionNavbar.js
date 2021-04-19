import React from "react";
import classes from "./styles/sectionNavbar.module.scss";
import { BsSearch } from "react-icons/bs";
import { IoIosNotifications } from "react-icons/io";

const sectionNavbar = (props) => {
  return (
    <div className={classes.Overview_Title}>
      <div>
        <h1 className={classes.OverviewHeader}>{props.children}</h1>
      </div>
      <div className={classes.OverviewIcons}>
        <div>
          <BsSearch />
        </div>
        <div>
          <IoIosNotifications />
        </div>
        <div>|</div>
      </div>
    </div>
  );
};

export default sectionNavbar;
