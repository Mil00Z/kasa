
import {Link} from 'react-router-dom'
import './Card.css'


const Card = (props) => {  

  const {logement,bookings,setBookings,isBooked, setIsBooked} = props

  return (
        
<<<<<<< HEAD
    <Link to={`/annonce/${logement.id}`}className={`card `} style={{background:`url(${logement.cover}),linear-gradient(to bottom, #FFF 0%, #FFF 42%, #0A0A0A 100%)`}}><h2 className="card-title">{logement.title}</h2>
    <p className="card-description">{logement.description}</p></Link>
    
=======
    <Link to={`/annonce/${logement.id}`} className={`card ${isBooked && 'booked'}`} style={{background:`url(${logement.cover}),linear-gradient(to bottom, #FFF 0%, #FFF 42%, #0A0A0A 100%)`}}><h2 className="card-title">{logement.title}</h2>
    <p className="card-description">{logement.description}</p></Link>
  
  
>>>>>>> 5fc46af01f54f223c8dbf397d29191b8042b42b2
  )

}

export default Card