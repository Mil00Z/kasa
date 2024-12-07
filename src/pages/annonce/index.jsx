
import {useParams,useOutletContext, Link} from 'react-router-dom'

import HeroBanner from "@components/Hero/Hero"
import Gallery from "@components/Gallery/Gallery"
import Product from "@components/Product/Product"

import '@styles/pages/Annonce.scss'


const Annonce = () => {

  const {logements, bookings, setBookings,isBooked,setIsBooked} = useOutletContext();

  let getParams = useParams();

  //Testing Injection on ONE logement
  // let details = logements[2];

  //Get ALl datas and dispatch good url Product
  let details = logements.find((logement)=> {

    return logement.id === getParams.id

  })
  
  let annoncePanel = true ;

  return (

    details ? 
    (<>
      <Gallery layout={'annonce'} details={details} />
      <section className="logement-details">
          <Product details={details} annoncePanel={annoncePanel} bookings={bookings} setBookings={setBookings} isBooked={isBooked} setIsBooked={setIsBooked} />
      </section>
    </>
  ) : (
  <> 
    <HeroBanner layout={'annonce'}/>
    <div className="logement-not-found">
      <h1 className="title">Ce logement n'existe <span className="link-special">pas encore !</span></h1>
      <p className="description"><Link to="/about">Contactes-nous </Link>pour ajouter ton logement dans notre liste 💥</p>
    </div>
    </>
    )

  )
}

export default Annonce