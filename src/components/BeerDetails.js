const BeerDetails = ({beer}) => {

    return (
        <section className="details">
            <h3>Your next beer is {beer.name}</h3>
            <p>
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
            
        </section>
    )
}

export default BeerDetails