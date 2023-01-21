import HadButton from "../components/HadButton";
import WantButton from "../components/WantButton";

const ButtonContainer = ({strikeOut, addToWantList}) => {

    return (
        <section className="buttons">
            <HadButton strikeOut={strikeOut}/>
            <WantButton addToWantList={addToWantList}/>
        </section>
    )
}

export default ButtonContainer