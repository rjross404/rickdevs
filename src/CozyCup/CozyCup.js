import React, { Component } from 'react'
import {Container, Row, Col, Image } from 'react-bootstrap'
import NavbarCC from './NavbarCC'
import Footer from './Footer'
import coffeePhoto from './images/bruno-emmanuelle-YH7mGnigHRs-unsplash.jpg'
import './css/styles.css'

export default class CozyCup extends Component {
    render() {
        return (
            <div className='CozyCup'>
                <NavbarCC />

                <Image fluid src={coffeePhoto} alt="" id="backdrop" />
                <Container className="text-center bigger" id="statement">
                    <p>At the <strong>Cozy Cup</strong>, we believe in serving every customer with not just the best coffee, but the best atmosphere as well. Our customers can enjoy our beachside views overlooking the beautiful Miami waters. Those preferring a more secluded environment find our backroom library the perfect location to work with their laptops or read from our extensive collection. If you're on the go, all items on our menu can be prepared for pickup. When you come to the <strong>Cozy Cup</strong>, you're not just a customer, you're family.</p>
                </Container>

                <Container id="info">
                    <Row className="text-center justify-content-around line">
                        <Col md='6' className="item1">
                            <h3><strong>Location</strong></h3>
                            <p className="pt-3">842 Ocean Drive</p>
                            <p>Miami Beach, FL 33139</p>
                        </Col>
                        <Col md='6' className="item1">
                            <h3><strong>Hours</strong></h3>
                            <p className="pt-3">Sunday - Thursday: 6am to 10pm</p>
                            <p>Friday - Saturday: 6am to midnight</p>
                        </Col>
                    </Row>
                </Container>

                <Footer />
            </div>
        )
    }
}
