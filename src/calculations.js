function calculate(numA, numB, operator) {
    if (operator === "+") {
        return Number(numA) + Number(numB)
    }
    if (operator === "-") {
        return Number(numA) - Number(numB)
    }
    if (operator === "*") {
        return Number(numA) * Number(numB)
    }
    if (operator === "/") {
        return Number(numA) / Number(numB)
    }
}

export default calculate;