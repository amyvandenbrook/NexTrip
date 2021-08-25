import React from 'react'
import { StateProvider } from '../services/StateContext.jsx'
import Direction from './Direction'
import Route from './Route'
import Stops from './Stops'
// import '../Mobile.css'
// import '../Tablet.css'
// import '../Desktop.css'
// import '../Luxury.css'
// import '../App.css'
import '../styles/main.scss'

const NexTrip = () => {
    return (
        <StateProvider>
            <div className="content">
                <div className="note">
                    <h4>This application is sourced by real-time data from </h4>
                    <img
                        alt="Metro Transit Logo"
                        src="https://www.metrotransit.org/img/MetroTransitLogo.svg"
                    ></img>
                </div>
                <h1>NexTrip</h1>
                <div className="application">
                    <div className="route-container">
                        <Route />

                        <div
                            className="directions-container"
                            data-testid="Direction-Container"
                        >
                            <Direction />
                        </div>
                    </div>
                    <div
                        className="stops-container"
                        data-testid="Stops-Container"
                    >
                        <Stops />
                        {/* <Route
                        path="/stops"
                        render={() => <ShowStops stopLoaded={this.state.stopLoaded} stopData={this.state.stopData}/>}/> */}
                    </div>
                </div>
            </div>
        </StateProvider>
    )
}

export default NexTrip
