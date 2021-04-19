import React from "react";

import classes from "./styles/overview.module.scss";
import SectionNavbar from "./sectionNavbar";
import SectionCards from "./sectionCards";
import Chart from "./charts";

const overview = (props) => {
  return (
    <>
      <div className={classes.OverviewBody}>
        <SectionNavbar>Overview</SectionNavbar>
        <SectionCards />
        <Chart />
      </div>
    </>
  );
};

export default overview;
