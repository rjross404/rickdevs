import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export default class NavbarCC extends Component {
    render() {
        return (
                <Navbar variant='dark' bg='dark' expand='lg' className='fixed-top'>
                    <Navbar.Brand href="/cozycup"><FontAwesomeIcon icon={faCoffee} /> Cozy Cup (305) 555-5555</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                            <Nav.Link href="/cozycup/menu">Menu</Nav.Link>
                            <Nav.Link href="/cozycup/about">About</Nav.Link>
                            <Nav.Link href="/cozycup/contact">Contact</Nav.Link>
                            <Nav.Link href="/">Rick Devs</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                </Navbar>

        )
    }
}
