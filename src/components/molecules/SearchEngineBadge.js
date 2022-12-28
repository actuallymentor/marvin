import styled from 'styled-components'
import { Text } from '../atoms/Text'

const Badge = styled.div`

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    border: 1px solid ${ ( { theme } ) => theme.colors.text };
    border-radius: 20px;
    padding: .3rem 1rem;
    margin: 0 .5rem 0 0;

    &:hover {
        opacity: .6;
        cursor: pointer;
    }

    svg {
        margin-right: .5rem;
        height: 20px;
        width: 20px;
    }

    p {
        font-size: .8rem;
    }

`

export default ( { logo_component, phrase='ask Google', query, search_url='', ...props } ) => {

    const search = () => window.open( `${ search_url }${ query }`, `_blank` )

	return <Badge onClick={ search }>

        { logo_component }
        <Text margin="0">{ phrase }</Text>

    </Badge>

}