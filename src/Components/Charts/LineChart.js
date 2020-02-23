import React from "react";
import "./LineChart.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

class LineChart extends React.Component {
  constructor(props) {
    super(props);
    let _this = this;
    console.log(this.props.data);
    this.state = {
      weeks: null,
      dataLine: {
        labels: _this.props.labels,
        datasets: [
          {
            label: "My First dataset",
            fill: true,
            lineTension: 0.3,
            backgroundColor: "rgba(225, 204,230, .3)",
            borderColor: "#F57BA6",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "#F50057",
            pointBackgroundColor: "rgb(255, 255, 255)",
            pointBorderWidth: 10,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgb(0, 0, 0)",
            pointHoverBorderColor: "rgba(220, 220, 220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: _this.props.data
          }
        ]
      }
    };
  }

  getData = householdNumber => {
    fetch(
      "https://us-central1-healthystudent.cloudfunctions.net/HealthyStudents-GetData?id=" +
        householdNumber
    )
      .then(res => res.json())
      .then(result => {
        this.setState({ weeks: result });

        /*
                  this.state.weeks.weeks.forEach((item) => {
                      console.log(item.week_num, item.week_sum, item.transactions);
                      this.state.labels.append()
                  })
                  */
        var labs = [];
        var week_sums = [];
        for (var i = 0; i < this.state.weeks.weeks.length; i++) {
          console.log(this.state.weeks.weeks[i]);
          //this.state.dataLine.labels.append("Week " + i);
          labs.push(this.state.weeks.weeks[i].week_num);
          week_sums.push(this.state.weeks.weeks[i].week_sum);
        }
        console.log(week_sums);
        this.setState({ dataLine: { labels: labs } });
        this.setState({ dataLine: { datasets: { data: week_sums } } });

        console.log(this.state.dataLine);
      });
  };

  render() {
    return (
      <MDBContainer>
        <h3>Line chart</h3>
        <Line data={this.state.dataLine} options={{ responsive: true }} />
      </MDBContainer>
    );
  }
}

export default LineChart;
