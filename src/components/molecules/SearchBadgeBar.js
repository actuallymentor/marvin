import Card from '../atoms/Card'
import SearchEngineBadge from './SearchEngineBadge'
import { ReactComponent as GoogleLogo } from '../assets/logos/google.svg'
import { ReactComponent as Duckduck } from '../assets/logos/duckduckgo.svg'

export default ( { query, ...props } ) => {

	return <Card padding="1rem" direction="row" justify="flex-start" width='800px'>
        <SearchEngineBadge phrase='ask Google' logo_component={ <GoogleLogo /> } query={ query } search_url="https://www.google.com/search?q=" />
        <SearchEngineBadge phrase='ask Duckduckgo' logo_component={ <Duckduck /> } query={ query } search_url="https://duckduckgo.com/?q=" />
    </Card>

}