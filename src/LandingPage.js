import { Component } from 'react';
import arrow from './assets/arrow.png';
import glass from './assets/glass.png';
import water from './assets/water.png';

class LandingPage extends Component {
    render() {
        return (
            <div className="LandingPage">
                <main>
                    <div className="Texts">
                        <h1>Does your mouth<br></br>feel a little dry?</h1>
                        <h2>Take a sip.</h2>
                    </div>
                    <div className="Graphics">
                        <img className="Water" src={ water } alt=""/>
                        <img className="Glass" src={ glass } alt="" />
                    </div>
                </main>
                <div className="Redirect">
                    <p>Track your water intake</p>
                    <a href=""><img src={arrow} alt="" /></a>
                </div>

                
            </div>
        )
    }
}

export default LandingPage;