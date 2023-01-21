import Beer from "./Beer"

const BeerSelector = ({beers, onBeerSelect}) => {

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


     // MAP DATA TO GET AN ARRAY OF BEERS:
    const beerItems = beers.map ((beer) => {
        return (
            <option value={beer.name} key={beer.id}>
                {beer.id}
            </option>
        )
        // <Beer beer={beer} key={beer.id}/>
    })

    return (
        <div className="beer-selector">
            <h2>Terrible at chosing your next pint?</h2>
            <h4>Pick a number. We pick your next beer.</h4>
            
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