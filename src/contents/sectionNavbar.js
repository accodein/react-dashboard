import React from "react";
import classes from "./styles/sectionNavbar.module.scss";
import { BsSearch } from "react-icons/bs";
import { IoIosNotifications } from "react-icons/io";

const sectionNavbar = (props) => {
  return (
    <div className={classes.SectionHeader}>
      <div>
        <h1 className={classes.SectionTitle}>{props.children}</h1>
      </div>
      <div className={classes.SectionIcons}>
        <div className={classes.SearchIcon}>
          <BsSearch />
        </div>
        <div className={classes.NotificationIcon}>
          <IoIosNotifications />
        </div>
        <div>&#8739;</div>
      </div>
    </div>
  );
};

export default sectionNavbar;
