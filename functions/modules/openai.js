const { Configuration, OpenAIApi } = require( "openai" )
const { throw_if_invalid_context, db, dataFromSnap, increment } = require( "./firebase" )
const { log, sha256 } = require( "./helpers" )

// Configured OpenAI instance
const { OPENAI_ORG, OPENAI_APIKEY, OPENAI_MODEL } = process.env
log( `OpenAI started with org ${ OPENAI_ORG }, key ${ OPENAI_APIKEY }, model ${ OPENAI_MODEL }` )

const configuration = new Configuration( {
    organization: OPENAI_ORG,
    apiKey: OPENAI_APIKEY,
} )
const openai = new OpenAIApi( configuration )

exports.openai_answer_query = async ( data, context ) => {

    // Global configs
    const max_tokens = 500

    try {

        throw_if_invalid_context( context )
        const { query, temperature=0 } = data

        // Validations
        if( !query ) throw new Error( `Missing search query` )

        // Caching of queries
        const hash = sha256( query )
        const { answer: cached_answer } = await db.collection( `query_cache` ).doc( hash ).get().then( dataFromSnap )
        log( `Found cached response, returning` )

        // Track cache hits and return response
        if( cached_answer ) {
            await db.collection( `query_cache` ).doc( hash ).set( {
                hits: increment( 1 ),
                updated: Date.now()
            }, { merge: true } )
            return { answer: cached_answer }
        }

        // Ask OpenAI for a completion
        log( `Asking OpenAI ${ OPENAI_MODEL }: ${ query }` )
        const { data: { choices } } = await openai.createCompletion( {
            model: OPENAI_MODEL,
            prompt: query,
            max_tokens,
            temperature
        } )

        if( choices.length > 1 ) log( `OpenAI returned multiple choices: `, choices )

        const [ first_choice ] = choices
        const answer = first_choice.text
        log( `OpenAI Answered: `, answer )

        // Save to cache
        await db.collection( `query_cache` ).doc( hash ).set( {
            answer,
            created: Date.now()
        }, { merge: true } )

        return { answer }

    } catch( e ) {
        log( `Error: `, e.message )
        return { error: e.message }
    }

}