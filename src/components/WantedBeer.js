const WantedBeer = ({wantedBeer}) => {

        console.log(`I want a ${wantedBeer.name}`)

    return (
        <>
            <li>{wantedBeer.name}</li>
        </>
    )
}

export default WantedBeer