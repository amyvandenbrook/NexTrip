import React, { createContext, useReducer } from 'react'
import Reducer from './Reducer.jsx'

const StateContext = createContext()

const StateProvider = ({ children }) => {
    const initialState = {
        routeData: [],
        route: undefined,
        routeChanged: false,
        directionData: [],
        direction: '',
        stopData: [],
    }
    const [state, dispatch] = useReducer(Reducer, initialState)

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
