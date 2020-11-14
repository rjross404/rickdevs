import React, { Component } from 'react'
import {Container, Row, Col, Image, Carousel } from 'react-bootstrap'
import NavbarCC from './NavbarCC'
import Footer from './Footer'
import CozyCupMenu1 from './images/CozyCupMenu1.png'
import CozyCupMenu2 from './images/CozyCupMenu2.png'
import sliderPhoto01 from './images/slider/jonas-jacobsson-RFHFV7lVQBY-unsplash.jpg'
import sliderPhoto02 from './images/slider/annie-spratt-dqpEg5lo9P0-unsplash.jpg'
import sliderPhoto03 from './images/slider/demi-deherrera-L-sm1B4L1Ns-unsplash.jpg'
import sliderPhoto04 from './images/slider/drew-jemmett-qEcWgrTG578-unsplash.jpg'
import sliderPhoto05 from './images/slider/obi-onyeador--4NNL4-E4q8-unsplash.jpg'
import sliderPhoto06 from './images/slider/mink-mingle-LGNxQzYmeUk-unsplash.jpg'
import sliderPhoto07 from './images/slider/phil-hearing-kQ8tDksUyu4-unsplash.jpg'
import './css/styles.css'

export default class Menu extends Component {
    static defaultProps = {
        sliderPhotos: [ 
            {
                photo: sliderPhoto01,
                title: 'American Coffee',
                text: 'A classic brew made hot or cold.'
            }, 
            {
                photo: sliderPhoto02,
                title: 'Cuban Coffee',
                text: 'Have it black or con leche (with milk!)'
            }, 
            {
                photo: sliderPhoto03,
                title: 'Coldbrew Coffee',
                text: 'The 12 hour steep time creates a bold flavor.'
            }, 
            {
                photo: sliderPhoto04,
                title: 'Fresh Brewed Tea',
                text: 'No bags here! Over 12 different types to choose from.'
            }, 
            {
                photo: sliderPhoto05,
                title: 'Three Flavors of Tiramisu',
                text: "Abuela's secret recipies!"
            }, 
            {
                photo: sliderPhoto06,
                title: 'Seven Different Pies',
                text: 'Both fruit and chocolate pies for your pleasure.'
            }, 
            {
                photo: sliderPhoto07,
                title: 'Hearty Muffins',
                text: 'The perfect breakfast to start your day.'
            } 
        ]
    }
    render() {
        const { sliderPhotos } = this.props
        return (
            <div className='CozyCup'>
                <NavbarCC />

                    <Container className="py-1 text-center title">
                        <h1>American and Cuban Classics</h1>
                    </Container>

                    <Container className="mt-lg-5" id="menuSlider">
                        <Row className="justify-content-center">
                            <Col lg='9' className="mb-5">
                            <Carousel id="photos">
                                {
                                    sliderPhotos.map(sliderPhoto => (
                                        <Carousel.Item>
                                            <Image className="d-block w-100" src={sliderPhoto.photo} alt="" />
                                            <Carousel.Caption className='d-none d-md-block'>
                                                <h5>{sliderPhoto.title}</h5>
                                                <p>{sliderPhoto.text}</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>                                    
                                    ))
                                }
                            </Carousel>
                            </Col>
                        </Row>
                    </Container>

                    <Container className="py-5 menu">
                        <Row>
                            <Col lg='6' className="py-2">
                                <Image src={CozyCupMenu1} alt="Cozy Cup Menu" className='menu-image'/>
                            </Col>
                            <Col lg='6' className="py-2">
                                <Image src={CozyCupMenu2} alt="Cozy Cup Menu" className='menu-image'/>
                            </Col>
                        </Row>
                    </Container>

                <Footer />
            </div>
        )
    }
}
