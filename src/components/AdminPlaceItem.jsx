import './AdminPlaceItem.css';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete'
import EditNoteIcon from '@mui/icons-material/EditNote';
import { Link, useNavigate } from 'react-router-dom';

const AdminPlaceItem = ({ place }) => {
  const navigate = useNavigate();
  const handleEditPlace = async () => {
    localStorage.setItem('editPlace', JSON.stringify(place));
    navigate('/editar');
  }

  const handleDeletePlace = async () => {
    const isSi = prompt("Si estas seguro de borrar el lugar escribe SI");

    if (isSi.trim().toLowerCase() === 'si') {
      alert("se Borro!. de mentira");
    }
  }
  return (
    <div className='place-item'>
          <p>{place.name}</p>
          <div className='place-item__icons'>
            <div>
              <IconButton onClick={handleEditPlace}>
                <EditNoteIcon/>
              </IconButton>
            </div>
            <div>
              <IconButton aria-label="delete"
                onClick={handleDeletePlace}
              >
                <DeleteIcon />
              </IconButton>
            </div>
          </div>
      </div>
  )
}

export default AdminPlaceItem;