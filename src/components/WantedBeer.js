import styled from "styled-components"

const ListItem = styled.li`
    list-style-type: none;
    padding-left: 1rem;
    text-indent: -0.7rem;
`

const WantedBeer = ({wantedBeer}) => {

        console.log(`I want a ${wantedBeer.name}`)

    return (
        <>
            <ListItem>{wantedBeer.name}</ListItem>
        </>
    )
}

export default WantedBeer