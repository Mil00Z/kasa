import {Outlet,useLocation} from 'react-router-dom'
import { useEffect,useState } from 'react';
import logements from '@data/logements.json';
import Header from "@components/Header/Header"
import Footer from "@components/Footer/Footer"

import '@root/styles.css'

const Root = () => {

  const [bookings, setBookings] = useState(logements.length);

  const [isBooked, setIsBooked] = useState(false);
  

  let location = useLocation();
  
  if(location.pathname.length <= 1) {

      location.pathname = '/home';

  }
  
  let currentLocation = location.pathname.replace('/','');
  
  useEffect(() => {

    let target = document.body

    target.classList.remove(...target.classList)
    
    target.classList.add(currentLocation);

  },[currentLocation]);


  useEffect(() => {

    if(bookings !== logements.length) {

      document.title = `Un nouveau logement a été réservé ! ${bookings} restants`;
    } else if (bookings === 0) {
       document.title = `Aucuns logements disponibles !`;
    }

  },[bookings]);

  

  return (
  <>
   <Header />
    <main className="content-first skeleton">
      <Outlet context={{logements,bookings,setBookings,isBooked,setIsBooked}} />
    </main>
    <Footer />
  </>  )
}

export default Root