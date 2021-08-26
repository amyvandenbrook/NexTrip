/**
 * Reducer
 * @param {object} state The initial state of the reducer
 * @param {object} action An action to be dispatched
 */
const Reducer = (state, action) => {
    switch (action.type) {
        case 'set_route_data':
            return {
                ...state,
                routeData: action.payload,
            }
        case 'set_route':
            return {
                ...state,
                route: action.payload,
                routeChanged: true,
            }
        case 'set_direction_data':
            return {
                ...state,
                directionData: action.payload,
            }
        case 'set_direction':
            return {
                ...state,
                direction: action.payload,
            }
        case 'set_stop_data':
            return {
                ...state,
                stopData: action.payload,
            }
        default:
            return state
    }
}

export default Reducer
