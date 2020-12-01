import { Component } from 'react';
import Header from './Header.js';
import DaysOfWeek from './DaysOfWeek.js';
import './App.css';


class App extends Component {

  daysName = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thurs",
    "Fri",
    "Sat",
    "Sunday"
  ]

  render() {
    return (
      <div className="App">
        

        <Header />

        {this.daysName.map((day) => {
          return (
            <DaysOfWeek day={day} />
          )
        }
        )}

      </div>
    );
  }
}

export default App;
