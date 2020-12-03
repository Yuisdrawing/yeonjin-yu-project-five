import { Component } from 'react';
import Header from './Header.js';
import DaysOfWeek from './DaysOfWeek.js';
import LandingPage from './LandingPage.js';
import './App.css';


class App extends Component {

  daysName = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ]

  render() {
    return (
      <div className="App">


        <Header />
        <LandingPage />


        <div className="Days" id="loggingPage">
          {this.daysName.map((day) => {
          return (
            <DaysOfWeek day={day} />
          )
        }
        )}
        </div>
        
      </div>
    );
  }
}

export default App;
