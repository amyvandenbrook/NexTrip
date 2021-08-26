import React, { useContext, useEffect } from 'react'
import { StateContext } from '../services/StateContext.jsx'
import { getRoutes } from '../services/AxiosService.jsx'

/**
 * Route
 * @returns A selector containing the route options available.
 */
const Route = () => {
    const { routeChanged, routeData, dispatch } = useContext(StateContext)

    // on initial page load request routes from API
    useEffect(() => {
        const routesPromise = getRoutes()
        if (routesPromise) {
            routesPromise.then((result) => {
                dispatch({ type: 'set_route_data', payload: result.data })
            })
        }
    }, [dispatch])

    // function to dispatch set_route action
    const setRoute = (event) => {
        dispatch({ type: 'set_route', payload: event.target.value })
    }

    return (
        <React.Fragment>
            <p>
                Please select a route from the options below to see the
                directions and stops available for you!
            </p>
            <select
                className="route_selector"
                id="Route"
                data-testid="Select-Route"
                name="Route"
                onChange={setRoute}
            >
                {!routeChanged ? (
                    <option value={-1}>Select a Route</option>
                ) : null}
                ;{' '}
                {routeData.map((data) => (
                    <option key={data.Route} value={data.Route}>
                        {data.Description}
                    </option>
                ))}
            </select>
            <i className="fas fa-arrow-circle-down"></i>
        </React.Fragment>
    )
}

export default Route
