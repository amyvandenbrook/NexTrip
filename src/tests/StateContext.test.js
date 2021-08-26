import React, { useContext } from 'react'
import { act, create } from 'react-test-renderer'
import { StateContext, StateProvider } from '../services/StateContext.jsx'

describe('StateContext', () => {
    let state
    let component
    test('returns the state values and children', () => {
        component = create(
            <StateProvider>
                <h1>Mock child</h1>
            </StateProvider>
        )
        state = component.toJSON()
        expect(state).toMatchSnapshot()
    })
})
