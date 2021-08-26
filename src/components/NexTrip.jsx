import React from 'react'
import { StateProvider } from '../services/StateContext.jsx'
import Direction from './Direction'
import Route from './Route'
import Stops from './Stops'
import '../styles/main.scss'

/**
 * NexTrip
 * @returns the components that render the NexTrip application
 */
const NexTrip = () => {
    return (
        <StateProvider>
            <div className="content">
                <div className="disclaimer">
                    <p>This application is sourced by real-time data from </p>
                    <img
                        name="Metro Transit"
                        alt="Metro Transit Logo"
                        src="https://www.metrotransit.org/img/MetroTransitLogo.svg"
                    ></img>
                </div>
                <h1 className="header--1">NexTrip</h1>
                <div className="route_container">
                    <Route />

                    <div
                        className="directions_container"
                        data-testid="Direction-Container"
                    >
                        <Direction />
                    </div>
                </div>
                <Stops />
            </div>
        </StateProvider>
    )
}

export default NexTrip
