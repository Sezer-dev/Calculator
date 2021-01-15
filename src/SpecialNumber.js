import React, {useEffect, useState} from 'react'
import "./specialnumber.css"

export default function SpecialNumber({theDesc,theNumber}) {

    return (
        <div id="specialNumber">
            <p>A fact about the number {theNumber}</p>
            <p id="theFact">{theDesc}</p>
        </div>
    )
}
