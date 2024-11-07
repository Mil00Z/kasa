import HeroBanner from "@components/Hero/Hero"
import Form from "@components/Form/Form"
import Us from "@components/Us/Us"

import "@pages/about/about.css"

const About = () => {


return(
  <>
    <HeroBanner layout={'about'}/>
    <Us/> 
  </>
)

}

export default About