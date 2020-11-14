import React, { Component } from 'react'
import {Container, Row, Col, Form, Button } from 'react-bootstrap'
import NavbarCC from './NavbarCC'
import Footer from './Footer'
import './css/styles.css'

export default class Contact extends Component {
    render() {
        return (
            <div className='CozyCup'>
                <NavbarCC />

                <Container className="py-1 text-center title line">
                    <h1 className="pb-3">How Can We Help You?</h1>
                    <p>If you wish to get in contact with us</p>
                    <p>Call us at (305) 555-5555</p>
                    <p>Email us at <a href="mailto:coffee@cozycup.com">coffee@cozycup.com</a></p>
                    <p>or send us a message through the following form:</p>
                </Container>

                <Container className="py-5">
                    <Row className="justify-content-center">
                        <Col lg='6'>
                            <Form>
                                <Form.Group controlId="name">
                                    <Form.Label for="name">Name</Form.Label>
                                    <Form.Control type="name" placeholder="your name" required />
                                </Form.Group>
                                <Form.Group controlId="email">
                                    <Form.Label for="email">Email</Form.Label>
                                    <Form.Control type="email" name="email" placeholder="email@example.com" required />
                                </Form.Group>
                                <Form.Group controlId="message">
                                    <Form.Label for="message">Message</Form.Label>
                                    <Form.Control as='textarea' name="message" id="message" cols="60" rows="10" required />
                                </Form.Group>
                                <Button className="btn-dark float-right" type="submit">Submit</Button>                            
                            </Form>
                        </Col>
                    </Row>
                </Container>

                <Footer />
            </div>
        )
    }
}
