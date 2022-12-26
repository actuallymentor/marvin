import Container from "../atoms/Container"
import Main from "../atoms/Main"
import Section from "../atoms/Section"
import Hero from "../molecules/Hero"
import { H1, H2, Text } from "../atoms/Text"

export default function Homepage() {


    return <Container>

        <Hero>
            <H1>This is a boilerplate</H1>
            <H2>It doesn't do much</H2>
        </Hero>

    </Container>
}