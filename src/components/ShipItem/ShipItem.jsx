import React from 'react'

const ShipItem = ({ name, schedule }) => {
  const places = Object.keys(schedule)

  return (
    <article className='ship-item'>
      <h5>{name}</h5>
      <div className='ship-item__schedule'>
        <ScheduleRoute place={places[0]} schedule={schedule} />
        <ScheduleRoute place={places[1]} schedule={schedule} />
      </div>
    </article>
  )
}

function ScheduleRoute({ place, schedule }) {
  const hourList = schedule[place]

  return (
    <div className='ship-item__schedule_route'>
      <p>{place}</p>
      <ul>
        {hourList.map((hour, index) => (
          <li key={index}>{hour}</li>
        ))}
      </ul>
    </div>
  )
}

export default ShipItem