import ButtonContainer from "./ButtonContainer";
import WantList from "../components/WantList";
import DrunkBeerList from "../components/DrunkBeerList";
import styled from "styled-components";

const Interactive = styled.section`
    border: 1px dotted #5ca0e9;
    grid-area: interactive;
`

const InteractiveContainer = ({addToDrunkBeers, drunkBeers, addToWantList, wantList}) => {

    return (
        <Interactive>
            <ButtonContainer addToWantList={addToWantList}
            addToDrunkBeers = {addToDrunkBeers}/>
                <div className="lists">
                    <WantList wantList={wantList}/>
                    <DrunkBeerList drunkBeers={drunkBeers}/>
                </div>
        </Interactive>
    )
}

export default InteractiveContainer