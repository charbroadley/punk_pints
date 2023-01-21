const Beer = ({beer, onNumberClicked}) => {

    const handleClick = function () {
        console.log(`clicked on ${beer.name}`)
        onNumberClicked(beer)
    }

    return (
        <li onClick={handleClick}>{beer.id}</li>
    )
}

export default Beer