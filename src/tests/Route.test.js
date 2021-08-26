import React from 'react'
import { act, create } from 'react-test-renderer'
import { render, fireEvent, screen } from '@testing-library/react'
import axios from 'axios'
import { StateProvider } from '../services/StateContext.jsx'
import Route from '../components/Route.jsx'

jest.mock('axios')
axios.get = jest.fn()

describe('Route', () => {
    let route
    let component

    test('is created properly before getting any routes', async () => {
        const mockReturnedData = ['testRoute']
        axios.get.mockImplementationOnce(() =>
            Promise.resolve({
                status: 200,
                data: mockReturnedData,
            })
        )
        await act(() => {
            component = create(
                <StateProvider>
                    <Route />
                </StateProvider>
            )
        })
        route = component.toJSON()
        expect(route).toMatchSnapshot()
    })

    test('changing selection updates routeChanged', () => {
        render(
            <StateProvider>
                <Route />
            </StateProvider>
        )
        const routeSelector = screen.getByTestId('Select-Route')

        fireEvent.change(routeSelector)

        expect(
            screen.getByTestId('Select-Route').children.length
        ).toStrictEqual(0)
    })
})
