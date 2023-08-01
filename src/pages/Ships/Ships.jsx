import './ships.css'

import dataShips from '@data/dataShips.js';
import { SearchBar, ShipItem, Header, Footer } from '@components';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Ships = () => {
  const [searchHour, setSearchHour] = useState('');
  const { t } = useTranslation()

  // options for search bar to find hours to leave
  const hoursToLeave = dataShips.map(ship => {
    // get hour to leave in all of schedule ships
    // [[...],[...]] -> [...]
    return Object.values(ship.schedule).flat(2)
  }).flat(2) // [[...],[...]] -> [...]

  // filter the repeated hours of the schedule ships
  const optionsSearchBar = []
  hoursToLeave.forEach(hour => {
    if (!optionsSearchBar.includes(hour)) {
      optionsSearchBar.push(hour)
    }
  })

  // filter ships by schedule when search bar is searching
  const filterDataShips = dataShips.filter((ship) => {
    const hoursToLeave = Object.values(ship.schedule).flat(2)
    return (hoursToLeave.includes(searchHour))
  });

  let shipList;
  if (searchHour === '' || searchHour === null) {
    shipList = dataShips;
  } else {
    shipList = filterDataShips;
  }

  return (
    <section className='ships-page'>
      <Header title={t('ship')} />
      <main className='margin-section'>
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
                  searchedHour={searchHour}
                />
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </section>
  );
}

export default Ships;