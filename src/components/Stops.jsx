import React, { useContext, useEffect } from 'react'
import { StateContext } from '../services/StateContext.jsx'
import { getStops } from '../services/AxiosService.jsx'

const Stops = (props) => {
    const { dispatch, route, direction, stopData } = useContext(StateContext)

    useEffect(() => {
        if (route && direction) {
            getStops(route, direction).then((result) => {
                dispatch({ type: 'set_stop_data', payload: result.data })
            })
        }
    }, [dispatch, route, direction])

    return stopData.length > 0 ? (
        <div className="stops">
            <h2 className="header--2">Stops</h2>
            <ul>
                {stopData.map((stop, index) => (
                    <li key={index}>{stop.Text}</li>
                ))}
            </ul>
        </div>
    ) : null
}

export default Stops
