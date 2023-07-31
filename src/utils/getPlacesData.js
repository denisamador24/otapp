import placesMultiLanguage from '@data/places.js'
import { useTranslation } from 'react-i18next'

// get one or list of places with the language of the context
export default function getPlaces(index) {
  const { i18n } = useTranslation()
  const language = i18n.language
  const lengthPlaces = placesMultiLanguage.length

  // if only need one place, return one
  if (index !== undefined) {
    if (index >= lengthPlaces || index < 0) {
      throw new Error('Index to find a place is out of the range')
    } else {
      const foundPlace = placesMultiLanguage[index]
      return formatedPlace(foundPlace)
    }
  }

  // return all of the places
  const places = []
  for (let place of placesMultiLanguage) {
    const currentPlace = formatedPlace(place)
    places.push(currentPlace)
  }
  return places

  function formatedPlace(place) {

    const imagesWithUrl = place.images.map(image => '/images/' + image + '.jpg')
    return {
      ...place,
      images: imagesWithUrl,
      description: place.description[language],
      address: place.address[language],
      services: place.services[language],
      activities: place.activities[language],
      know: place.know[language]
    }
  }
}