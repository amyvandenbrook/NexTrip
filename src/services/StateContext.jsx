import React, { createContext, useReducer } from 'react'
import Reducer from './Reducer.jsx'

const StateContext = createContext()

const StateProvider = ({ children, initialState }) => {
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
