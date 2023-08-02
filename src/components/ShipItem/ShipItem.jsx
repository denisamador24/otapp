import './ship_item.css'

const ShipItem = ({ name, schedule, searchedHour }) => {
  const places = Object.keys(schedule)

  return (
    <article className='ship-item'>
      <p className='ship-item__name'>{name}</p>
      <div className='ship-item__schedule'>
        <ScheduleRoute place={places[0]} schedule={schedule} searchedHour={searchedHour} />
        <ScheduleRoute place={places[1]} schedule={schedule} searchedHour={searchedHour}/>
      </div>
    </article>
  )
}

function ScheduleRoute({ place, schedule, searchedHour }) {
  const hourList = schedule[place]

  return (
    <div className='ship-item__schedule_route'>
      <p>{place}</p>
      <ul>
        {hourList.map((hour, index) => (
          <li 
            key={index}
            className={searchedHour == hour ? 'focus' : ''}
          >{hour}</li>
        ))}
      </ul>
    </div>
  )
}

export default ShipItem