import React from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';

import img from '../../assets/images/404.png'
import './style.css'

function NotFound() {
    return (
        <Container fluid className="notFound">
            <Row>
                <Col className="text-center">
                    <Image src={img} fluid />
                </Col>
            </Row>
            <Row>
                <Col className="text-center">
                    <Link to="/">
                        <Button variant="warning">return</Button>
                    </Link>
                </Col>
            </Row >
        </Container>

    )
}

export default NotFound