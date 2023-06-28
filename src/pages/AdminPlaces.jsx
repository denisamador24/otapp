import './AdminPlaces.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getPlaces } from "../firebase/firebase.js";
import AdminPlaceItem from '../components/AdminPlaceItem.jsx';

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
     const data = await getPlaces();
    console.log(data);
     setPlaces(data);
    }
    getDocs();
  }, [])
  
  if (!places) {
    return <p>Cargando...</p>
  }
  return (
    <div>
      <h2>Lugares Registrados</h2>
      <div className='registedPlaces'>
        <ul>
          {places.map( (place, index) => (
            <li key={index}>
              <AdminPlaceItem place={place}/>
            </li>
          ))
            
          }
        </ul>
      </div>
      
    </div>
  )

  
}

export default AdminPlaces;