import heroBg from '@assets/hero-background.jpg'
import heroOtherBg from '@assets/hero-annonce-background.jpg'
import heroAboutBg from '@assets/hero-about-background.jpg'

import './Hero.css'

const HeroBanner = (props) => {

  const {layout, details = null} = props

  
  // Display Background Switching Pages Loaded
  let ArrayAsset = [heroBg,heroOtherBg,heroAboutBg];

  let currentBg;

  switch(layout) {
    case 'home':
      currentBg = heroBg
      break;
      case 'annonce':
      currentBg = details ? details.cover : heroBg
      break;
    case 'about': 
      currentBg = heroAboutBg
      break;
      case 'surprise': 
      currentBg = heroOtherBg
      break;
    default:
      currentBg = heroBg
  }

  return (

    <div className={`hero banner-${layout}`} style={layout === 'annonce' || layout === 'about' ? {backgroundImage:`url(${currentBg})`} :
    {backgroundImage:`linear-gradient(to right, rgba(0, 0, 0, var(--op)) 0%, rgba(0, 0, 0, var(--op)) 100%),url(${currentBg})`}}>

      {layout === 'home' ? <h1 className="title" data-page={layout}>Chez vous, partout & ailleurs</h1> : null }

    </div>

  )
}

export default HeroBanner