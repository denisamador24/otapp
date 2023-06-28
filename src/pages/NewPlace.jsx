import './NewPlace.css';
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  insertNewPlace,
  updatePlace,
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
  const [imagesCloud, setImagesCloud] = useState([]);
  const [imagesCloudToRemove, setImagesCloudToRemove] = useState([]);
  const [services, setServices] = useState(place ? place.services.es : []);
  const [servicesEn, setServicesEn] = useState(place ? place.services.en : []);
  const [activities, setActivities] = useState(place ? place.activities.es : []);
  const [activitiesEn, setActivitiesEn] = useState(place ? place.activities.en : []);
  const [isAddingPlace, setIsAddingPlace] = useState(false);
  
  const inputImages = useRef(null);
  
  const navigate = useNavigate();
  
  useEffect( () => {
    const getImagesUrl = async () => {
      let listUrl = [];
     
      for (let i = 0; i < place.images.length; i++){
        const urlImage = await getImageUrl(place.images[i]);
        listUrl.push(urlImage);
      }
      
        setImagesCloud(listUrl);
    }
    
    if (place)
      getImagesUrl();
  }, [])
  
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
    
    setImagesCloudToRemove([...imagesCloudToRemove, place.images[index]])
    console.log('imagenes a remover', imagesCloudToRemove);
    const newImagesCloud = imagesCloud.slice();
    newImagesCloud.splice(index, 1);
    setImagesCloud(newImagesCloud)
    /*
    const isSi = prompt('Se eliminara la image, escribe "SI" para continuar');
    if (isSi.trim().toLowerCase() == 'si') {
      try {
        const res = await deleteImage(place.images[index]);
        if (res) {
          const newImages = imagesCloud.slice();
          newImages.splice(index, 1);
          console.log(newImages);
          
          setImagesCloud(newImages);
        } else {
          alert('no se pudo borrar imagen');
        }
      } catch (e) {
        console.log(e);
      }
    }
    */
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
  
  const resPlace = await insertNewPlace(newPlace);
  console.log(resPlace);
  
  setIsAddingPlace(false);
  if (resPlace) {
    navigate('/admin');
  } else {
    alert("No se pudo agregar el lugar")
  }
}

  const handelUpdatePlace = async () =>   {
    setIsAddingPlace(true);
    
    try {
      //remover imagenes
      for (let i = 0; i < imagesCloudToRemove.length; i++) {
       const res = await deleteImage(imagesCloudToRemove[i]);
       //const newImagesPlace = place.images;
       //newImagesPlace.splice(i, 1);
       const newImagesPlace = place.images.filter( (it) => it != imagesCloudToRemove[i])
       place.images = newImagesPlace;
      }    
       let imagesUrl = [];   
       //subir imagenes
       for (let i = 0; i < images.length; i++) {
         const res = await uploadImage(images[i], name, i);
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
         images: [...place.images, ...imagesUrl]
       };
      
      console.log('lugar a actulizar', newPlace);
      console.log('imagenes a remover', imagesCloudToRemove);
      await updatePlace(newPlace, place.id);
      window.localStorage.removeItem('editPlace');
      navigate('/admin');
    } catch (e) {
      console.log(e);
      alert('no se pudo actulizar');
    }
    setIsAddingPlace(false);
  }
  
  let sumitButton;
  if (!place) {
    if (isAddingPlace) {
      sumitButton = (
        <Button 
          variant='contained'
          onClick={handelAddPlace}
          sx={{
            "marginTop": "32px",
            "marginBottom": "68px",
          }}
          disabled
        >Agregando...</Button>
      )
    } else {
      sumitButton = (
        <Button 
          variant='contained'
          onClick={handelAddPlace}
          sx={{
            "marginTop": "32px",
            "marginBottom": "68px",
          }}
          
        >Agregar</Button>
      )
    }
  } else {
    if (isAddingPlace) {
      sumitButton = (
        <Button 
          variant='contained'
          onClick={handelUpdatePlace}
          sx={{
            "marginTop": "32px",
            "marginBottom": "68px",
          }}
          disabled
        >Actualizando...</Button>
      )
    } else {
      sumitButton = (
        <Button 
          variant='contained'
          onClick={handelUpdatePlace}
          sx={{
            "marginTop": "32px",
            "marginBottom": "68px",
          }}
          
        >Actualizar</Button>
      )
    }
  }
    
  return (
    <div className='newplace-container'>
      <h2>Registrar un nuevo lugar</h2>
      {imagesCloud.length > 0 && 
        <CardInput>
        <p>Imagenes Guardadas </p>
        <div className='selected-images'>
          {imagesCloud.map((imageUrl, index) => (
            <div className='cover-image'>
              <img key={index} src={imageUrl} alt={`Imagen ${index + 1}`} />
              <Button onClick={() => handleRemoveImageCloud(index)}>x</Button>
            </div>
          ))}
        </div>
        
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
      {sumitButton}
 </div>   
  )
}

export default NewPlace;