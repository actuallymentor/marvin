import styled from 'styled-components'

export default styled.a`
	padding:  .9rem 2rem;
	margin: ${ ( { margin } ) => margin || '.5rem' };
	color: ${ ( { color='primary', theme } ) => theme.colors[ color ] || color };
	font-size: 1rem;
	text-decoration: none;
	background: ${ ( { background, theme } ) => background || theme.colors.text_surface };
	box-shadow: ${ ( { theme } ) => theme?.shadows?.surface };
	border-radius: ${ ( { theme } ) => theme.shapes.corner_radius };
	&:hover {
		cursor: pointer;
	}
`