import { Component } from 'react';

class DaysOfWeek extends Component {
    render() {
        return (
            <div className="DaysOfWeek">
                <div className="Day">
                    <h1>{this.props.day}</h1>

                    <div className="Sum">0 oz</div>

                    <form>
                        <label>Log your water</label>
                        <input type="number" id="logwater" name="logwater" placeholder="Log your water" />
                    </form>
                    <button className="AddWater">Add Water</button>
                    <button className="RemoveWater">Remove Water</button>
                </div>
            </div>
        )
    }
}

export default DaysOfWeek;