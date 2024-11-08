import './Navigation.css'
import {NavLink} from 'react-router-dom'

const Navigation = () => {
  return (
    <nav className="main-nav">
        <NavLink to="/" className='link nav-link'>Accueil</NavLink>
        <NavLink to="/annonce" className='link nav-link' >Single Annonce WIP</NavLink>
        <NavLink to="/about" className='link nav-link'>A propos</NavLink>
        {/* <NavLink to="/benji" className='link nav-link'>Surprise</NavLink> */}
    </nav>
  )
} 

export default Navigation