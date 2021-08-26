import React from 'react'
import { act, create } from 'react-test-renderer'
import { render, fireEvent, screen } from '@testing-library/react'
import axios from 'axios'
import { StateProvider } from '../services/StateContext.jsx'
import Direction from '../components/Direction.jsx'

jest.mock('axios')
axios.get = jest.fn()

describe('Direction', () => {
    let direction
    let component

    test('requests and displays directions if route exists', async () => {
        const mockReturnedData = [{ Text: 'mockDirection', Value: 'mockValue' }]
        axios.get.mockImplementationOnce(() =>
            Promise.resolve({
                status: 200,
                data: mockReturnedData,
            })
        )
        await act(() => {
            component = create(
                <StateProvider initialState={{ route: 'mockRoute' }}>
                    <Direction />
                </StateProvider>
            )
        })
        direction = component.toJSON()
        expect(direction).toMatchSnapshot()
    })

    test('direction options appear when route exists', async () => {
        const mockReturnedData = [
            { Text: 'mockDirection1', Value: 'mockValue1' },
            { Text: 'mockDirection2', Value: 'mockValue2' },
        ]
        axios.get.mockImplementationOnce(() =>
            Promise.resolve({
                status: 200,
                data: mockReturnedData,
            })
        )

        await render(
            <StateProvider initialState={{ route: 'mockRoute' }}>
                <Direction />
            </StateProvider>
        )
        const directionOption = screen.getByLabelText(
            mockReturnedData[1].Text.toLowerCase()
        )

        fireEvent.click(directionOption)

        expect(
            screen.getByLabelText(mockReturnedData[1].Text.toLowerCase()).id
        ).toStrictEqual(mockReturnedData[1].Value)
    })
})
