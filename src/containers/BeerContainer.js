import { useState, useEffect } from "react";
import BeerSelector from "../components/BeerSelector";
import BeerDetails from "../components/BeerDetails";
import InteractiveContainer from "./InteractiveContainer";

const BeerContainer = () => {
    
    // TRACKING USE STATES:
    const [beers, setBeers] = useState([])
    const [beerSelected, setBeerSelected] = useState(null)
    const [wantList, setWantList] = useState([])

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

    // STRIKE OUT BEERS DRANK FROM LIST:
    // const strikeOut = function ()

    // ADD BEER TO WANT LIST:
    const addToWantList = () => {
        let newWants = []
        // TO PREVENT DUPLICATES - NOT WORKING (EMPTIES LIST) COME BACK LATER
        // if(!wantList.includes(beerSelected))
        newWants = [...wantList, beerSelected]
        setWantList(newWants)
    }

    return(
        <div className="beer-container">
            
            <BeerSelector beers={beers} onBeerSelect={onBeerSelect}/>

            <InteractiveContainer wantList={wantList} addToWantList={addToWantList}/>

            {beerSelected && <BeerDetails beer={beerSelected}/>}
        </div>
    )
}

export default BeerContainer