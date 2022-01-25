import Navigation from '../../Components/Navigation'
import Hero from '../../Components/Hero'
import { ContactCTA } from '../../Components/Contact'
import About from '../../Components/About'
import { VideoSection } from '../../Components/Video'
import Services from '../../Components/Services'
import Team from '../../Components/Team'
import Footer from '../../Components/Footer'

import './style.css'

function Landing() {
    return (
        <div className="pageView">
            <Navigation />
            <Hero />
            <About />
            <div className="text-center"><ContactCTA /></div>
            <VideoSection />
            <Services />
            <div className="text-center"><ContactCTA /></div>
            <Team />
            <Footer />
        </div>
    )
}

export default Landing