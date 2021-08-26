import axios from 'axios'
import { act, create } from 'react-test-renderer'
import {
    getRoutes,
    getDirections,
    getStops,
} from '../services/AxiosService.jsx'

jest.mock('axios')
axios.get = jest.fn()

describe('AxiosService', () => {
    test('getRoutes returns mock data in promise', async () => {
        const mockReturnedData = ['testRoute']
        axios.get.mockImplementationOnce(() =>
            Promise.resolve({
                status: 200,
                data: mockReturnedData,
            })
        )

        let returnedData = undefined

        await act(() => {
            getRoutes().then((result) => {
                returnedData = result.data
            })
        })
        expect(returnedData).toStrictEqual(mockReturnedData)
    })

    test('getDirections returns mock data in promise', async () => {
        const mockReturnedData = ['testDirection']
        axios.get.mockImplementationOnce(() =>
            Promise.resolve({
                status: 200,
                data: mockReturnedData,
            })
        )

        let returnedData = undefined

        await act(() => {
            getDirections('mockRoute').then((result) => {
                returnedData = result.data
            })
        })
        expect(returnedData).toStrictEqual(mockReturnedData)
    })

    test('getStops returns mock data in promise', async () => {
        const mockReturnedData = ['testStop']
        axios.get.mockImplementationOnce(() =>
            Promise.resolve({
                status: 200,
                data: mockReturnedData,
            })
        )

        let returnedData = undefined

        await act(() => {
            getStops('mockRoute', 'mockDirection').then((result) => {
                returnedData = result.data
            })
        })
        expect(returnedData).toStrictEqual(mockReturnedData)
    })
})
