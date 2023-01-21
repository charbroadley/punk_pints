import HadButton from "../components/HadButton";
import WantButton from "../components/WantButton";

const ButtonContainer = ({addToWantList, addToDrunkBeers}) => {

    return (
        <section className="buttons">
            <HadButton addToDrunkBeers={addToDrunkBeers}/>
            <WantButton
            addToWantList={addToWantList}/>
        </section>
    )
}

export default ButtonContainer