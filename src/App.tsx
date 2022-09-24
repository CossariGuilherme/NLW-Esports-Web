import './styles/main.css'

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Home from './Pages/Home';
import InfoAds from './Pages/InfoAds';

function App() {
  return (
    <Router>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='infoAds/:id' element={<InfoAds />}/>
    </Routes>
    </Router>
    )
}

export default App
