import React from "react";
import classes from "./styles/rightView.module.scss";
import { Route, Switch } from "react-router-dom";

import Overview from "./overview";
import Tickets from "./tickets";

const rightView = (props) => {
  return (
    <div className={classes.RightView}>
      <Switch>
        <Route path="/overview" component={Overview} />
        <Route path="/tickets" component={Tickets} />
      </Switch>
    </div>
  );
};

export default rightView;
