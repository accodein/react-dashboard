import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import classes from "./styles/charts.module.scss";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {},
    };
  }

  componentDidMount() {
    var ctx = document.getElementById("canvas").getContext("2d");
    var gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, "rgba(229, 239, 255, 1)");
    gradient.addColorStop(1, "#FFFFFF");
    const newData = {
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
          data: [4111, 5555, 7777, 3777, 8888, 3999],
          fill: false,
          pointRadius: 0,
          borderColor: "rgba(255, 159, 64, 0.6)",
          borderWidth: 1,
        },
        {
          label: "Control",
          data: [3111, 8888, 2222, 7777, 3333, 9999],
          fill: true,
          backgroundColor: gradient,
          pointRadius: 0,
          borderColor: "#3751FF",
          borderWidth: 1,
        },
      ],
    };
    this.setState({ chartData: newData });
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: "top",
  };

  render() {
    let options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    return (
      <>
        <div className={classes.Container}>
          <div className={classes.Chart}>
            <div className={classes.TitleContainer}>
              <h1 className={classes.Title}>Today's trend</h1>
              <p className={classes.SubTitle}>
                as of {new Date().toLocaleString("en-UG", options)}
              </p>
            </div>
            <div className={classes.Graph}>
              <Line
                id="canvas"
                data={this.state.chartData}
                options={{
                  legend: {
                    display: this.props.displayLegend,
                    position: this.props.legendPosition,
                    align: "end",
                  },
                  scales: {
                    xAxes: [
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
          <div className={classes.ChartAdditionalInfo}>
            <div>
              <p>Resolved</p>
              <h1>449</h1>
            </div>
            <div>
              <p>Received</p>
              <h1>426</h1>
            </div>
            <div>
              <p>Average first response time</p>
              <h1>33m</h1>
            </div>
            <div>
              <p>Average response time</p>
              <h1>3h 43m</h1>
            </div>
            <div>
              <p>Resolution within SLA</p>
              <h1>94%</h1>
            </div>
          </div>
        </div>
        <div className={classes.Card}>
          <div
            className={`${classes.ChartCard} ${classes.UnresolvedTicket}`}
          ></div>
          <div className={`${classes.ChartCard} ${classes.Tasks}`}></div>
        </div>
      </>
    );
  }
}

export default Chart;
