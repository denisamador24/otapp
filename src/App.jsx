import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Lugares from './pages/Lugares.jsx';
import InfoLugar from './pages/InfoLugar.jsx';
import Game from './pages/Game.jsx';
import Map from './pages/Map.jsx';
import './i18n';

function App() {

  return (
    <>
       <Router>
        <Routes>
         
          <Route index path="/" element={<Home/>}
          />
          <Route path="/home" element={<Home/>}>
          </Route>
          <Route path="/lugares" element={<Lugares/>}
          />
          <Route path="/juego" element={<Game/>} />
          <Route path='/mapa' element={<Map/>}></Route>
          <Route path='/lugares/info/:index' element={ <InfoLugar/> } />
          
        </Routes>
      </Router>
    </>
  )
}

export default App
