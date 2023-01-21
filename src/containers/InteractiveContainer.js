import ButtonContainer from "./ButtonContainer";
import WantList from "../components/WantList";
import DrunkBeerList from "../components/DrunkBeerList";

const InteractiveContainer = ({addToDrunkBeers, drunkBeers, addToWantList, wantList}) => {

    return (
        <section className="interactive">
            <ButtonContainer addToWantList={addToWantList}
            addToDrunkBeers = {addToDrunkBeers}/>
                <div className="lists">
                    <WantList wantList={wantList}/>
                    <DrunkBeerList drunkBeers={drunkBeers}/>
                </div>
        </section>
    )
}

export default InteractiveContainer