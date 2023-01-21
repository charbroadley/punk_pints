import ButtonContainer from "./ButtonContainer";
import WantList from "../components/WantList";

const InteractiveContainer = ({addToWantList, wantList}) => {

    return (
        <section className="interactive">
            <ButtonContainer addToWantList={addToWantList}/>

            <WantList wantList={wantList}/>
        </section>
    )
}

export default InteractiveContainer