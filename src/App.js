import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Theme from './components/atoms/Theme'
import Homepage from './components/organisms/Homepage'
import { listen_to_document } from './modules/firebase'

// ///////////////////////////////
// Render component
// ///////////////////////////////
export default function App( ) {

  return <Theme>

      <Router>

        <Routes>

          <Route exact path='/' element={ <Homepage /> } />

        </Routes>

      </Router>

  </Theme>
  
}