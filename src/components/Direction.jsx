import React, { useCallback, useContext, useEffect } from 'react'
import { StateContext } from '../services/StateContext.jsx'
import { getDirections } from '../services/AxiosService.jsx'
import { jumpTo } from '../services/BrowserService.jsx'

/**
 * Direction
 * @returns Toggles to choose a direction for a given route.
 */
const Direction = () => {
    const { route, directionData, dispatch } = useContext(StateContext)

    // Request direction data when a route is updated / defined
    useEffect(() => {
        if (route) {
            getDirections(route).then((result) => {
                dispatch({ type: 'set_direction_data', payload: result.data })
            })
        }
    }, [dispatch, route])

    // function to dispatch set_direction action
    const setDirection = useCallback(
        (direction) => {
            dispatch({ type: 'set_direction', payload: direction })
        },
        [dispatch]
    )

    // set initial direction if directionData exists and send users to Directions anchor
    useEffect(() => {
        if (directionData.length > 0) {
            setDirection(directionData[0].Value)
            jumpTo('Directions')
        }
    }, [dispatch, directionData, setDirection])

    return directionData?.length > 0 ? (
        <div className="directions_container" id="Directions">
            <p className="directions_heading"> Choose a direction : </p>
            {directionData.map((direction, index) => {
                return (
                    <React.Fragment key={index}>
                        <input
                            className="directions_input"
                            type="radio"
                            name="Direction"
                            id={direction.Value}
                            value={direction.Value}
                            onClick={() => {
                                setDirection(direction.Value)
                                jumpTo('Stops')
                            }}
                            defaultChecked={index === 0}
                        ></input>
                        <label
                            htmlFor={direction.Value}
                            className="directions_label"
                        >
                            {direction.Text.toLowerCase()}
                        </label>
                    </React.Fragment>
                )
            })}
        </div>
    ) : null
}

export default Direction
