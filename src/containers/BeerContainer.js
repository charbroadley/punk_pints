import { useState, useEffect } from "react";
import BeerSelector from "../components/BeerSelector";
import BeerDetails from "../components/BeerDetails";
import InteractiveContainer from "./InteractiveContainer";
import styled from "styled-components";

const BeersBox = styled.div`
    grid-template-areas:
        'beer-selector interactive'
        'details details';
`

const BeerContainer = () => {
    
    // TRACKING USE STATES:
    const [beers, setBeers] = useState([])
    const [beerSelected, setBeerSelected] = useState("")
    const [wantList, setWantList] = useState([])
    const [drunkBeers, setDrunkBeers] = useState ([])

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

    // MAP DATA TO GET AN ARRAY OF BEERS:
    const beerItems = beers.map ((beer) => {
        return (
            <option value={beer.name} key={beer.id}>
                {beer.id}
            </option>
        )
    })

    // FUNCTION TO HANDLE NUMBER SELECT FROM DROP DOWN LIST:
    // (double equals because we're comparing a number to a string)
    const onBeerSelect = function (beerValue) {
        const chosenBeerByNumber = beers.find((beer) => beer.id == beerValue)
        setBeerSelected(chosenBeerByNumber)
        console.log(`selected beer is ${beerSelected}`)
    }

    // FUNCTION TO HANDLE NUMBER TYPED INTO BOX:
    // const onBeerSelect = function (inputValue) {
    //     const chosenBeerByNumber = beers.find((beer) => beer.id === Number(inputValue))
    //     setBeerSelected(chosenBeerByNumber)
    //     console.log(inputValue)
    //     console.log(`chosen beer by number is ${chosenBeerByNumber}`) //undefined
    //     console.log(`selected beer is ${beerSelected}`) //undefined
    // }

    // ADD BEER TO WANT LIST:
    const addToWantList = () => {
        let newWants = []
        // TO PREVENT DUPLICATES - NOT WORKING (EMPTIES LIST) COME BACK LATER
        // if(!wantList.includes(beerSelected))
        newWants = [...wantList, beerSelected]
        setWantList(newWants)
    }
    
    // ADD BEER TO DRUNK LIST:
    const addToDrunkBeers = () => {
        let newDrunkBeers = []
        newDrunkBeers = [...drunkBeers, beerSelected]
        setDrunkBeers(newDrunkBeers)
    }

    return(
        <BeersBox>
            
            <BeerSelector
                beerItems={beerItems} onBeerSelect={onBeerSelect}
            />

            <InteractiveContainer 
            wantList={wantList} 
            addToWantList={addToWantList}
            drunkBeers={drunkBeers}
            addToDrunkBeers={addToDrunkBeers}
            />

            {beerSelected && <BeerDetails beer={beerSelected}/>}

        </BeersBox>
    )
}

export default BeerContainer