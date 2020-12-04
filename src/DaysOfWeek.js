import { Component } from 'react';

import firebase from './firebase.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'


class DaysOfWeek extends Component {

    constructor() {
        super();
        this.state = {
            waterIntake: 0,
        }
    }

// Clear the input after pressing add or remove button
    handleClearInput = () => {
        document.getElementById(this.props.id + "_logWater").value="";
        this.setState({
            waterIntake: 0
        });
    }

// Add button(+):
    handleAdd = (e) => {
        e.preventDefault();
        const dbRef = firebase.database().ref();
        // object where the values will be updated into every time changes are made
        const newData = {};
        // Any changes will be added into the pre-existing value
        newData[this.props.id] = {
            Day: this.props.day,
            Sum: this.props.sum + + this.state.waterIntake
        }
        
        dbRef.update(newData);
        this.handleClearInput();
    }


// Subtract button (-):
    handleRemove = (e) => {
        e.preventDefault();
        const dbRef = firebase.database().ref();

        const newData = {};
        // Any changes will be subtracted from the pre-existing value
        let newSum = this.props.sum - this.state.waterIntake;
        // If value is larger than 0, it doesn't go down any further
        if (newSum < 0) {
            newSum = 0;
        }
        
        newData[this.props.id] = {
            Day: this.props.day,
            Sum: newSum
        }

        dbRef.update(newData);
        this.handleClearInput();
    }


    handleInputChange = (e) => {
        this.setState({
            waterIntake: e.target.value
        });
    }

    render() {
        return (
                 <section className="DaysOfWeek">
                <h1>{this.props.day}</h1>

                <div className="Sum">
                    <p>{this.props.sum}</p>
                    <p>oz</p>
                </div>



                    <form>
                        <button className="LogButton AddWater" onClick={this.handleAdd}><FontAwesomeIcon icon={faPlus} /></button>

                        <label>Log your water</label>
                        <input type="number" id={this.props.id + "_logWater"} name="logWater" placeholder="Log your water" onChange={this.handleInputChange} />

                        <button className="LogButton RemoveWater" onClick={this.handleRemove}><FontAwesomeIcon icon={faMinus} /></button>
                    </form>

                </section>
           
        )
    }
}

export default DaysOfWeek;