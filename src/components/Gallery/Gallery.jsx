import { useState,useEffect, useRef } from 'react';
import '@components/Hero/Hero.css';
import '@components/Gallery/Gallery.css';

const Gallery = (props) => {

  const {layout, details = null} = props

  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const imageRef = useRef(null);

  let pictures = details?.pictures || [];


  function goAhead() {

    if (currentImgIndex === pictures.length - 1) {

      setCurrentImgIndex(0)

    } else {

      setCurrentImgIndex(currentImgIndex + 1)
    }

    console.log(currentImgIndex,pictures.length);


  }

  function goBack() {

    if (currentImgIndex <= 0 ) {

      setCurrentImgIndex(pictures.length - 1)

    } else {

      setCurrentImgIndex(currentImgIndex - 1)
    }

  }


  useEffect(() => { 

    //  imageRef.current.classList.toggle('pschit');

  },[currentImgIndex])
  


return (
<>
  <section className="gallery">

    <div className="nav-pictures">
      <span className="nav-icon left" onClick={() => goBack()}>Left</span>
      <span className="nav-icon right" onClick={() => goAhead()}>Right</span>
    </div>
    
    <img key={`picture-${currentImgIndex}`} src={pictures[currentImgIndex]} className={`picture`} data-index={currentImgIndex} alt={`photo de l'annonce - ${details.title}`} ref={imageRef} />

    <div className="nav-counter"> <span className="counter">{currentImgIndex}</span>/{pictures.length - 1}</div>
  </section>
 

</>
     

)


}
export default Gallery