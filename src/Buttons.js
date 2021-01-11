import React, { useEffect } from 'react'
import "./buttons.css"

function Buttons(props) {
    
    return (
        <div id="buttonsContainer">
            <button className="numbers">7</button>
            <button className="numbers">8</button>
            <button className="numbers">9</button>
            <button className="numbers">4</button>
            <button className="numbers">5</button>
            <button className="numbers">6</button>
            <button className="numbers">1</button>
            <button className="numbers">2</button>
            <button className="numbers">3</button>
            <button id="zero" className="numbers">0</button>
            <button id="divide">/</button>
            <button id="times">*</button>
            <button id="extract">-</button>
            <button id="abstract">+</button>
            <button id="equals">=</button>
            <button id="comma">,</button>
            <button id="clear">C</button>
            <button id="clearAll">CA</button>
        </div>
    )
}
export default Buttons;