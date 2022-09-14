import { getMetals, setMetal } from "./database.js"

const metals = getMetals()

// Write a function that "listens" for the user to make a choice by clicking the radio input button

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "metal") {
            setMetal(parseInt(event.target.value))
        }
    }
)

// This is how you have been converting objects to <li> elements

export const Metals = () => {
    let html = "<ul>"
    
    for (const metal of metals) {
        html += `<li>
            <input type="radio" name="metal" value="${metal.id}" /> ${metal.metal}
        </li>`
    }

    html += "</ul>"
    return html
}

