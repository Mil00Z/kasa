import HeroBanner from '@components/Hero/Hero.jsx'
import Listing from '@components/Listing/Listing.jsx'


import '@pages/home/Home.css'


function Home() {

  
  return (
    <>
      <HeroBanner layout={'home'}  />
      <Listing />
    </>
  )
}

export default Home
