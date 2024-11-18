import {NavLink} from 'react-router-dom'
import '@styles/components/Navigation.scss'

const Navigation = () => {
  return (
    <nav className="main-nav">
        <NavLink to="/" className='link nav-link'>Accueil</NavLink>
        <NavLink to="/about" className='link nav-link'>A propos</NavLink>
    </nav>
  )
} 

export default Navigation