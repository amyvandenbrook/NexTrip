import React from 'react'
import { act, create } from 'react-test-renderer'
import { render, fireEvent, screen } from '@testing-library/react'
import axios from 'axios'
import { StateProvider } from '../services/StateContext.jsx'
import Stops from '../components/Stops.jsx'

jest.mock('axios')
axios.get = jest.fn()

describe('Stops', () => {
    let stops
    let component

    test('returns null if no route or direction exists', () => {
        act(() => {
            component = create(
                <StateProvider>
                    <Stops />
                </StateProvider>
            )
        })
        stops = component.toJSON()
        expect(stops).toStrictEqual(null)
    })

    test('requests and displays stops if directions & route exists', async () => {
        const mockReturnedData = [
            { Text: 'mockStop1' },
            { Text: 'mockStop2' },
            { Text: 'mockStop3' },
        ]
        axios.get.mockImplementationOnce(() =>
            Promise.resolve({
                status: 200,
                data: mockReturnedData,
            })
        )
        await act(() => {
            component = create(
                <StateProvider
                    initialState={{
                        route: 'mockRoute',
                        direction: 'mockDirection',
                    }}
                >
                    <Stops />
                </StateProvider>
            )
        })
        stops = component.toJSON()
        expect(stops).toMatchSnapshot()
    })
})
