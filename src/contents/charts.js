import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import classes from "./styles/charts.module.scss";
import Button from "./button";
import { GoPlus } from "react-icons/go";

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
                  responsive: true,
                  maintainAspectRatio: true,
                  responsiveAnimationDuration: 0,
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
          <div className={`${classes.ChartCard} ${classes.UnresolvedTicket}`}>
            <div className={classes.ChartCardHeader}>
              <div>
                <h1>Unresolved Ticket</h1>
                <p>
                  Group: <span>Support</span>
                </p>
              </div>
              <div>
                <a href="#overview">View Details</a>
              </div>
            </div>
            <div className={classes.TicketBrief}>
              <div>
                <h1>Waiting on Feature Request</h1>
                <p>4238</p>
              </div>
              <div>
                <h1>Awaiting Customer Response</h1>
                <p>1005</p>
              </div>
              <div>
                <h1>Awaiting Developer Fix</h1>
                <p>914</p>
              </div>
              <div>
                <h1>Pending</h1>
                <p>281</p>
              </div>
            </div>
          </div>
          <div className={`${classes.ChartCard} ${classes.UnresolvedTicket}`}>
            <div className={classes.ChartCardHeader}>
              <div>
                <h1>Tasks</h1>
                <p>Today</p>
              </div>
              <div>
                <a href="#overview">View all</a>
              </div>
            </div>
            <div className={classes.TicketBrief}>
              <div>
                <input type="text" placeholder="Create new task" />
                <Button btnType="Plus">
                  <GoPlus />
                </Button>
              </div>
              <div>
                <h1>
                  <input type="checkbox" />
                  Finish ticket update
                </h1>
                <Button btnType="Urgent">Urgent</Button>
              </div>
              <div>
                <h1>
                  <input type="checkbox" />
                  Finish ticket update
                </h1>
                <Button btnType="New">New</Button>
              </div>
              <div>
                <h1>
                  <input type="checkbox" />
                  Finish ticket update
                </h1>
                <Button btnType="Default">Default</Button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Chart;
