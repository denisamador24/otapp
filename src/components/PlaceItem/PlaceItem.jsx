import './place_item.css'

const PlaceItem = ({ image, name, description }) => {
  
  return (
    <article className='place-card'>
      <figure>
        <img src={image} alt={name} />
      </figure>
      <p className='place-card__title'>{name}</p>
      <p>{description.slice(0, 200) + '...'}</p>
    </article>
  )
}

export default PlaceItem