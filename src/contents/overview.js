import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

import classes from "./styles/overview.module.scss";

class Overview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: [
          "Muzaffarpur",
          "Delhi",
          "Mumbai",
          "Bangalore",
          "Rajkot",
          "Goa",
        ],
        datasets: [
          {
            label: "Population",
            date: [9999, 8888, 7777, 6666, 5555, 4444],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
              "rgba(255, 159, 64, 0.6)",
              "rgba(255, 99, 132, 0.6)",
            ],
          },
        ],
      },
    };
  }
  render() {
    return (
      <>
        <div className={classes.OverviewBody}>
          <h1 className={classes.OverviewHeader}>Overview</h1>
          <div className={classes.chart}>
            <Bar data={this.state.chartData} options={{}} />
          </div>
        </div>
      </>
    );
  }
}

export default Overview;
