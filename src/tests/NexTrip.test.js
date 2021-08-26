import React from 'react'
import { act, create } from 'react-test-renderer'
import axios from 'axios'
import { StateProvider } from '../services/StateContext.jsx'
import NexTrip from '../components/NexTrip.jsx'

jest.mock('axios')
axios.get = jest.fn()

describe('Stops', () => {
    let nextrip
    let component

    test('generates the application with default data', () => {
        act(() => {
            component = create(
                <StateProvider
                    initialState={{
                        routeData: ['route1'],
                        route: 'mockRoute',
                        direction: 'mockNorth',
                        directionData: [
                            { Text: 'direction1', Value: 'value1' },
                        ],
                        stopData: [{ Text: 'mockStop' }],
                    }}
                >
                    <NexTrip />
                </StateProvider>
            )
        })
        nextrip = component.toJSON()
        expect(nextrip).toMatchSnapshot()
    })
})
