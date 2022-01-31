import React from "react"
import Image from 'react-bootstrap/Image'

import img from '../../assets/images/comingsoon.png'
import './style.css'

function ComingSoon() {
    return (
        <div className="comingSoon">
            <Image src={img} fluid />
        </div>

    )
}

export default ComingSoon