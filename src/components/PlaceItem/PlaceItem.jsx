import './place_item.css'

const PlaceItem = ({ image, name, description }) => {
  
  return (
    <article className='place-card'>
      <figure>
        <img src={image} alt={name} />
      </figure>
      <h5>{name}</h5>
      <p>{description.slice(0, 200) + '...'}</p>
    </article>
  )
}

export default PlaceItem