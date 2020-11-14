import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, Row } from 'react-bootstrap'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

export default class Footer extends Component {
    render() {
        return (
            <div className='Shervin'>
                <footer className="bg-dark text-center text-muted small footer py-3">
                    <Container className="topArrow pt-3">
                        <a href="#top" className="text-muted"><FontAwesomeIcon icon={faArrowUp}/></a>
                        <p>Back to Top</p>
                    </Container>
                    <Container>
                        <Row className="justify-content-around">
                            <p>Copyright © 2020 · All Rights Reserved · <a href="https://rickdevs.com/" className="text-muted">RickDevs.com</a>. This is not a real business.</p>
                        </Row>
                    </Container>
                </footer>
            </div>
        )
    }
}
