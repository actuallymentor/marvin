import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../atoms/Button'
import Input from '../atoms/Input'
import Section from '../atoms/Section'

export default ( { justify='center', default_value='', ...props } ) => {

    const navigate = useNavigate()
    const [ query, set_query ] = useState( default_value )

    const submit_query = ( { key } ) => {
        if( !key || key == 'Enter' ) navigate( `/search?q=${ encodeURIComponent( query ) }` )
    }

	return <Section direction="row" padding="0" justify={ justify }>
        <Input
            placeholder="How do I search/replace the string 'hello' using sed?"
            width="500px"
            onChange={ ( { target } ) => set_query( target.value ) }
            onKeyDown={ submit_query }
            value={ query }
        />
        <Button onClick={ submit_query }>Ask</Button>
    </Section>

}