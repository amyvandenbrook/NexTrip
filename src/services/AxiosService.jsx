import axios from 'axios'

/*
 * AxiosService handles all axios requests
 */

/**
 * getRoutes
 * @returns a promise with the API response of the route request
 */
const getRoutes = () => {
    return axios.get('https://svc.metrotransit.org/NexTrip/Routes?format=json')
}

/**
 * getDirections
 * @param {string} route The route that was chosen to retrieve directions for
 * @returns an array with the available directions for a given route
 */
const getDirections = (route) => {
    return axios.get(
        'https://svc.metrotransit.org/NexTrip/Directions/' +
            route +
            '?format=json'
    )
}

/**
 * getStops
 * @param {string} route The route that was chosen to see stops for
 * @param {string} direction The direction to see the order of the stops
 * @returns an array of stops for a route and direction
 */
const getStops = (route, direction) => {
    return axios.get(
        'https://svc.metrotransit.org/NexTrip/Stops/' +
            route +
            '/' +
            direction +
            '?format=json'
    )
}

export { getRoutes, getDirections, getStops }
