import React from 'react'

export const ChooseRoute = ( props ) => {
    if (props.routeLoaded) {
        return (
            <React.Fragment>
                <p>Please select a route from the options below to see the directions and stops available for you!</p>
                <select id="Route" data-testid="Select-Route" name="Route" onChange={props.routeHandler}>
                    {!props.routeChanged ? <option value={-1}>Select a Route</option> : null};
                    {props.routeData.map(data => (
                        <option key={data.Route} value={data.Route}>{data.Description}</option>
                    ))}
                </select>
                <i className="fas fa-arrow-circle-down"></i>
            </React.Fragment>
        )
    }
    else {
        return <div>Loading</div>
    }
}