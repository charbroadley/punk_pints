import styled from "styled-components"

const YourBeer = styled.h3`
    font-family: 'Sedgwick Ave Display', sans-serif;
    color: #5ca0e9;
    font-weight: bold;
    font-size:xx-large;
`
const YourBeerDetails = styled.section`
    grid-area: details;
    display: grid;
    grid-template-areas:
        'text-side image-side';
    grid-template-columns: 50% 50%;
`
const DetailsText = styled.div`
    grid-area: text-side;
    margin: 10px;
`
const DetailsDescription = styled.p`
    text-align: justify;
`
const DetailsImage = styled.div`
    grid-area: image-side;
    display: flex;
    justify-content: center;
    margin: 10px;
`

const BeerDetails = ({beer}) => {

    return (
        <YourBeerDetails>
            <br></br>
            <DetailsText>
                <h3>Your next beer is </h3><YourBeer>{beer.name}</YourBeer>
                <p>
                    <br></br>
                    Abv: {beer.abv}
                    <br></br>
                    <br></br>
                    {beer.tagline}
                    <br></br>
                    <br></br>
                </p>
                <DetailsDescription>
                    {beer.description}
                </DetailsDescription>
            </DetailsText>
            <DetailsImage>
            <img src={beer["image_url"]} alt={beer.name} height="300"></img>
            </DetailsImage>
        </YourBeerDetails>
    )
}

export default BeerDetails