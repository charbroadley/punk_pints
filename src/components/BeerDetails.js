const BeerDetails = ({beer}) => {

    return (
        <section className="details">
            <br></br>
            <div className="text-side">
                <h3>Your next beer is </h3><h3 className="your-beer">{beer.name}</h3>
                <p>
                    <br></br>
                    Abv: {beer.abv}
                    <br></br>
                    <br></br>
                    {beer.tagline}
                    <br></br>
                    <br></br>
                </p>
                <p className="description">
                    {beer.description}
                </p>
            </div>
            <div className="image-side">
            <img src={beer["image_url"]} alt={beer.name} height="300"></img>
            </div>
        </section>
    )
}

export default BeerDetails