import { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

import glass from './assets/glass.png';
import water from './assets/water.png';

class LandingPage extends Component {
    render() {
        return (
            <div className="Wrapper">
                <main>
                    <div className="Texts">
                        <h1 className="animate__animated animate__fadeIn">Does your mouth<br></br>feel a little dry?</h1>
                        <h2 className="animate__animated animate__fadeIn animate__delay-1s">Take a sip.</h2>
                    </div>
                    <aside className="Graphics">
                        <img className="Water animate__animated animate__fadeInDown" src={ water } alt=""/>
                        <img className="Glass animate__animated animate__fadeInUp" src={ glass } alt="" />
                    </aside>
                </main>
                <div className="Redirect">
                    <p className="animate__animated animate__fadeIn animate__delay-2s">Log your water intake</p>
                    <a href="#loggingPage"><FontAwesomeIcon icon={faChevronDown} className="animate__animated animate__fadeIn animate__delay-3s" /></a>
                </div>

                
            </div>
        )
    }
}

export default LandingPage;