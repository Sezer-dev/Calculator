import React from 'react'
import "./screen.css"

function Screen({state}) {
    return (
        <div id="screenContainer">
            <div className="screenDivs" id="previous">
                <p>{state.prevValue}</p>
            </div>
            <div className="screenDivs" id="operation">
                <p>{state.operator}</p>
            </div>
            <div className="screenDivs" id="current">
                <p>{state.curValue}</p>
            </div>
        </div>
    )
}

export default Screen
