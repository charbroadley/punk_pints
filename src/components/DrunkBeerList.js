import DrunkBeer from "./DrunkBeer"

const DrunkBeerList = ({drunkBeers}) => {

    //FOR EACH BEER IN THE DRUNK LIST SHOW THE NAME 
    const showBeersAlreadyDrunk = drunkBeers.map((drunkBeer) => (
        <DrunkBeer key={drunkBeer.id} drunkBeer={drunkBeer}/>
    ))

    return (
        <section className="drunk-list">
            <h3>ALREADY HAD & LOVED<br>
            </br>{showBeersAlreadyDrunk.length ? "These are all best!": "Add your favourites so you don't forget!"}</h3>

            {showBeersAlreadyDrunk}
        </section>
    )
}

export default DrunkBeerList