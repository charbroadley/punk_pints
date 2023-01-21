import Beer from "./Beer"

const BeerSelector = ({beerItems, onBeerSelect}) => {

    // HANDLE SELECT CHANGE:
    const handleChange = function (evt) {
        const chosenBeer = evt.target.value
        console.log(chosenBeer)
        onBeerSelect(chosenBeer)
    }

    // SELECT A BEER USING A NUMBER INPUT:
    // const selectABeer = function (evt) {
    //     evt.preventDefault()
    //     const chosenBeer = evt.target.value
    //     console.log(`SELECT A BEER ${evt.target.value}`) // undefined
    //     onBeerSelect(chosenBeer)
    // }

    return (
        <div className="beer-selector">
            <h2>Terrible at choosing your next pint?
                <br></br>
            Pick a number. We pick your next beer.</h2>
            
            <select defaultValue="" onChange={handleChange}>
                {beerItems}
            </select>

            {/* <form onSubmit={selectABeer}>
                <label onChange={handleNumberInput} htmlFor="beer">Pick a number from 1 - 80:</label>
                <input type="number" id="beer" name="beer" min="1" max="80" value={inputData}></input>
                <input type="submit" value="Find a beer"></input>
            </form> */}
        </div>
    )
}

export default BeerSelector