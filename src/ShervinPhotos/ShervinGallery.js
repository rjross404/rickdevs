import React, { Component } from 'react'
import {Container, Carousel, Row, Col, Image, Modal } from 'react-bootstrap'

export default class ShervinGallery extends Component {
    state = {
        show: false,
        index: 0
    }
    handleShow = (i) => {
        this.setState({index: i, show: true})
    }
    handleClose = () => {
        this.setState({show: false})
    }
    handleSelect = (selectedIndex) => {
        this.setState({index: selectedIndex})
    }
    render() {
        const { photos } = this.props
        const { show, index } = this.state
        let gallery = []
        for (let i = 0 ; i < photos.length; i++) {
            gallery.push(
                <Col lg='2' md='4' xs='6' className='w-100'>
                    <Image fluid src={photos[i]} alt="" onClick={() => this.handleShow(i)} index={i} />
                </Col>
            )
        }
        return (
            <div className='Shervin'>
                <Container fluid className="container-flex pb-5 px-0" id="gallery">
                    <h1 className="text-center">Photo Gallery</h1>
                    <Row className="no-gutters">
                        {gallery}
                    </Row>
                </Container>
                <Container fluid>
                    <Modal show={show} onHide={this.handleClose} className='Shervin-gallery-img' size='xl' centered>
                        <Modal.Body className="p-0">
                            <Carousel activeIndex={index} onSelect={this.handleSelect}>
                                {photos.map(photo => (
                                    <Carousel.Item>
                                        <Image fluid src={photo} alt='' />
                                    </Carousel.Item>                                    
                                ))}
                            </Carousel>
                        </Modal.Body>
                    </Modal>                        
                </Container>
            </div>
        )
    }
}
