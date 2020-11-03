import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';

class Intro extends Component {
    render() {
        return (
            <Jumbotron fluid className="intro mb-0 bg-white text-center">
                <Container fluid>
                    <h1 className="font-weight-bold">Create User-Friendly<br />Software</h1>
                    <p className="mb-5">
                        Hello! I'm Zixuan Xu, a software engineer focusing on game development.
                    </p>
                    <Row noGutters className="align-items-center justify-content-center">
                        <Col xs="2"><img src="/images/game.png" alt="game" className="w-100"/></Col>
                        <Col xs="7"><img src="/images/laptop.png" alt="laptop" className="w-100"/></Col>
                        <Col xs="2"><img src="/images/mobile.png" alt="mobile" className="w-100"/></Col>
                    </Row>
                    
                </Container>
            </Jumbotron>
        )
    }
}

export default Intro;