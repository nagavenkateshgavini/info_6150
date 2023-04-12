import React from "react";
import "./App.css";
import WeatherContainer from "./components/weatherForecast";
import Hourly from "./components/hourlyTemp";
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <>
      <Router>
        <div className="App">

          <Switch>
            <Route path="/" exact component={WeatherContainer} />
            <Route path="/hourly_forecast/:day" component={Hourly} />
          </Switch>
        </div>
      </Router>
      </>
    );
  }
}

export default App;
