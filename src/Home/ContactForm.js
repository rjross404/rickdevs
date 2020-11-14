import React, { Component } from 'react'
import emailjs from 'emailjs-com'
import {Container, Row, Col, Form, Button } from 'react-bootstrap'

export default class ContactForm extends Component {
      sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('gmail', 'template_rickdevs', e.target, 'user_HibzMGC05eW70QaTesORq')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      }
    render() {
        return (
            <Container className='Home-contact my-5'>
                <Row>
                    <Col xs='12'><h2>Contact</h2></Col> 
                    <Col lg='1' />     
                    <Col lg='9' xs='12'>
                        <Form  onSubmit={this.sendEmail}>
                            <Form.Group controlId="formName">
                                <Form.Label><strong>Name</strong></Form.Label>                   
                                <Form.Control required type="text" placeholder="your name..." className='Home-contact-input' name="from_name" />
                            </Form.Group>
                            <Form.Group controlId="formEmail">
                                <Form.Label><strong>Email</strong></Form.Label>                   
                                <Form.Control required type="email" placeholder="example@email.com" className='Home-contact-input' name="reply_to" />
                            </Form.Group>
                            <Form.Group controlId="formMessager">
                                <Form.Label><strong>Message</strong></Form.Label>                   
                                <Form.Control required as="textarea" placeholder="How can I help you?" className='Home-contact-input' name="message" />
                            </Form.Group>
                            <Button variant='secondary' type="submit" className='Home-contact-btn' value="Send">Submit</Button>
                        </Form>                        
                    </Col>                            
                </Row>
            </Container>  
        )
    }
}
