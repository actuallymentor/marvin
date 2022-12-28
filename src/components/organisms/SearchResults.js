import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { marvin_answer_query } from "../../modules/firebase"
import { log } from "../../modules/helpers"
import Container from "../atoms/Container"
import { Text } from "../atoms/Text"
import SearchBar from "../molecules/SearchBar"
import Card from "../atoms/Card"
import SearchBadgeBar from "../molecules/SearchBadgeBar"

export default function SearchResult() {

    // Get search query
    const [ searchParams ] = useSearchParams()
    const query = searchParams.get( `q` )
    const [ waiting_for_answer, set_waiting_for_answer ] = useState( true )
    const [ answer, set_answer ] = useState( null )
    

    // On mount, make the query
    useEffect( (  ) => {

        let cancelled = false;
    
        ( async () => {
    
            try {
    
                set_waiting_for_answer( true )
                log( `Asking Marvin: `, query )
                const { data: { error, answer } } = await marvin_answer_query( { query } )
                if( cancelled ) return
                log( `Answer ${ error ? 'errored' : 'is' }: `, error || answer )
                if( error ) throw new Error( error )
                set_answer( answer )
    
            } catch( e ) {
                log( `Error making query: `, e )
                alert( e.message )
            } finally {
                if( !cancelled ) set_waiting_for_answer( false )
            }
    
        } )( )
    
        return () => cancelled = true
    
    }, [ query ] )

    return <Container>

        <SearchBar default_value={ query } />


        <Card width='800px'>
            { waiting_for_answer && <Text>{ 'Thinking...' }</Text> }
            { !waiting_for_answer && answer?.replace( /\n\n/g, '\n' ).trimStart().split( '\n' ).map( ( line, index ) => <Text key={ index }>{ line }</Text> ) }
        </Card>

        <SearchBadgeBar query={ query } />

    </Container>
}