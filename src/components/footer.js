import React, { Component } from 'react'
import { Jumbotron, Container, Nav } from 'react-bootstrap';

class Footer extends Component {
    render() {
        return (
            <Jumbotron fluid className="footer mb-0 text-light">
                <Container fluid>
                    <p className="text-center">This website is built with Bootstrap & React.</p>

                    <Nav className="social-links justify-content-center">
                        <Nav.Item>
                            <Nav.Link href="https://www.linkedin.com/in/zixuan-xu/" target="_blank" rel="noopener noreferrer" className="text-light">
                                <i className="fa fa-linkedin" aria-hidden="true" />
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="https://github.com/zixuan-xu" target="_blank" rel="noopener noreferrer" className="text-light">
                                <i className="fa fa-github" aria-hidden="true" />
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link href="mailto:zi.xuan.xu@icloud.com" target="_blank" rel="noopener noreferrer" className="text-light">
                                <i className="fa fa-inbox" aria-hidden="true" />
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Container>
            </Jumbotron>
        )
    }
}

export default Footer;