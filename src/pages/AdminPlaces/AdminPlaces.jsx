import './admin_places.css';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import AddIcon  from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';

import { AdminPlaceItem } from '@components/AdminPlaceItem';

import { getPlaces } from "../../firebase/firebase.js";


const AdminPlaces = () => {
  
  const [places, setPlaces] = useState(null);
  const navigate = useNavigate();
  
  
  useEffect( () => {
    // sino esta login entonces lo redirije a login
    let login = window.localStorage.getItem('login');
    if (login !== "true") {
      navigate('/login');
    }
    
    // si hay login entonces cargan los lugares;
    const getDocs = async () => {
      console.log('iniciando fech');
     const data = await getPlaces();
    console.log(data);
     setPlaces(data);
    }
    getDocs();
    
    window.localStorage.removeItem('editPlace');
  }, []);
  
  const  handleNavigateNewPlace = () => {
    navigate('/agregar');
  }
  if (places == null) {
    return <p>Cargando...</p>
  }
  
  return (
    <div>
      <h2>Lugares Registrados</h2>
      <div className='registedPlaces'>
        {places.length == 0 &&
          <p>No hay lugares</p>
        }
        <ul>
          {places.map( (place, index) => (
            <li key={index}>
              <AdminPlaceItem place={place} setPlaces={setPlaces} />
            </li>
          ))
            
          }
        </ul>
      </div>
      <div className='add-place-button'>
        <Fab color="primary" aria-label="add" onClick={handleNavigateNewPlace}>
          <AddIcon />
        </Fab>
      </div>
    </div>
  )

  
}

export default AdminPlaces;