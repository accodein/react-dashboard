import React from "react";
import classes from "./styles/tickets.module.scss";
import SectionNavbar from "./sectionNavbar";
import Spinner from "./spinner";

const tickets = () => {
  return (
    <div className={classes.TicketsBody}>
      <SectionNavbar>Tickets</SectionNavbar>
      <Spinner />
      <h1>Coming soon... （*＾-＾*）</h1>
    </div>
  );
};

export default tickets;
