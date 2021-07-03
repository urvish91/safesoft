import { useState, useEffect } from 'react'
import { Navigation } from './components/navigation'
import { Header } from './components/header'
import { Features } from './components/features'
import { About } from './components/about'
import { Services } from './components/services'
import { Gallery } from './components/gallery'
import { Testimonials } from './components/testimonials'
import { Team } from './components/Team'
import { Contact } from './components/contact'
import JsonData from './data/data.json'
import SmoothScroll from 'smooth-scroll'

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})

const App = () => {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <About data={landingPageData.Fintech} id="fintech" left={true}/>
      <About data={landingPageData.Regtech} id="regtech" left={false}/>
      <About data={landingPageData.Vecx} id="vecx" left={true}/>
      <About data={landingPageData.Pgos} id="pgos" left={false}/>
      <About data={landingPageData.Pgrm} id="pgrm" left={true}/>
      <About data={landingPageData.Pgsm} id="pgsm" left={false}/>
      <About data={landingPageData.About} id="aboutus" left={true}/>
      <About data={landingPageData.About} id="aboutus" left={true}/>
      <Contact data={landingPageData.Contact} />
    </div>
  )
}

export default App
