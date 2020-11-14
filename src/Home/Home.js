import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3, faJs, faReact, faGithubAlt, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import {Container, Row, Col, Button, Image } from 'react-bootstrap'
import ContactForm from './ContactForm'
import Footer from './Footer'
import rickdev from './imgs/rickdev.jpg'
import CozyCupHome from './imgs/CozyCupHome.png'
import ShervinPhotosHome from './imgs/ShervinPhotosHome.png'
import './css/styles.css'

export default class Home extends Component {
    static defaultProps = {
        projectPhotos: [
            {
                photo: CozyCupHome,
                url: '/cozycup'
            },
            {
                photo: ShervinPhotosHome,
                url: '/shervinphotos'
            }
        ]
    }
    render() {
        const { projectPhotos } = this.props
        return (
            <div className='Home'>
                <Container fluid>
                    <Row className='Home-header'>
                        <Col xs='12' className='Home-header-text'>
                            <p>A FRONT-END WEB DEVELOPER</p>
                            <h1>RICK DEVS</h1>
                        </Col>
                        <Col xs='12'>
                            <Image src={rickdev} roundedCircle fluid />
                        </Col>
                        <Container className='Home-header-buttons'>
                            <Row>
                                <Col xs='4' lg='5'></Col>
                                <Col xs='6'>
                                    <Button className='Home-button-email center-block'>
                                        <a href='mailto: rjross404@gmail.com'><FontAwesomeIcon icon={faEnvelope}/></a>
                                    </Button>
                                    <Button className='Home-button-github center-block'>
                                        <a href='https://github.com/rjross404'><FontAwesomeIcon icon={faGithubAlt}/></a>
                                    </Button>
                                    <Button className='Home-button-linkedin center-block'>
                                        <a href='https://www.linkedin.com/in/richard-ross-25388014a/'><FontAwesomeIcon icon={faLinkedin}/></a>
                                    </Button>                                             
                                </Col>                                
                            </Row>
                        </Container>

                    </Row>
                </Container>

                <Container className='py-5'>
                    <Row>
                        <Col lg='2' md='1'/>
                        <Col xs='10' lg='4' md='5'>
                            <h2>Who I am</h2>
                            <p>Hello, I’m Rick. As a recent graduate with a Master of Science in Information, I have sought to expand my skills into front-end web design. I am available to discuss projects for your professional or personal website. If you are interested in my services, please send me an email at rjross404@gmail.com or through the contact form below.</p>
                        </Col>
                        <Col xs='10' lg='4' md='5'>
                            <h2>What I know</h2>
                            <ul>
                                <li><FontAwesomeIcon icon={faHtml5}/> HTML5</li>
                                <li><FontAwesomeIcon icon={faCss3}/> CSS3</li>
                                <li><FontAwesomeIcon icon={faJs}/> JavaScript</li>
                                <li><FontAwesomeIcon icon={faReact}/> React</li>
                                <li><FontAwesomeIcon icon={faCode}/> MySQL</li>
                            </ul>
                        </Col>  
                        <Col lg='2' md='1'/>                           
                    </Row>
                </Container>  

                <Container className='Home-sample-projects my-5'>
                    <Row className='justify-content-center'>
                        <Col xs='12'><h2>Sample Projects</h2></Col>  
                        {projectPhotos.map(projectPhoto => (
                            <Col lg='4' md='6' sm='10' xs='12' className='w-100'>
                                <a href={projectPhoto.url}><Image fluid src={projectPhoto.photo} alt="" className='Home-sample-imgs'/></a>
                            </Col>               
                        ))} 
                    </Row>
                </Container>

                <ContactForm />
                <Footer />

            </div>
        )
    }
}