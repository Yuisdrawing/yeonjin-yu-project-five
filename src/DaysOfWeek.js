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

    handleAdd = (e) => {
        e.preventDefault();
        const dbRef = firebase.database().ref();

        const newData = {
            Day: this.props.day,
            Sum: this.props.sum + + this.state.waterIntake
        }

        // dbRef.child(this.props.id).update(newData);
        console.log(dbRef)
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


                <div className="LogsContainer">

                    <form>
                        <button className="LogButton AddWater" onClick={this.handleAdd}><FontAwesomeIcon icon={faPlus} /></button>

                        <label>Log your water</label>
                        <input type="number" id="logwater" name="logwater" placeholder="Log your water" onChange={this.handleInputChange} />

                        <button className="LogButton RemoveWater" onClick={this.handleAdd}><FontAwesomeIcon icon={faMinus} /></button>
                    </form>

                </div>

            </div>
        )
    }
}

export default DaysOfWeek;