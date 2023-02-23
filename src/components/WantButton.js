import styled from "styled-components"

    const Button = styled.button`
    display:inline-block;
    padding:0.5em 3em;
    border:0.16em solid #5ca0e9;
    margin:0 0.3em 0.3em 0;
    box-sizing: border-box;
    text-decoration:none;
    text-transform:uppercase;
    font-family:'Roboto',sans-serif;
    font-weight:400;
    color: #5ca0e9;
    text-align:center;
    transition: all 0.15s;
    background-color: white;
`

const WantButton = ({addToWantList}) => {

    return (
        <Button className="button" onClick={addToWantList}>WANT IT</Button>
    )
}

export default WantButton