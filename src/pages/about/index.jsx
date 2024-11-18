import HeroBanner from "@components/Hero/Hero";
import Us from "@components/Us/Us";

import "@styles/pages/About.scss"

const About = () => {

return(
  <>
    <HeroBanner layout={'about'}/>
    <Us/> 
  </>
)

}

export default About