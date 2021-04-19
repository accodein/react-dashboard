import React from "react";
import classes from "./styles/sectionNavbar.module.scss";
import { BsSearch } from "react-icons/bs";
import { IoIosNotifications } from "react-icons/io";

const sectionNavbar = (props) => {
  return (
    <div className={classes.SectionTitle}>
      <div>
        <h1 className={classes.SecitionHeader}>{props.children}</h1>
      </div>
      <div className={classes.SectionIcons}>
        <div className={classes.SearchIcon}>
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
