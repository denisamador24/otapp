import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  Home,
  Places,
  PlaceInfo, 
  Game, 
  Ships, 
  RegisterPlace, 
  AdminPlaces,
  Login
} from './pages/index';;

import './i18n';

function App() {

  return (
    <>
       <Router>
        <Routes>
          <Route index path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/lugares" element={<Places/>} />
          <Route path="/juego" element={<Game/>} />
          <Route path='/lugares/info/:index' element={ <PlaceInfo/> } />
          <Route path='/barcos' element={ <Ships/> } />
          <Route path='/agregar' element={ <RegisterPlace/> } />
          <Route path='/editar' element={ <RegisterPlace/> } />
          <Route path='/admin' element={ <AdminPlaces/> } /> 
          <Route path='/login' element={ <Login/> } />
        </Routes>
      </Router>
    </>
  )
}

export default App
