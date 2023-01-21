import WantedBeer from "./WantedBeer"

const WantList = ({wantList}) => {

    //FOR EACH BEER IN THE WANT LIST SHOW THE NAME 
    const showWantedBeers = wantList.map((wantedBeer) => (
        <WantedBeer key={wantedBeer.id} wantedBeer={wantedBeer}/>
    ))

    return (
        <section className="want-list">
            <h3>YOUR NEXT BEERS - {showWantedBeers.length ? "Great choice!": "Click to add your future favourites!"}</h3>

            {showWantedBeers}
        </section>
    )
}

export default WantList