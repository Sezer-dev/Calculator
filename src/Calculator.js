import React, { useState, useEffect } from 'react';
import Buttons from "./Buttons";
import Screen from "./Screen";
import "./calculator.css"

function Calculator() {
    const [calc, setCalc] = useState({
        prevValue: "",
        curValue: "",
        operator: "",
    })

    useEffect(() => {
        document.addEventListener("keydown", handleKeydown)
        return () => { document.removeEventListener("keydown", handleKeydown) }
    }, [calc])

    function handleKeydown(e) {
        const { key } = e
        if (Number(key)) {
            setCalc(prevState => ({ ...calc, curValue: prevState.curValue + key }))
        }
        if ((key === "+" || key === "-" || key === "*" || key === "/")) {
            setCalc({ prevValue: calc.curValue, operator: key, curValue: "" })
        }
        if (key === "Enter" && (calc.prevValue !== "" && calc.operator !== "" && calc.curValue !== "")) {
            setCalc(() => {
                let result;
                if (calc.operator === "+") result = Number(calc.prevValue) + Number(calc.curValue)
                if (calc.operator === "-") result = Number(calc.prevValue) - Number(calc.curValue)
                if (calc.operator === "*") result = Number(calc.prevValue) * Number(calc.curValue)
                if (calc.operator === "/") result = Number(calc.prevValue) / Number(calc.curValue)
                return { prevValue: "", operator: "", curValue: result }
            })
        }
    }

    return (
        <div id="calculator">
            <Screen values={calc} />
            <Buttons />
        </div>
    )
}

export default Calculator
