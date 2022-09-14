import { getSizes, setSize } from "./database.js"

const sizes = getSizes()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "size") {
            setSize(parseInt(event.target.value))
        }
    }
)

    // Use .map() for converting objects to <li> elements. The .map() method also iterates the array just like for...of does, but .map() invokes the function that you define

    // Join all of the strings in the array into a single string

export const DiamondSizes = () => {
    let html = "<ul>"


    const listItems = sizes.map(size => {
        return `<li>
            <input type="radio" name="size" value="${size.id}" /> ${size.carets}
        </li>`
    })

    
    html += listItems.join("")
    html += "</ul>"

    return html
}

