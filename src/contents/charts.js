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
          data: [1111, 8888, 2222, 7777, 3333, 9999],
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
    return (
      <>
        <div className={classes.Container}>
          <div className={classes.Chart}>
            <Line
              id="canvas"
              data={this.state.chartData}
              options={{
                title: {
                  display: this.props.displayTitle,
                  text: "testing Chart",
                  fontSize: 25,
                  fontColor: "black",
                },
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
      </>
    );
  }
}

export default Chart;
