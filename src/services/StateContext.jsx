import React, { createContext, useReducer } from 'react'
import Reducer from './Reducer.jsx'

const StateContext = createContext()

/**
 * StateProvider
 * @param {*} children Content to render inside of the Provider service
 * @param {object} initialState An optional initialState object to use for the state of the application
 */
const StateProvider = ({ children, initialState = {} }) => {
    const defaultState = {
        routeData: [],
        route: undefined,
        routeChanged: false,
        directionData: [],
        direction: '',
        stopData: [],
    }
    const [state, dispatch] = useReducer(Reducer, {
        ...defaultState,
        ...initialState,
    })

    return (
        <StateContext.Provider
            value={{
                ...state,
                dispatch,
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export { StateContext, StateProvider }
