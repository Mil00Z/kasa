
import {Link} from 'react-router-dom'
import './Card.css'


const Card = (props) => {  

  const {logement,bookings,setBookings,isBooked, setIsBooked} = props

  return (
        
    <Link to={`/annonce/${logement.id}`} className={`card ${isBooked && 'booked'}`} style={{background:`url(${logement.cover}),linear-gradient(to bottom, #FFF 0%, #FFF 42%, #0A0A0A 100%)`}}><h2 className="card-title">{logement.title}</h2>
    <p className="card-description">{logement.description}</p></Link>
  
  
  )

}

export default Card