import axios from 'axios'

const getRoutes = () => {
    return axios.get('https://svc.metrotransit.org/NexTrip/Routes?format=json')
}

const getDirections = (route) => {
    return axios.get(
        'https://svc.metrotransit.org/NexTrip/Directions/' +
            route +
            '?format=json'
    )
}

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
