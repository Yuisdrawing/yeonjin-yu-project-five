import { Component } from 'react';
import firebase from './firebase.js';
import Header from './Header.js';
import DaysOfWeek from './DaysOfWeek.js';
import LandingPage from './LandingPage.js';
import './App.css';


class App extends Component {

  // Setting up the default data
  constructor() {
    super();
    this.state = {
      daysTotals: [],
    }
  }

  componentDidMount() {
    const dbRef = firebase.database().ref();
    dbRef.on('value', (response) => {

      const firebaseDataObj = response.val();
      let dailyWater = [];

      for (let propertyKey in firebaseDataObj) {

        const propertyVal = firebaseDataObj[propertyKey];

        const formattedObj = {
          id: propertyKey,
          day: propertyVal.Day,
          sum: propertyVal.Sum
        }

        dailyWater.push(formattedObj);
      }

    this.setState({
      daysTotals: dailyWater
    })
    });
  }



  render() {
    return (
      <div className="App">




        <Header />
        <LandingPage />


        <div className="Days" id="loggingPage">
          {this.state.daysTotals.map((entry) => {
          return (
            <DaysOfWeek day={entry.day} sum={entry.sum} key={entry.id} id={entry.id} />
          )
        }
        )}
        </div>
        
      </div>
    );
  }
}

export default App;
