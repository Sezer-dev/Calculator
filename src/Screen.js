import React from 'react'
import "./screen.css"

function Screen(props) {
    return (
        <div id="screenContainer">
            <div className="screenDivs" id="previous">
                <p>{props.values.prevValue}</p>
            </div>
            <div className="screenDivs" id="operation">
                <p>{props.values.operator}</p>
            </div>
            <div className="screenDivs" id="current">
                <p>{props.values.curValue}</p>
            </div>
        </div>
    )
}

export default Screen
