import React from 'react'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import './style.css'

function Hero() {
    return (
        <div className="section-content" id="home">
            <Image src="./images/heroBest.png" fluid />
        </div >
    )
}

export default Hero