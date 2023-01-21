import WantedBeer from "./WantedBeer"

const WantList = ({wantList}) => {

    //FOR EACH BEER IN THE WANT LIST SHOW THE NAME 
    const showWantedBeers = wantList.map((wantedBeer) => (
        <WantedBeer key={wantedBeer.id} wantedBeer={wantedBeer}/>
    ))

    return (
        <section className="wantList">
            NEXT BEERS:
            {showWantedBeers}
        </section>
    )
}

export default WantList