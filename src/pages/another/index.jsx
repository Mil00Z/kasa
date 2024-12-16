import {Link} from 'react-router-dom'

import HeroBanner from "@components/Hero/Hero"


const InreachableProduct = () => {  

  return(

    <> 
      <HeroBanner layout={'annonce'}/>
      <div className="logement-not-found">
          <h1 className="title">Ce logement n'existe <span className="link-special">pas encore !</span></h1>
          <p className="description"><Link to="/about">Contactes-nous </Link>pour ajouter ton logement dans notre liste 💥</p>
      </div>
    </>
  )
}
export default InreachableProduct