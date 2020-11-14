import React, { Component } from 'react'
import {Container, Row, Col, Image } from 'react-bootstrap'
import aboutImage1 from './images/nathan-dumlao-6VhPY27jdps-unsplash.jpg'
import aboutImage2 from './images/brooke-cagle-8jp-6SjVibM-unsplash.jpg'
import aboutImage3 from './images/gregory-hayes-Jmc0PORTQ-A-unsplash.jpg'
import aboutImage4 from './images/jeff-sheldon-4vr9a_sdJ78-unsplash.jpg'
import aboutImage5 from './images/kevin-curtis-QlnUpMED6Qs-unsplash.jpg'
import NavbarCC from './NavbarCC'
import Footer from './Footer'
import './css/styles.css'

export default class About extends Component {
    static defaultProps = {
        aboutImages: [ aboutImage1, aboutImage2, aboutImage3, aboutImage4 ]
    }
    render() {
        const { aboutImages } = this.props
        return (
            <div className='CozyCup'>
                <NavbarCC />

                <Container className="py-1 text-center title">
                    <h1>Sit Back, Relax, and Enjoy the Brew</h1>
                </Container>

                <Container className="pt-5 img-rounded">
                    <Row>
                        {
                            aboutImages.map(image => (
                                <Col lg='3' xs='6'>
                                    <Image src={image} alt="" fluid className="mb-2 aboutimages" />
                                </Col>                                
                            ))
                        }
                    </Row>
                </Container>

                <Container className="text-center py-5 bigger">
                    <p>When the Cozy Cup was founded in 1986, Diego and Ismenia Perez never knew how popular with both the locals and tourists the cafe would become. Miami needed a place where one could get away from the busy city life, and that place became Cozy Cup. Diego and Ismenia are proud to continue serving after over 30 years, and always look forward to serving another cup.</p>
                </Container>

                <Container className="py-5">
                    <Image fluid src={aboutImage5} alt="" />
                </Container>

                <Footer />
            </div>
        )
    }
}
