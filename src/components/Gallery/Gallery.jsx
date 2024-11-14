import { useState,useEffect,useRef } from 'react';

import Fade from '@components/utils/fade.jsx';
import '@components/Hero/Hero.css';
import '@components/Gallery/Gallery.css';

const Gallery = (props) => {

  const {layout, details = null} = props

  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [isVisible, setVisible] = useState(true);

  const imageRef = useRef(null);

  let pictures = details?.pictures || [];


  function goAhead() {

    if (currentImgIndex === pictures.length - 1) {

      setCurrentImgIndex(0)

    } else {

      setCurrentImgIndex(currentImgIndex + 1)
    }


    setVisible(isVisible => !isVisible)
  }

  function goBack() {

    if (currentImgIndex <= 0 ) {

      setCurrentImgIndex(pictures.length - 1)

    } else {

      setCurrentImgIndex(currentImgIndex - 1)
    }


    setVisible(isVisible => !isVisible)
  }


  useEffect(() => { 

    //  imageRef.current.classList.toggle('pschit');

  },[currentImgIndex])
  


return (

  <section className="gallery">
  
    <div className="nav-pictures">
      <span className="nav-icon left" onClick={() => goBack()}>Left</span>
      <span className="nav-icon right" onClick={() => goAhead()}>Right</span>
    </div>
    
    <Fade isVisible={isVisible}>

      <img key={`picture-${currentImgIndex}`} src={pictures[currentImgIndex]} className={`picture`} data-index={currentImgIndex} alt={`photo de l'annonce - ${details.title}`} /> 

    </Fade>
      
    <div className="nav-counter"> <span className="counter">{currentImgIndex}</span>/{pictures.length - 1}</div>

  </section>

)

}
export default Gallery