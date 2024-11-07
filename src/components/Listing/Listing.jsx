import { useEffect } from 'react';
import {useOutletContext} from 'react-router-dom'


import Card from '@components/Card/Card';

import './Listing.css'

const Listing = () => {

  const {logements,bookings, setBookings,isBooked, setIsBooked} = useOutletContext();
  

  useEffect(() => {



  },[bookings])
  

  return (
  <>
  <section className="listing-section">

  <h3 className="main-title"><span className='free-spaces'>{ `${bookings}`}</span> logements encore disponibles ({logements.length})</h3>

    <div className="listing-container">

    { logements.map((logement,index) => {
        return (
          <Card key={`${logement.id}-${index}`} logement={logement} bookings={bookings} setBookings={setBookings} isBooked={isBooked} setIsBooked={setIsBooked} />)  
      })
    }
    </div>

  </section>
  </>
    
  )
}

export default Listing