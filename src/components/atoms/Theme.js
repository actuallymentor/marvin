import React, { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { log } from '../../modules/helpers'

const theme = {
	colors: {
		primary: 'black',
		text: 'black',
		text_surface: 'white',
		accent: 'orange',
		hint: 'grey',
		backdrop: 'rgba( 0, 0, 0, .2 )'
	},
	shadows: {
		surface: '0 0 15px 0px rgba( 0, 0, 0, .05 )'
	},
	shapes: {
		corner_radius: '5px'
	}
}

const theme_dark = {
	colors: {
		primary: 'white',
		text: 'white',
		text_surface: 'black',
		accent: 'orange',
		hint: 'lightgrey',
		backdrop: 'rgba( 0, 0, 0, .9 )'
	},
	shadows: {
		surface: '0 0 15px 0px rgba( 255, 255, 255, .1 )'
	},
	shapes: {
		corner_radius: '5px'
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
			setDark( event.matches )
		})

	}, [] )

	log( dark ? theme_dark : theme )
	return <ThemeProvider { ...props } theme={ dark ? theme_dark : theme } />
}