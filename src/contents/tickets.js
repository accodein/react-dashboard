import React from "react";
import classes from "./styles/tickets.module.scss";
import SectionNavbar from "./sectionNavbar";
import Button from "./button";
import Spinner from "./spinner";

const tickets = () => {
  return (
    <div className={classes.TicketsBody}>
      <SectionNavbar>Tickets</SectionNavbar>
      <Button btnType="Urgent">New</Button>
      <Spinner />
      <h1>Coming soon... （*＾-＾*）</h1>
    </div>
  );
};

export default tickets;
