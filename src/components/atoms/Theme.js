import React, { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { log } from '../../modules/helpers'

const theme = {
	colors: {
		primary: 'black',
		text: 'black',
		accent: 'orange',
		hint: 'grey',
		backdrop: 'rgba( 0, 0, 0, .05 )'
	}
}

const theme_dark = {
	colors: {
		primary: 'white',
		text: 'white',
		accent: 'orange',
		hint: 'lightgrey',
		backdrop: 'rgba( 0, 0, 0, .9 )'
	}
}

export default props => {

	const [ dark, setDark ] = useState( false )

	useEffect( f => {

		// If API is not available, assume light
		if( !window.matchMedia ) {
			log( 'No darkmode detection support' )
			return setDark( false )
		}

		// Check with API
		const prefers_dark = window.matchMedia('(prefers-color-scheme: dark)').matches
		setDark( prefers_dark )
		log( `User prefers ${ prefers_dark ? 'dark' : 'light' } theme` )

		// Enable a listener
		window.matchMedia('(prefers-color-scheme: dark)').addEventListener( 'change', event => {
			log( 'Darkmode setting changed to ', event.matches )
			setDark( event.matches == 'dark' )
		})

	}, [] )

	return <ThemeProvider { ...props } theme={ dark ? theme_dark : theme } />
}