import DrunkBeer from "./DrunkBeer"
import styled from "styled-components"

const DrunkBeersList = styled.section`
    grid-area: drunk-list;
    margin: 10px;
    text-align: center;
`

const DrunkBeerList = ({drunkBeers}) => {

    //FOR EACH BEER IN THE DRUNK LIST SHOW THE NAME 
    const showBeersAlreadyDrunk = drunkBeers.map((drunkBeer) => (
        <DrunkBeer key={drunkBeer.id} drunkBeer={drunkBeer}/>
    ))

    return (
        <DrunkBeersList>
            <h3>{showBeersAlreadyDrunk.length ? "ALREADY HAD & LOVED!": " "}</h3>

            {showBeersAlreadyDrunk}
        </DrunkBeersList>
    )
}

export default DrunkBeerList