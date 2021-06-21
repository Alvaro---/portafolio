import React, { useContext } from 'react'
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import logo from '../logo.png'
import { FormattedMessage } from 'react-intl'
import { LangContext } from '../context/LangContext'

import Scroll from 'react-scroll'
const ScrollLink = Scroll.ScrollLink

const NavBar = () => {
    const lang = useContext(LangContext)
    //console.log(lang.establecerLenguaje("en-US"))
    return (
        <Navbar fixed="top" className="color-nav" expand="md" variant="dark"> {/* className="color-nav" O bg="dark" */}
            <Container>
                <Navbar.Brand href="#home"> <img src={logo} alt="logo" className="imgLogo"></img></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className="ariaBtn"> <FormattedMessage id="options" defaultMessage="Options" /> </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home"><FormattedMessage id="home" defaultMessage="Home" /></Nav.Link>
                        <Nav.Link href="#about"><FormattedMessage id="about" defaultMessage="About" /></Nav.Link>
                        <Nav.Link href="#services"><FormattedMessage id="services" defaultMessage="Services" /></Nav.Link>
                        <Nav.Link href="#proyects"><FormattedMessage id="proyects" defaultMessage="Proyects" /></Nav.Link>
                        <Nav.Link href="#contact"><FormattedMessage id="contacts" defaultMessage="Contact" /></Nav.Link>
                        <NavDropdown title="EN-ESP" id="collasible-nav-dropdown">
                            <NavDropdown.Item className="titleNav" onClick={() => lang.establecerLenguaje("en-US")}><FormattedMessage id="en" defaultMessage="Ingles" /></NavDropdown.Item>
                            <NavDropdown.Item className="titleNav" onClick={() => lang.establecerLenguaje("es-MX")}><FormattedMessage id="esp" defaultMessage="Español" /></NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default NavBar
