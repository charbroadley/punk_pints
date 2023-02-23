import WantedBeer from "./WantedBeer"
import styled from "styled-components"

const WantedBeerList = styled.section`
    grid-area: want-list;
    margin: 10px;
    text-align: center;
`

const WantList = ({wantList}) => {

    //FOR EACH BEER IN THE WANT LIST SHOW THE NAME 
    const showWantedBeers = wantList.map((wantedBeer) => (
        <WantedBeer key={wantedBeer.id} wantedBeer={wantedBeer}/>
    ))

    return (
        <WantedBeerList>
            <h3>{showWantedBeers.length ? "YOUR FUTURE PINTS!": " "}</h3>

            {showWantedBeers}
            
        </WantedBeerList>
    )
}

export default WantList