import { useState } from "react"
import Beer from "./Beer"

const BeerSelector = ({beerItems, onBeerSelect}) => {

    const [inputData, setInputData] = useState("")

    const handleTextChange = function(evt) {
        setInputData(evt.target.value)
    }

    // HANDLE SELECT CHANGE:
    // const handleChange = function (evt) {
    //     const chosenBeer = evt.target.value
    //     console.log(chosenBeer)
    //     onBeerSelect(chosenBeer)
    // }

    // SELECT A BEER USING A NUMBER INPUT:
    const selectABeer = function (evt) {
        evt.preventDefault()
        const chosenBeer = inputData.trim()
            if (!chosenBeer) {
                return
            }
        onBeerSelect(chosenBeer)
        console.log(chosenBeer)
        setInputData("")

    }

    return (
        <div className="beer-selector">
            <h2>Terrible at choosing your next pint?
                <br></br>
            Pick a number. We pick your next beer.</h2>
            
            {/* <select defaultValue="" onChange={handleChange}>
                {beerItems}
            </select> */}

            <form onSubmit={selectABeer}>
                <label htmlFor="beer">Type a number from 1 - 80:</label>
                <input type="text" id="beer" name="beer" value={inputData} onChange={handleTextChange}></input>
                <input type="submit" value="Find a beer"></input>
            </form>
        </div>
    )
}

export default BeerSelector