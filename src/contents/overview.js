import React from "react";

import classes from "./styles/overview.module.scss";
import SectionNavbar from "./sectionNavbar";
import SectionCards from "./sectionCards";
import Chart from "./charts";

const overview = (props) => {
  return (
    <div className={classes.OverviewBody}>
      <SectionNavbar>Overview</SectionNavbar>
      <div className={classes.OverviewCards}>
        <SectionCards issue="Unresolved" count="60" />
        <SectionCards issue="Overdue" count="16" />
        <SectionCards issue="Open" count="63" />
        <SectionCards issue="On hold" count="84" />
      </div>
      <Chart />
    </div>
  );
};

export default overview;
