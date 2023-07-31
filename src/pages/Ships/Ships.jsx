import dataShips from '@data/dataShips.js';
import { SearchBar, ShipItem } from '@components';
import { useState } from 'react';

const Ships = () => {
  const [searchHour, setSearchHour] = useState('');

  // options for search bar to find hours to leave
  const hoursToLeave = dataShips.map(ship => {
    // get hour to leave in all of schedule ships
    // [[...],[...]] -> [...]
    return Object.values(ship.schedule).flat(2)
  }).flat(2) // [[...],[...]] -> [...]


  // filter the repeated hours of the schedule ships
  const filteredHours = new Set(hoursToLeave).forEach()
  const optionsSearchBar = hoursToLeave.filter((hour, index, array) => {
    return (array.indexOf(hour) === index)
  })

  // filter ships by schedule when search bar is searching
  const filterDataShips = dataShips.filter((ship) => {
    const hoursToLeave = Object.values(ship.schedule).flat(2)
    return (JSON.stringify(hoursToLeave).includes(searchHour))
  });

  let shipList;
  if (searchHour === '' || searchHour === null) {
    shipList = dataShips;
  } else {
    shipList = filterDataShips;
  }

  return (
    <section className='ships-page'>
      <div className="ships-page__search-container">
        <p>Busca tu hora de salida:</p>
        <SearchBar
          value={searchHour}
          onChange={(event, value) => setSearchHour(value)}
          options={optionsSearchBar}
        />
      </div>
      <div className='ships-page__ships-container'>
        <ul>
          {shipList.map((ship, index) => (
            <li key={index} className="card">
              <ShipItem 
                name={ship.name}
                schedule={ship.schedule}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Ships;