import Container from "../atoms/Container"
import { Text } from "../atoms/Text"
import SearchBar from "../molecules/SearchBar"

export default function Homepage() {

    return <Container>

        <Text>Marvin is an AI powered search engine. Ask him anything.</Text>
        <SearchBar />

    </Container>
}