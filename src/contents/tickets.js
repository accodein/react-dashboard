import React from "react";
import classes from "./styles/tickets.module.scss";
import SectionNavbar from "./sectionNavbar";
import Button from "./button";

const tickets = () => {
  return (
    <div className={classes.TicketsBody}>
      <SectionNavbar>Tickets</SectionNavbar>
      <Button btnType="Urgent">New</Button>
    </div>
  );
};

export default tickets;
