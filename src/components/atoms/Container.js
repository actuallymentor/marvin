import styled from 'styled-components'

export default styled.div`
	position: relative;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: 100vh;
	width: 100%;
	padding:  0 max( 1rem, calc( 25vw - 8rem ) );
	box-sizing: border-box;
	background-color: ${ ( { theme } ) => theme.colors.backdrop };
	& * {
		box-sizing: border-box;
	}
`