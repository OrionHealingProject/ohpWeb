import Navigation from '../../Components/Navigation'
import Banner from '../../Components/Banner'
import CardGrid from '../../Components/CardGrid'
import { ContactCTA } from '../../Components/Contact'
import Footer from '../../Components/Footer'

import './style.css'

function Portfolio() {
    const bannerObject =
    {
        header: "dev portfolio",
        text: "i like making things",
        image: "./images/about.jpg",
        cta: true
    }
    const portfolioObject = [
        {
            title: "Noio Pathways",
            image: "./images/about.jpg",
            text: "Consultant Website",
            linkPath: "https://www.noiopathways.com",
            gallery: true
        },
        {
            title: "Darbe",
            image: "./images/about.jpg",
            text: "Social Media Startup",
            linkPath: "https://www.darbe.com",
            gallery: true

        },

    ]
    return (
        <div className="portfolioPage">
            <Navigation />
            <Banner data={bannerObject} />
            <div className="portfolioFolders section-container"><CardGrid data={portfolioObject} /></div>
            <div className="text-center"><ContactCTA /></div>
            <Footer />
        </div>
    )
}

export default Portfolio