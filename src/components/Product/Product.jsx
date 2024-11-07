
import PanelTube from '../PanelTube/PanelTube';
import './Product.css'


const Product = (props) => {

  const {details,fullPanel,bookings,setBookings,isBooked,setIsBooked} = props

  function updateBooking() {

    setIsBooked(true);
    setBookings(bookings - 1);

  }

  function scrollHeight(e) {

    if (e.target.classList.contains('panel-container')) {

      let dynamicHeight = e.target.scrollHeight;

      e.target.closest('.product-panel').style.setProperty('height',`${dynamicHeight}px`);
    }

  }

  return (

    <article className='logement'>

      <div className='side-left'>

        <h3 className='product-name'>{details.title} {isBooked ? (<span className='is-booked'>{' - réservé !'}</span>) : ''} </h3>
        <a href={`https://www.google.fr/maps/place/${details.location}`} className='product-location'>{details.location}</a>

        <div className='product-tags'>
          {details.tags.map((tag,index) =>{
            return (
              <span key={`${tag}-${index}`} className='tag'>{tag}</span>
            )
          })}
        </div>

      </div>
      <div className='side-right'>
        <p className='product-owner'>{details.host.name}<img src={details.host.picture} alt={details.host.name} className='thumbnail'/></p>
        {details.rating ? (<span className="star">Note : {`${details.rating} / 5`}</span>):'aucunes notes'}
      </div>
      
      <div className='side-bottom'>
        <PanelTube details={details} fullPanel={fullPanel}/>
      </div>

          <div className="extra-specs">
          <button className='btn btn-cta' onClick={() => updateBooking()}> Je réserve !</button>
          </div>
    </article>
  
  )
}

export default Product