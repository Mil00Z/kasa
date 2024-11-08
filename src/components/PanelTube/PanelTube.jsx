import './PanelTube.css'

const PanelTube = (props) => {

const {details,softkill,fullPanel} = props

// console.log(fullPanel);

  return (
    fullPanel ? (
    <>
      <div className='product-panel tube'>
        <h3 className='title'>Description <i class="fa-solid fa-angle-up"></i></h3>
        <p className='panel-container'>
          {details.description}
        </p>
      </div>
      <div className="product-panel tube" >
          <h3 className='title'>Equipements <i className="fa-solid fa-angle-up"></i></h3>
          <ul className='panel-container'>
          {details.equipments.map((equipement,index)=>{

              return (<li key={`${equipement}-${index}`}>{equipement}</li>)
              }) 

            }
          </ul>
      </div>
    </>) : (<div className='soft-skill tube'>
          <h3 className='title' data-ui="no description">{softkill} <i class="fa-solid fa-angle-up"></i></h3>
        </div>)
  )
}
export default PanelTube