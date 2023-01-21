const BeerDetails = ({beer}) => {

    return (
        <>
            <h3>Your next beer!!</h3>
            <br></br>
            <p>
                <b>{beer.name}</b>
                <br></br>
                Abv: {beer.abv}
                <br></br>
                <br></br>
                {beer.tagline}
                <br></br>
                <br></br>
            {beer.description}
            </p>
            <img src={beer["image_url"]} alt={beer.name} height="300"></img>
            
        </>
    )
}

export default BeerDetails