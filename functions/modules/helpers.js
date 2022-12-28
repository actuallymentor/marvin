// ///////////////////////////////
// Development helpers
// ///////////////////////////////
const dev = process.env.NODE_ENV === 'development'
exports.dev = dev
exports.log = ( ...messages ) => {
	if( dev ) console.log( ...messages )
}
exports.wait = ( time, error=false ) => new Promise( ( res, rej ) => setTimeout( error ? rej : res, time ) )

/* ///////////////////////////////
// Data manipulation
// /////////////////////////////*/
const shajs = require('sha.js')
exports.sha256 = string => shajs( 'sha256' ).update( string ).digest( 'hex' )