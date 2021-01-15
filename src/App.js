import React, { useEffect, useState } from "react";
import Calculator from "./Calculator";
import calculate from "./calculations";
import SpecialNumber from "./SpecialNumber";
import "./app.css";

function App() {
    const [calc, setCalc] = useState({ prevValue: "", curValue: "", operator: "" })
    const [theNum, setTheNum] = useState({})
    const { prevValue, curValue, operator } = calc;
    useEffect(() => {
        document.addEventListener("keydown", handleKeydown)
        return () => { document.removeEventListener("keydown", handleKeydown) }
    }, [calc])
    
    function handleKeydown({ key }) {
        if (Number(key) && Number) {
            setCalc(prevState => ({ ...calc, curValue: prevState.curValue + key }))
        }
        if ((key === "+" || key === "-" || key === "*" || key === "/") && curValue !== "") {
            if (prevValue && curValue) {
                setCalc(() => ({ prevValue: "", operator: "", curValue: calculate(prevValue, curValue, operator) }))
                async function naber() {
                    let special = await fetch(`http://numbersapi.com/${calculate(prevValue,curValue,operator)}`)
                    let data = await special.text()
                    setTheNum({result: calculate(prevValue,curValue,operator), numDesc:data})
                }
                naber()
            } else {
                setCalc({ prevValue: curValue, operator: key, curValue: "" })
            }
        }
        if (key === "Enter" && (prevValue !== "" && operator !== "" && curValue !== "")) {
            setCalc(() => ({ prevValue: "", operator: "", curValue: calculate(prevValue, curValue, operator) }))
            async function naber() {
                let special = await fetch(`http://numbersapi.com/${Math.floor(calculate(prevValue,curValue,operator))}`)
                let data = await special.text()
                setTheNum({result: calculate(prevValue,curValue,operator), numDesc:data})
            }
            naber()
        }
    }

    return (
        <div id="calculatorContainer">
            {theNum.numDesc && <SpecialNumber theNumber={theNum.result} theDesc={theNum.numDesc} />}
            <Calculator state={calc} />
        </div>
    )
}

export default App;