import { useState, useEffect } from "react";
import BeerSelector from "../components/BeerSelector";
import BeerDetails from "../components/BeerDetails";

const BeerContainer = () => {
    
    // TRACKING USE STATES:
    const [beers, setBeers] = useState([])
    const [beerSelected, setBeerSelected] = useState(null)

    // MANAGING REACT RERENDERING:
    useEffect (() => {
        getBeers()
    },[])

    // ACCESSING API:
    const getBeers = () => {
        fetch("https://api.punkapi.com/v2/beers?page=1&per_page=80")
            .then(results => results.json())
            .then(beers => setBeers(beers))
    }

    // FUNCTION TO HANDLE NUMBER SELECT FROM DROP DOWN LIST:
    const onBeerSelect = function (beerValue) {
        const chosenBeerByNumber = beers.find((beer) => beer.name === beerValue)
        setBeerSelected(chosenBeerByNumber)
        console.log(`selected beer is ${beerSelected}`)
    }

    return(
        <div className="beer-container">
            <h2>Terrible at picking your next pint? Always holding up the next round?</h2>
            <BeerSelector beers={beers} onBeerSelect={onBeerSelect}/>

            {beerSelected && <BeerDetails beer={beerSelected}/>}
        </div>
    )
}

export default BeerContainer