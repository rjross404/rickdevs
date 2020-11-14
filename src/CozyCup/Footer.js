import React, { Component } from 'react'
import {Container, Row, Col } from 'react-bootstrap'

export default class Footer extends Component {
    render() {
        return (
            <footer className="bg-dark py-2 text-center text-muted small footer">
                <Container className="pt-3">
                    <Row className="justify-content-around">
                        <Col xs='12' className='pb-3'>
                            Copyright © 2020 · All Rights Reserved · <a href="https://rickdevs.com/" className="text-muted">RickDevs.com</a>
                        </Col>
                    </Row>
                </Container>
            </footer>
        )
    }
}
