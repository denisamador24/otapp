import './NewPlace.css';
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  insertNewPlace,
  uploadImage,
  getImageUrl,
  deleteImage
} from '../firebase/firebase.js';
import Button from '@mui/material/Button';
import Resizer from "react-image-file-resizer";
import InputList from '../components/InputList.jsx';
import CardInput from '../components/CardInput.jsx';

const NewPlace = () => {
  const place = JSON.parse(localStorage.getItem('editPlace'));
  console.log(place);
  
  const [name, setName] = useState(place ? place.name : '') ;
  const [phone, setPhone] = useState(place ? place.phone : '');
  const [address, setAddress] = useState(place ? place.address.es : '')  ;
  const [addressEn, setAddressEn] = useState(place ? place.address.en : '') 
  const [description, setDescription] = useState(place ? place.description.es : '');
  const [descriptionEn, setDescriptionEn] = useState(place ? place.description.en : '');
  const [know, setKnow] = useState(place ? place.know.es : '');
  const [knowEn, setKnowEn] = useState(place ? place.know.en : '');
  const [email, setEmail] = useState(place ? place.email : '');
  const [images, setImages] = useState([]);
  const [imagesCloud, setImagesCloud] = useState(place.images);
  const [services, setServices] = useState(place ? place.services.es : []);
  const [servicesEn, setServicesEn] = useState(place ? place.services.en : []);
  const [activities, setActivities] = useState(place ? place.activities.es : []);
  const [activitiesEn, setActivitiesEn] = useState(place ? place.activities.en : []);
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
  
  const handleRemoveImageCloud = async (index) => {
    const isSi = prompt('Se eliminara la image, escribe "SI" para continuar');
    if (isSi.trim().toLowerCase() == 'si') {
      try {
        const res = await deleteImage(imagesCloud[index]);
        if (res) {
          const newImages = imagesCloud.slice();
          newImages.splice(index, 1);
          setImagesCloud(newImages);
        } else {
          alert('no se pudo borrar imagen');
        }
      } catch (e) {
        console.log(e);
      }
    }
    
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
    description: {
      es: description,
      en: descriptionEn
    },
    address: {
      es: address,
      en: addressEn
    },
    know: {
     es: know,
     en: knowEn 
    },
    services: {
      es: services,
      en: servicesEn
    },
    activities: {
      es: activities,
      en: activitiesEn
    },
    images: imagesUrl
  };
  
  let resPlace;
  if (newPlace) {
    resPlace = await updatePlace(place)
  }
  else {
    
    resPlace = await insertNewPlace(newPlace);
  }
  
  setIsAddingPlace(false);
  if (resPlace) {
    navigate('/admin');
  } else {
    alert("No se pudo agregar el lugar")
  }
}
    
  return (
    <div className='newplace-container'>
      <h2>Registrar un nuevo lugar</h2>
      {place && 
        <CardInput>
        <p>Imagenes Guardadas </p>
        <div className='selected-images'>
          {imagesCloud.map((imagePath, index) => (
            <div className='cover-image'>
              <img key={index} src={getImageUrl(index)} alt={`Imagen ${index + 1}`} />
              <Button onClick={() => handleRemoveImageCloud(imagePath)}>x</Button>
            </div>
          ))}
        </div>
        <input style={{"display": "none"}} ref={inputImages} onChange={handleImageChange} accept="image/*" multiple type='file'/>
        <Button variant='outlined' onClick={handleSelectImages}>+</Button>
      </CardInput>
      
      }
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
      <CardInput>
        <p>Direccion: </p>
        <input type='text'  value={address} onChange={e => setAddress(e.target.value)}/>
        <p>Direccion Ingles: </p>
        <input type='text'  value={addressEn} onChange={e => setAddressEn(e.target.value)}/>
      </CardInput>
      <CardInput>
        <p>Description: </p>
        <textarea
          className='big-textarea'
         value={description} onChange={e => setDescription(e.target.value)}>
         
         </textarea>
         <p>Description Ingles: </p> <textarea
            className='big-textarea'
         value = { descriptionEn } onChange = { e => setDescriptionEn(e.target.value) } > </textarea>
      </CardInput>
      
      <CardInput>
        <p>Dato curioso: </p> 
        <textarea
        className='big-textarea'
        value = { know } onChange = { e => setKnow(e.target.value) } > </textarea>
        <p>Dato curioso Ingles: </p> 
        <textarea
        className='big-textarea'
        value = { knowEn } onChange = { e => setKnowEn(e.target.value) } > </textarea>
        
      </CardInput>
      
      <CardInput>
        <p>Lista de Servicios</p>
        <InputList list={services} setList={setServices}/>
        
        <p>Lista de Servicios Ingles</p>
        <InputList list={servicesEn} setList={setServicesEn}/>
      </CardInput>
      
      <CardInput>
        <p>Lista de Actividades</p>
        <InputList list={activities} setList={setActivities}/>
        
        <p>Lista de Actividades Ingles</p>
        <InputList list={activitiesEn} setList={setActivitiesEn}/>
      </CardInput>
      
      { isAddingPlace ? <Button 
          variant='contained'
          onClick={handelAddPlace}
          disabled
          sx={{
            "marginTop": "32px",
            "marginBottom": "68px",
          }}
        >{place ? 'Actualizando...' : 'Agregando...'}</Button>
        : <Button 
            variant='contained'
            onClick={handelAddPlace}
            sx={{
              "marginTop": "32px",
              "marginBottom": "68px",
            }}
          >{place ? 'Actualizar' : 'Agregar'}</Button>
      }
 </div>   
  )
}

export default NewPlace;