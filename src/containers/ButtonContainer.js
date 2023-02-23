import HadButton from "../components/HadButton";
import WantButton from "../components/WantButton";
import styled from "styled-components";

const ButtonsBox = styled.section`
    display: flex;
    justify-content: center;
    border: 5px solid white;
`

const ButtonContainer = ({addToWantList, addToDrunkBeers}) => {

    return (
        <ButtonsBox>
            <WantButton
            addToWantList={addToWantList}/>
            <HadButton addToDrunkBeers={addToDrunkBeers}/>
        </ButtonsBox>
    )
}

export default ButtonContainer