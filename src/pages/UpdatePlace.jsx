import { useState } from 'react';

const UpddatePlace = () => {
  const place = JSON.parse(localStorage.getItem('editPlace'));
  
  useEffect(() => {
    const getImagesUrl = async () => {
      let listUrl = [];
  
      for (let i = 0; i < place.images.length; i++) {
        const urlImage = await getImageUrl(place.images[i]);
        listUrl.push(urlImage);
      }
  
      setImagesCloud(listUrl);
    }
  
    if (place)
      getImagesUrl();
  }, []);
  
  const handleRemoveImageCloud = async (index) => {
  
    setImagesCloudToRemove([...imagesCloudToRemove, place.images[index]])
    console.log('imagenes a remover', imagesCloudToRemove);
    const newImagesCloud = imagesCloud.slice();
    newImagesCloud.splice(index, 1);
    setImagesCloud(newImagesCloud)
  }
  
  const handelUpdatePlace = async () => {
    setIsAddingPlace(true);
  
    try {
      //remover imagenes
      for (let i = 0; i < imagesCloudToRemove.length; i++) {
        const res = await deleteImage(imagesCloudToRemove[i]);
        //const newImagesPlace = place.images;
        //newImagesPlace.splice(i, 1);
        const newImagesPlace = place.images.filter((it) => it != imagesCloudToRemove[i])
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
  
  return (
    <>
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
    </>
  );
}

export default UpddatePlace;