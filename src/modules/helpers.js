// ///////////////////////////////
// Development helpers
// ///////////////////////////////
export const dev = process.env.NODE_ENV === 'development' || ( typeof location !== 'undefined' && ( location.href?.includes( 'debug=true' ) || location.href?.includes( 'localhost' ) ) )

export const log = ( ...messages ) => {
	if( dev ) console.log( ...messages )
}

// ///////////////////////////////
// Date helpers
// ///////////////////////////////
export const monthNameToNumber = monthName => {
	const months = [ 'january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december' ]
	const monthNumber = months.findIndex( month => month.includes( monthName.toLowerCase() ) ) + 1
	return `${monthNumber}`.length == 1 ? `0${monthNumber}` : monthNumber
}

// ///////////////////////////////
// Visual
// ///////////////////////////////

export const wait = ( time, error=false ) => new Promise( ( res, rej ) => setTimeout( error ? rej : res, time ) )