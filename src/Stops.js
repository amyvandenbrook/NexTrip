import React from 'react'

export const ShowStops = (props) => {
    if (props.stopLoaded) {
        return (
            <ul>
            {props.stopData.map(stop => (
                <li key={stop.Value}>{stop.Text}</li>
            ))}
            </ul>
        )
    } else {
        return (
            <div>Please choose a route above to see related stops.</div>
        )
    }
}