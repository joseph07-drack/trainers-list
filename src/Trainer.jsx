import React from "react"  //this is optional

/**
 * since this Component does not its own state, we can use functional Component to define it
 */
function Trainer({trainersData,onDeleteTrainer}) {
    return (
        <li key={trainersData.id}>
            {trainersData.name} <button onClick={() => onDeleteTrainer(trainersData.id)}>X</button>
        </li>
    )
}


export default Trainer  