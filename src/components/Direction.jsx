import React, { useCallback, useContext, useEffect } from 'react'
import { StateContext } from '../services/StateContext.jsx'
import { getDirections } from '../services/AxiosService.jsx'

const Direction = (props) => {
    const { route, directionData, dispatch } = useContext(StateContext)

    useEffect(() => {
        if (route) {
            getDirections(route).then((result) => {
                dispatch({ type: 'set_direction_data', payload: result.data })
            })
        }
    }, [dispatch, route])

    const setDirection = useCallback(
        (direction) => {
            dispatch({ type: 'set_direction', payload: direction })
        },
        [dispatch]
    )

    useEffect(() => {
        if (directionData.length > 0) {
            setDirection(directionData[0].Value)
        }
    }, [dispatch, directionData, setDirection])

    return directionData?.length > 0 ? (
        <div className="directions_container">
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
