import HeroBanner from "@components/Hero/Hero";
import Us from "@components/Us/Us";

import "@pages/about/About.css"

const About = () => {


return(
  <>
    <HeroBanner layout={'about'}/>
    <Us/> 
  </>
)

}

export default About