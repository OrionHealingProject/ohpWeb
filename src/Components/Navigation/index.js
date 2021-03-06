import React, { useState, useEffect } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Image from 'react-bootstrap/Image'

import './style.css'

function Navigation() {
    /*
     * transparent to colored nav background state
     */
    const [transparentBg, setTransparentBg] = useState(false)
    // useEffect(() => {
    //     window.onscroll = () => {
    //         if (window.pageYOffset > 350) {
    //             setTransparentBg(false)
    //         } else {
    //             setTransparentBg(true)
    //         }
    //     }
    // }, []);

    return (
        <Navbar className={` ${transparentBg ? "navBackgroundTransparent" : "navBackgroundColor"}`} variant="dark" expand="md" sticky="top">
            <Navbar.Brand href="/">{transparentBg ? <></> : <Image src="../images/logoColor.png" height={50} />}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                <Nav>
                    <Nav.Link href="/#about">About</Nav.Link>
                    <Nav.Link href="/#services">Services</Nav.Link>
                    <Nav.Link href="/#team">Team</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>

                </Nav>
            </Navbar.Collapse>
        </Navbar>

    )
}

export default Navigation