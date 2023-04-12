import React from "react";
import { Link } from "react-router-dom";
import {withRouter} from "react-router-dom";

var moment = require("moment");

class WeatherData extends React.Component {

  render() {
    let cardDate = new Date();
    const weekday = this.props.reading.dt * 1000;
    cardDate.setTime(weekday);
    const image = `owf owf-${this.props.reading.weather[0].id} owf-5x`;
    const fahrenheit_max = this.props.reading.main.temp_max;
    const fahrenheit_min = this.props.reading.main.temp_min;
    const farenheit_temp = this.props.reading.main.temp;

    return (
      <div className="row">
        <div className="col-12">
          <Link
            to={{
              pathname: `/hourly_forecast/${this.props.reading.day}`,
              state: {
                completeData: this.props.completeData,
                cityName: this.props.cityName,
              },
            }}  
          >
            <div className="card py-2 m-3">
              <div className="row">
                <div className="col">
                  <h4 className="text-danger">
                    {moment(cardDate).format("MM/DD/YY")}
                  </h4>
                  <hr/>
                  <h5>{this.props.reading.day}</h5>
                  <i className={image}></i>
                  <p>{this.props.reading.weather[0].description}</p>
                  <h5>Temperature: {farenheit_temp}°F</h5>
                  <br/>
                  <p>
                    Minimum Temperature: {fahrenheit_min}°F 
                  </p>
                  <p>
                     Maximum Temperature: {fahrenheit_max}°F
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default withRouter(WeatherData);
