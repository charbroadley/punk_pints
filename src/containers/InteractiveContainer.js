import ButtonContainer from "./ButtonContainer";
import WantList from "../components/WantList";
import DrunkBeerList from "../components/DrunkBeerList";

const InteractiveContainer = ({addToDrunkBeers, drunkBeers, addToWantList, wantList}) => {

    return (
        <section className="interactive">
            <ButtonContainer addToWantList={addToWantList}
            addToDrunkBeers = {addToDrunkBeers}/>

            <WantList wantList={wantList}/>
            <DrunkBeerList drunkBeers={drunkBeers}/>
        </section>
    )
}

export default InteractiveContainer