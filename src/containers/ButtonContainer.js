import HadButton from "../components/HadButton";
import WantButton from "../components/WantButton";

const ButtonContainer = ({addToWantList, addToDrunkBeers}) => {

    return (
        <section className="buttons-container">
            <WantButton
            addToWantList={addToWantList}/>
            <HadButton addToDrunkBeers={addToDrunkBeers}/>
        </section>
    )
}

export default ButtonContainer