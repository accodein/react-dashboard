import React from "react";
import classes from "./styles/tickets.module.scss";
import SectionNavbar from "./sectionNavbar";

const tickets = () => {
  return (
    <div className={classes.TicketsBody}>
      <SectionNavbar>Tickets</SectionNavbar>
    </div>
  );
};

export default tickets;
