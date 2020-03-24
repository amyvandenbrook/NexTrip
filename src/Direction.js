import React from 'react';

export const ChooseDirection = (props) => {
    if (props.directionLoaded && (window.location.href.toString().includes('#Directions') || props.testDirection)) {
        return (
            <React.Fragment>
                <div className="description">Choose a direction:
                </div>
                <input
                    type='radio'
                    name='Direction'
                    id={props.directionData0.Value}
                    value={props.directionData0.Value}
                    onClick={props.directionHandler}
                    defaultChecked></input>
                <label htmlFor={props.directionData0.Value}>{props
                        .directionData0
                        .Text
                        .toLowerCase()}</label>
                <input
                    type='radio'
                    name='Direction'
                    id={props.directionData1.Value}
                    value={props.directionData1.Value}
                    onClick={props.directionHandler}></input>
                <label htmlFor={props.directionData1.Value}>{props
                        .directionData1
                        .Text
                        .toLowerCase()}</label>
            </React.Fragment>
        )
    } else {
        return null
    }
}