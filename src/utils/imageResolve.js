const pathImages = '/src/images/';

const resolveImg = (nameImage) => {
  if (nameImage !== undefined && nameImage !== '') {
    return (pathImages + nameImage + '.jpg');
  } else {
    return 'https://www.mountaineers.org/activities/routes-and-places/default-route-place/activities-and-routes-places-default-image/@@images/image.jpeg'
  }
}

export default resolveImg;