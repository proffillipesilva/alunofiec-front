import React from 'react'
import { Link } from 'react-router-dom'

import { useSelector } from 'react-redux'
import { Navbar, Container, Offcanvas, NavDropdown, Form, Button, Nav, FormControl } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem, faHome, faBars, faUser, faPlus } from '@fortawesome/free-solid-svg-icons';



const Header = () => {
    const loggedIn = useSelector(state => state.loggedIn)
    return (
        <Navbar bg="light" expand="sm">
            <Container fluid>
                <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-center">
                    <Nav className="justify-content-center flex-grow-1 pe-3">
                        <Nav.Link href="#action1"> <Link to={"alunos"}><a className="nav-link active" href="#">
                            <FontAwesomeIcon icon={faUser} />
                             Alunos</a>
                        </Link></Nav.Link>
                        <Nav.Link href="#action2"><Link to={"criar"}><a className="nav-link" href="#">
                            <FontAwesomeIcon icon={faPlus} />
                             Criar</a></Link></Nav.Link>
                        <Nav.Link href="#action2"> <Link to={"home"}><a className="nav-link" href="#">
                            <FontAwesomeIcon icon={faHome} />
                             Home</a></Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand`} />
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand`}
                    aria-labelledby={`offcanvasNavbarLabel-expand`}
                    placement="start"
                >
                    <Offcanvas.Header closeButton variant="white">
                        <Offcanvas.Title >
                            Offcanvas
              </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link href="#action1"> <Link to={"alunos"}><a className="nav-link active" href="#">
                                <FontAwesomeIcon icon={faUser} />
                                Alunos</a>
                            </Link></Nav.Link>
                            <Nav.Link href="#action2"><Link to={"criar"}><a className="nav-link" href="#">
                                <FontAwesomeIcon icon={faPlus} />
                                Criar</a></Link></Nav.Link>
                            <Nav.Link href="#action2"> <Link to={"home"}><a className="nav-link" href="#">
                                <FontAwesomeIcon icon={faHome} />
                                Home</a></Link></Nav.Link>
                        </Nav>

                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
        /*
        <nav>
            {loggedIn ?
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <Link to={"alunos"}><a className="nav-link active" href="#">Alunos</a></Link>
                </li>
                <li className="nav-item">
                <Link to={"criar"}><a className="nav-link" href="#">Criar</a></Link>
                </li>
                <li className="nav-item">
                <Link to={""}><a className="nav-link disabled" href="#">Home</a></Link>
                </li>
            </ul>
            : null }
        </nav>
        */
    )
}

export default Header
