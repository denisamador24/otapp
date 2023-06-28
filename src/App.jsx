import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Lugares from './pages/Lugares.jsx';
import InfoLugar from './pages/InfoLugar.jsx';
import Game from './pages/Game.jsx';
import Map from './pages/Map.jsx';
import Ships from './pages/Ships.jsx';
import NewPlace from './pages/NewPlace.jsx';
import AdminPlaces from './pages/AdminPlaces.jsx';
import Login from './pages/Login.jsx';
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
          <Route path='/barcos' element={ <Ships/> } />
          <Route path='/agregar' element={ <NewPlace/> } />
          <Route path='/editar' element={ <NewPlace/> } />
          <Route path='/admin' element={ <AdminPlaces/> } />
          <Route path='/login' element={ <Login/> } />
        </Routes>
      </Router>
    </>
  )
}

export default App
