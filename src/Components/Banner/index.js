import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { ContactCTA } from '../Contact'

import './style.css'

function Banner(props) {
    return (
        <Container className="banner">
            <Row xs={1} sm={2}>
                <Col className="my-auto textContainerBanner">
                    <Container>
                        <h1 >{props.data.header}</h1>
                        <h4>{props.data.text}</h4>
                        <ContactCTA />
                    </Container>

                </Col>
                <Col className="image-container">
                    <Image src={props.data.image} fluid />
                </Col>
            </Row>
        </Container>
    )
}

export default Banner