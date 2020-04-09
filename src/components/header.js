import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

// Scroll to a certain element
function scrollTo(location, e) {
    e.preventDefault();
    const navBar = document.querySelector('.navbar');
    const yOffset = -navBar.clientHeight;

    const element = document.querySelector(location);
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
}

function scrollToTop(e) {
    e.preventDefault();
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}

class Header extends Component {
    render() {
        return (
            <Navbar variant="light" expand="lg" sticky="top">
                <Container fluid>
                    <Navbar.Brand href="/">Zixuan Xu</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="items">
                            <Navbar.Text>
                                <a
                                    href="#top"
                                    className="text-dark text-decoration-none"
                                    onClick={(e) => scrollToTop(e)}
                                >
                                    Home
                                </a>
                            </Navbar.Text>
                            <Navbar.Text>
                                <a href="#aboutMe"
                                    className="text-dark text-decoration-none"
                                    onClick={(e) => scrollTo('#aboutMe', e)}
                                >
                                    About Me
                                </a>
                            </Navbar.Text>
                            <Navbar.Text>
                                <a
                                    href="#featuredProjects"
                                    className="text-dark text-decoration-none"
                                    onClick={(e) => scrollTo('#featuredProjects', e)}
                                >
                                    Projects
                                </a>
                            </Navbar.Text>
                            <Navbar.Text>
                                <a
                                    href="#experience"
                                    className="text-dark text-decoration-none"
                                    onClick={(e) => scrollTo('#experience', e)}
                                >
                                    Experience
                                </a>
                            </Navbar.Text>
                            <Navbar.Text>
                                <a
                                    href="#education"
                                    className="text-dark text-decoration-none"
                                    onClick={(e) => scrollTo('#education', e)}
                                >
                                    Education
                                </a>
                            </Navbar.Text>
                            {/* <Navbar.Text><Link to="/contact" className="text-dark text-decoration-none">Contact</Link></Navbar.Text> */}
                        </Nav>

                        <Nav className="social-links ml-auto">
                            <Nav.Link
                                href="https://www.linkedin.com/in/zixuan-xu/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-dark"
                            >
                                <i className="fa fa-linkedin" aria-hidden="true" />
                            </Nav.Link>
                            <Nav.Link
                                href="https://github.com/zixuan-xu"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-dark"
                            >
                                <i className="fa fa-github" aria-hidden="true" />
                            </Nav.Link>
                            <Nav.Link
                                href="mailto:zi.xuan.xu@icloud.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-dark"
                            >
                                <i className="fa fa-inbox" aria-hidden="true" />
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default Header;