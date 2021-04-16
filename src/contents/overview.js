import React, { Component } from "react";
import { Line } from "react-chartjs-2";

import classes from "./styles/overview.module.scss";

class Overview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: [
          "Boston",
          "Worcester",
          "Springfield",
          "Lowell",
          "Cambridge",
          "New Bedford",
        ],
        datasets: [
          {
            label: "Population",
            data: [9999, 8888, 7777, 7777, 8888, 9999],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
              "rgba(255, 159, 64, 0.6)",
              "rgba(255, 99, 132, 0.6)",
            ],
            fill: false,
          },
          {
            label: "Control",
            data: [1111, 8888, 2222, 7777, 3333, 9999],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
              "rgba(255, 159, 64, 0.6)",
              "rgba(255, 99, 132, 0.6)",
            ],
            fill: false,
          },
        ],
      },
    };
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: "right",
  };
  render() {
    return (
      <>
        <div className={classes.OverviewBody}>
          <h1 className={classes.OverviewHeader}>Overview</h1>
          <div className={classes.Chart}>
            <Line
              data={this.state.chartData}
              options={{
                title: {
                  display: this.props.displayTitle,
                  text: "testing Chart",
                  fontSize: 25,
                },
                legend: {
                  display: this.props.displayLegend,
                  position: this.props.legendPosition,
                },
                scales: {
                  xAxes: [
                    {
                      gridLines: {
                        display: false,
                      },
                    },
                  ],
                  yAxes: [
                    {
                      gridLines: {
                        display: false,
                      },
                    },
                  ],
                },
              }}
            />
          </div>
        </div>
      </>
    );
  }
}

export default Overview;
