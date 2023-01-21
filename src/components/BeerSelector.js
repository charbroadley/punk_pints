import Beer from "./Beer"

const BeerSelector = ({beers, onBeerSelect}) => {

    // HANDLE SELECT CHANGE:
    const handleChange = function (evt) {
        const chosenBeer = evt.target.value
        console.log(chosenBeer)
        onBeerSelect(chosenBeer)
    }

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
        </div>
    )
}

export default BeerSelector