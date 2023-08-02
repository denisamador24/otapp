import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  Home,
  Places,
  PlaceInfo,
  Game,
  Ships,
  Info
} from './pages';;

import './i18n';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/lugares" element={<Places />} />
          <Route path="/juego" element={<Game />} />
          <Route path='/lugares/info/:index' element={<PlaceInfo />} />
          <Route path='/barcos' element={<Ships />} />
          <Route path='/info' element={<Info />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
