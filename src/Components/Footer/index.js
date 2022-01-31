import React from 'react'
import { FaHandHoldingHeart } from 'react-icons/fa';

import { ContactSocialIcons } from '../Contact';
import './style.css'

function Footer() {
    return (
        <div className="footer" fixed="bottom">
            {/* <hr className="separator"></hr> */}
            <ContactSocialIcons />
            made with <FaHandHoldingHeart color="D5BB69" /> by <a className="devLink" href="https://lexi.scalesdev.com" target="_blank" rel="noopener noreferrer">lexi scales</a><br />
            © {new Date().getFullYear()}
        </div>
    )
}

export default Footer