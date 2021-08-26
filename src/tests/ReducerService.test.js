import Reducer from '../services/Reducer.jsx'

describe('Reducer', () => {
    let initialState
    let returnedState
    test('set_route_data action', () => {
        initialState = {}
        returnedState = Reducer(initialState, {
            type: 'set_route_data',
            payload: ['mockRoute'],
        })
        expect(returnedState).toStrictEqual({ routeData: ['mockRoute'] })
    })

    test('set_route action', () => {
        initialState = {}
        returnedState = Reducer(initialState, {
            type: 'set_route',
            payload: 'mockRoute',
        })
        expect(returnedState).toStrictEqual({
            route: 'mockRoute',
            routeChanged: true,
        })
    })

    test('set_direction_data action', () => {
        initialState = {}
        returnedState = Reducer(initialState, {
            type: 'set_direction_data',
            payload: ['mockDirection'],
        })
        expect(returnedState).toStrictEqual({
            directionData: ['mockDirection'],
        })
    })

    test('set_direction action', () => {
        initialState = {}
        returnedState = Reducer(initialState, {
            type: 'set_direction',
            payload: 'mockDirection',
        })
        expect(returnedState).toStrictEqual({
            direction: 'mockDirection',
        })
    })

    test('set_stop_data action', () => {
        initialState = {}
        returnedState = Reducer(initialState, {
            type: 'set_stop_data',
            payload: ['mockStop'],
        })
        expect(returnedState).toStrictEqual({
            stopData: ['mockStop'],
        })
    })

    test('default action', () => {
        initialState = {}
        returnedState = Reducer(initialState, {
            type: 'action_dne',
            payload: ['mockStop'],
        })
        expect(returnedState).toStrictEqual(initialState)
    })
})
