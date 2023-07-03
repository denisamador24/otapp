// styles componen
import './NewPlace.css';

// react
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// firebase functions
import {
  insertNewPlace,
  updatePlace,
  uploadImage,
  getImageUrl,
  deleteImage
} from '../firebase/firebase.js';

// @mui components
import Button from '@mui/material/Button';

// components
import InputMultiLanguage from '../components/InputMultiLanguage.jsx';
import InputList from '../components/InputList.jsx';
import CardInput from '../components/CardInput.jsx';
import SumitButton from '../components/SumitButton.jsx';

// utils
import Resizer from "react-image-file-resizer";
import { valuesMultiLanguage } from '../utils/initValueMultiLanguage.js';

const NewPlace = () => {
  const [name, setName] = useState('') ;
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [images, setImages] = useState([]);
  const [address, setAddress] = useState(valuesMultiLanguage);
  const [description, setDescription] = useState(valuesMultiLanguage);
  const [know, setKnow] = useState(valuesMultiLanguage);
  
  //const [imagesCloud, setImagesCloud] = useState([]);
  //const [imagesCloudToRemove, setImagesCloudToRemove] = useState([]);
  const [services, setServices] = useState([]);
  const [activities, setActivities] = useState([]);
  const [isAddingPlace, setIsAddingPlace] = useState(false);
  
  const inputImages = useRef(null);
  
  const navigate = useNavigate();
  
  const handleSelectImages = (e) => {
    inputImages.current.click();
  }
  
  
  const handleImageChange = async (e) => {
    const files = e.target.files;
    const filesValue = Object.values(files);
    try {
      const resizedFiles = filesValue.map( (file) => {
        return resizeFile(file);
      });
      const resizedImages = await Promise.all(resizedFiles)
      console.log(resizedImages);
      setImages([...images, ...resizedImages]);
    } catch (e) {
      console.log(e);
    }
  };
  
  const hanldeRemoveImage = (index) => {
    const newImages = images.slice();
    newImages.splice(index, 1);
    setImages(newImages);
  }
  
  const resizeFile = (file) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        1080,
        720,
        "JPEG",
        360,
        360,
        (uri) => {
          resolve(uri);
        },
        "file"
      );
    });
    
const handelAddPlace = async () => {
  console.log('agregando lugar');
  setIsAddingPlace(true);
  let imagesUrl = [];
  
  for (let i = 0; i < images.length; i++){
    const res =  await uploadImage(images[i], name, i);
    const pathImage = res.metadata.fullPath;
    imagesUrl.push(pathImage);
  }
  
  const newPlace = {
    name, 
    phone,
    email,
    description,
    address,
    know,
    services,
    activities,
    images: imagesUrl
  };
  
  console.log(newPlace);
  const resPlace = await insertNewPlace(newPlace);
  console.log(resPlace);
  
  setIsAddingPlace(false);
  if (resPlace) {
    navigate('/admin');
  } else {
    alert("No se pudo agregar el lugar")
  }
  
  setIsAddingPlace(false);
}
    
  return (
    <div className='newplace-container'>
      <h2>Registrar un nuevo lugar</h2>
      <CardInput>
        <p>Nuevas Imagenes</p>
        <div className='selected-images'>
          {images.map((image, index) => (
            <div className='cover-image'>
              <img key={index} src={URL.createObjectURL(image)} alt={`Imagen ${index + 1}`} />
              <Button onClick={() => hanldeRemoveImage(index)}>x</Button>
            </div>
          ))}
        </div>
        <input style={{"display": "none"}} ref={inputImages} onChange={handleImageChange} accept="image/*" multiple type='file'/>
        <Button variant='outlined' onClick={handleSelectImages}>+</Button>
      </CardInput>
      
      <CardInput>
        <p>Nombre del Lugar: </p>
        <input type='name' value={name} onChange={e => setName(e.target.value)}/>
      </CardInput>
      
      <CardInput>
        <p>Telefono: </p>
        <input type='number' value={phone} onChange={e => setPhone(e.target.value)} />
      </CardInput>
      
      <CardInput>
        <p>email: </p>
        <input type='email'  value={email} onChange={e => setEmail(e.target.value)}/>
      </CardInput>
      
      <InputMultiLanguage name="Direccion" values={address} changeValues={setAddress}/>
      
      <InputMultiLanguage name="Descripcion" values={description} changeValues={setDescription} />
      
      <InputMultiLanguage name="Dato Curioso" values={know} changeValues={setKnow} />
      
      <InputList name="Servicios" list={services} setList={setServices} />
      
      <InputList name="Actividades" list={activities} setList={setActivities} />
      
      <div classname='sumit-button'>
        <SumitButton loading={isAddingPlace} onClick={handelAddPlace} >
          {isAddingPlace ? 'Agregando...' : 'Agregar'}
        </SumitButton>
      </div>
 </div>   
  )
}

export default NewPlace;