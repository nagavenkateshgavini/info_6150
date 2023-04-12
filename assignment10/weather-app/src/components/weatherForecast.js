import React from "react";
import WeatherData from "./data";
import TextField from "@material-ui/core/TextField";
import './weatherData.css';

var moment = require("moment");

class WeatherContainer extends React.Component {
  state = {
    completeData: [],
    dailyData: [],
    cityName: "",
    hasError: false,
  };

  render() {
    let display;
    if (this.state.completeData.length > 0 || this.state.hasError ==="false") {
      display = this.displayData();
    }

    return (
      <div className="homecontainer">
        <br />
        <br />
        <h1 className="homehead">Fetch Weather Data </h1>
        <TextField
          id="city-name"
          label="Enter city"
          value={this.state.cityName}
          onChange={this.changeText}
        />
        <br />
        <input
          type="button"
          className="btn btn-success mt-2" 
          value="Fetch Data"
          onClick={this.refreshData}
          disabled={this.state.cityName === 0}
        />
        <br />
        <br />
        <br />
        <div>{display}</div>
      </div>
    );
  }

  changeText = (event) => {
    this.setState({ cityName: event.target.value });
  };

  refreshData = () => {
    const _url = `https://api.openweathermap.org/data/2.5/forecast?q=${this.state.cityName}&APPID=a00396f7ac8dd7167e352fd621736630&units=imperial`;
    fetch(_url)
      .then((res) => res.json())
      .then((data) => {
        const daily_data = data.list.filter((reading) =>
          reading.dt_txt.includes("00:00:00")
        );
        data.list.map(function (name) {
          let _date = new Date();
          const weekday = name.dt * 1000;
          _date.setTime(weekday);
          name.day = moment(_date).format("ddd");
        });
        this.setState(
          {
            hasError: false,
            completeData: data.list,
            dailyData: daily_data,
          },
          () => console.log(this.state)
        );
      })
      .catch((err) => {
        this.setState({
          hasError: true,
          completeData: [],
          dailyData: [],
        });
        alert("Please enter valid city name")
      });
  };

  displayData = () => {
    return this.state.dailyData.map((reading, index) => (
      <WeatherData
        reading={reading}
        key={index}
        
        completeData={this.state.completeData}
        cityName={this.state.cityName}
      />
    ));
  };
}

export default WeatherContainer;
