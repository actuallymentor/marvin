import styled from 'styled-components'
import Section from './Section'

export default styled( ( { align='flex-start', ...props } ) => <Section align={ align } { ...props } /> )`
	background: ${ ( { theme } ) => theme.colors.text_surface };
    box-shadow: ${ ( { theme } ) => theme?.shadows?.surface };
    padding: ${ ( { padding='1rem 2rem' } ) => padding };
    border-radius: ${ ( { theme } ) => theme.shapes.corner_radius };
`