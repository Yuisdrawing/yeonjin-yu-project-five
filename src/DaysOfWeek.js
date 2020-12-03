import { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'


class DaysOfWeek extends Component {

    render() {
        return (
            <div className="DaysOfWeek">
                <h1>{this.props.day}</h1>

                <div className="Sum">
                    <p>56</p>
                    <p>oz</p>
                </div>


                <div class="LogsContainer">
                    <button className="LogButton AddWater"><FontAwesomeIcon icon={faPlus} /></button>
                <form>
                    <label>Log your water</label>
                    <input type="number" id="logwater" name="logwater" placeholder="Log your water" />
                </form>
                    <button className="LogButton RemoveWater"><FontAwesomeIcon icon={faMinus} /></button>
                </div>
                
            </div>
        )
    }
}

export default DaysOfWeek;