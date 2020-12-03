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


    handleClearInput = () => {
        document.getElementById(this.props.id + "_waterLog").reset();
        this.setState({
            waterIntake: 0
        })
    }


    handleAdd = (e) => {
        e.preventDefault();
        const dbRef = firebase.database().ref();

        const newData = {};

        newData[this.props.id] = {
            Day: this.props.day,
            Sum: this.props.sum + + this.state.waterIntake
        }

        dbRef.update(newData);

        this.handleClearInput();
    }


    
    handleRemove = (e) => {
        e.preventDefault();
        const dbRef = firebase.database().ref();

        const newData = {};

        let newSum = this.props.sum - this.state.waterIntake;
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
        })
    }

    render() {
        return (
            <div className="DaysOfWeek">
                <h1>{this.props.day}</h1>

                <div className="Sum">
                    <p>{this.props.sum}</p>
                    <p>oz</p>
                </div>



                    <form id={this.props.id + "_waterLog"}>
                        <button className="LogButton AddWater" onClick={this.handleAdd}><FontAwesomeIcon icon={faPlus} /></button>

                        <label>Log your water</label>
                        <input type="number" id="logWater" name="logWater" placeholder="Log your water" onChange={this.handleInputChange} />

                        <button className="LogButton RemoveWater" onClick={this.handleRemove}><FontAwesomeIcon icon={faMinus} /></button>
                    </form>

                </div>
        )
    }
}

export default DaysOfWeek;