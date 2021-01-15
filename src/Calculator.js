import React from 'react';
import Buttons from "./Buttons";
import Screen from "./Screen";
import "./calculator.css"

function Calculator({state}) {
    
    return (
        <div id="calculator">
            <Screen state={state} />
            <Buttons />
        </div>
    )
}

export default Calculator
