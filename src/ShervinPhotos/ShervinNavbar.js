import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Navbar, Nav } from 'react-bootstrap'
import { faCamera } from '@fortawesome/free-solid-svg-icons'

export default class ShervinNavbar extends Component {
    render() {
        return (
            <div>
                <Navbar expand='md' variant="dark" className='fixed-top'>
                    <Navbar.Brand href="#"><FontAwesomeIcon icon={faCamera}/> Shervin Ahmadi Photography</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                            <Nav.Link className='px-2' href="#about">ABOUT</Nav.Link>
                            <Nav.Link className='px-2' href="#gallery">GALLERY</Nav.Link>
                            <Nav.Link className='px-2' href="#contact">CONTACT</Nav.Link>
                            <Nav.Link className='px-2' href="/">RICK DEVS</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}
