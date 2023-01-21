const BeerDetails = ({beer}) => {

    return (
        <>
            <h3>Beer Details</h3>
            <br></br>
            <p>{beer.name}
            {beer.tagline}
            {beer.description}
            </p>
        </>
    )
}

export default BeerDetails