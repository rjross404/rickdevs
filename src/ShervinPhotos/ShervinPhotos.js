import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Container, Carousel, Row, Col, Form, Button, Image } from 'react-bootstrap'
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import ShervinNavbar from './ShervinNavbar'
import ShervinGallery from './ShervinGallery'
import Footer from './Footer'
import family01 from './images/family/cdc-SAwxJ8PHY3Q-unsplash.jpg'
import family02 from './images/family/febrian-zakaria-K9lxUQdalbc-unsplash.jpg'
import family03 from './images/family/iyinoluwa-john-onaeko-EzYCLiMRFpQ-unsplash.jpg'
import family04 from './images/family/laercio-cavalcanti-JYJxLjvIGWY-unsplash.jpg'
import family05 from './images/family/omar-lopez-hiqLAaOJqW8-unsplash.jpg'
import family06 from './images/family/trend-341OczdirBM-unsplash.jpg'
import portrait01 from './images/portrait/averie-woodard-4nulm-JUYFo-unsplash.jpg'
import portrait02 from './images/portrait/ayo-ogunseinde-sibVwORYqs0-unsplash.jpg'
import portrait03 from './images/portrait/christian-ferrer-aK5Dt6L6_hQ-unsplash.jpg'
import portrait04 from './images/portrait/clem-onojeghuo-FbTOrJ2G8KI-unsplash.jpg'
import portrait05 from './images/portrait/drew-hays-agGIKYs4mYs-unsplash.jpg'
import portrait06 from './images/portrait/tamara-bellis-2Tv7-O13hgk-unsplash.jpg'
import wedding01 from './images/wedding/alvaro-cvg-mW8IZdX7n8E-unsplash.jpg'
import wedding02 from './images/wedding/analise-benevides-gWedi4SWsHQ-unsplash.jpg'
import wedding03 from './images/wedding/christian-diaz-Tg_Du1s-WU0-unsplash.jpg'
import wedding04 from './images/wedding/dmitry-schemelev-OEnKKXvdbDU-unsplash.jpg'
import wedding05 from './images/wedding/foto-pettine-IfjHaIoAoqE-unsplash.jpg'
import wedding06 from './images/wedding/ivan-cabanas--E2nk5pNJ1g-unsplash.jpg'
import shervin01 from './images/natashia-shukla-FFHvNDCj3vI-unsplash.jpg'
import './css/styles.css'

export default class ShervinPhotos extends Component {
    static defaultProps = {
        photos: [ family01, family02, family03, family04, family05, family06, portrait01, portrait02, portrait03, portrait04, portrait05, portrait06, wedding01, wedding02,wedding03, wedding04, wedding05, wedding06 ]
    }
    render() {
        const { photos } = this.props
        return (
            <div className='Shervin'>
                <ShervinNavbar />

                <Container fluid id='top' className='pb-5 mb-5'>
                    <Row>
                        <Carousel className=''>
                            <Carousel.Item>
                                <Col className="px-0">
                                    <img src={wedding02} className="d-block w-100" alt=""/>
                                </Col>
                                <Carousel.Caption className='d-none d-md-block'>
                                    <h3>Wedding</h3>
                                    <p>Make your special day last forever.</p>
                                    <Button className='btn-lg btn-light px-5 captionButton' href="#gallery">View Gallery</Button>
                                </Carousel.Caption>                          
                            </Carousel.Item>
                            <Carousel.Item>
                                <Col className="px-0">
                                    <img src={family05} className="d-block w-100" alt=""/>
                                </Col>
                                <Carousel.Caption className='d-none d-md-block'>
                                    <h3>Family</h3>
                                    <p>Bring the smiles from your whole family together.</p>
                                    <Button className='btn-lg btn-light px-5 captionButton' href="#gallery">View Gallery</Button>
                                </Carousel.Caption>                          
                            </Carousel.Item>
                            <Carousel.Item>
                                <Col className="px-0">
                                    <img src={portrait03} className="d-block w-100" alt=""/>
                                </Col>
                                <Carousel.Caption className='d-none d-md-block'>
                                    <h3>Portrait</h3>
                                    <p>Capture the real you to show the world.</p>
                                    <Button className='btn-lg btn-light px-5 captionButton' href="#gallery">View Gallery</Button>
                                </Carousel.Caption>                          
                            </Carousel.Item>
                        </Carousel>                        
                    </Row>
                </Container>
                
                <Container fluid className="py-5 quoteblock">
                    <Row className="justify-content-center">
                        <Col xs='10' lg='6'>
                            <p className="text-center">"Photography takes an instant out of time, altering life by holding it still."</p>
                            <p className="text-right"><cite>- Dorothea Lange</cite></p>
                        </Col>
                    </Row>
                </Container>

                <Container fluid className="py-5 mb-5" id="about">
                    <Row className="flex-fill">
                        <Col lg='3' xs='1' />
                        <Col xs='10' lg='3'>
                            <h1 className="text-center mb-3">Meet Shervin</h1>
                            <p className="text-muted">I have been a professional photographer for 8 years. In that time, I have travelled the world in search of the perfect picture. It wasn't until I returned home that I found it: my family, bright eyed and with big smiles. It was at that moment that I realized that the best photographs are those that speak to the heart, and that every person has their own favorite photograph.
                            </p>
                            <p className="text-muted">
                                I am an Iranian-Cuban-American born to loving parents, but growing up in a household with seven brothers taught me I needed to stand out. Capturing life in a photograph is how I've learned to make my way in the world, and I wouldn't have it any other way. Share your precious moments with me, and I will make sure you remember them forever.
                            </p>
                        </Col>
                        <Col lg='6' xs='12' className='p-0'><Image fluid src={shervin01} alt="" /></Col>
                    </Row>
                </Container>

                <ShervinGallery photos={photos} />

                <Container fluid className="py-5 mb-5" id="contact">
                        <Row className="justify-content-center">
                            <Col lg='6' xs='12' className="pb-5 px-0">
                                <Image fluid src={wedding01} alt="" />
                            </Col>
                            <Col lg='3' xs='10'>
                                <h1>Contact Me</h1>
                                <p className="text-muted mb-0"><FontAwesomeIcon icon={faMobileAlt}/> (786) 555-5555</p>
                                <a href="mailto:ShervinA@photos.com" className="text-muted"><FontAwesomeIcon icon={faEnvelope}/> ShervinA@photos.com</a>
                                <Form className="pt-3">
                                    <Form.Group>
                                        <Form.Label for="name">Name</Form.Label>
                                        <Form.Control type="name" placeholder="your name" required class="form-control" />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label for="email">Email</Form.Label>
                                        <Form.Control type="email" name="email" placeholder="email@example.com" required class="form-control" />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label for="message">Message</Form.Label>
                                        <Form.Control as='textarea' name="message" id="message" cols="60" rows="10" required
                                            class="form-control" />
                                    </Form.Group>
                                    <Form.Group>
                                        <Button className="btn-dark float-right" type="submit">Submit</Button>
                                    </Form.Group>
                                </Form>
                            </Col>
                            <Col lg='3'></Col>
                        </Row>
                    </Container>

                <Footer />
            </div>
        )
    }
}
