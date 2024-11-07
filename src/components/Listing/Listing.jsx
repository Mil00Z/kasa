import datas from '@data/logements.json'
import Card from '../Card/Card';

import './Listing.css'

const Listing = () => {
  
  let logements = [...datas];

  let freeSpaces = 15;


  return (
  <>
  <section className="listing-section">

  <h3 className="main-title"><span className='free-spaces'>{ `${freeSpaces}`}</span> logements encore disponibles ({logements.length})</h3>

    <div className="listing-container">

    { logements.map((logement,index) => {
        return (
          <Card key={`${logement.id}-${index}`} logement={logement} />)  
      })
    }
    </div>

  </section>
  </>
    
  )
}

export default Listing