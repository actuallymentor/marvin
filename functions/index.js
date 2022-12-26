const functions = require("firebase-functions");
const { log } = require( './modules' )
const { throw_if_invalid_context } = require( './modules/firebase' )

exports.do_a_thing = functions.https.onCall( async ( data, context ) => {

    try {

        throw_if_invalid_context( context )
        return { success: true }

    } catch( e ) {
        log( `upload_file_to_web3 error: `, e )
        return { error: e.message }
    }

} )