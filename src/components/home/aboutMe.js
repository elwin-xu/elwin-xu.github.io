import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';

class AboutMe extends Component {
    render() {
        return (
            <Jumbotron fluid className="aboutMe mb-0 text-light" id="aboutMe" style={{ backgroundColor: 'rgb(10,75,120)' }}>
                <Container fluid>
                    <Row className="justify-content-center">
                        <Col sm={11}>
                            <Row className="align-items-center justify-content-center">
                                <Col sm={6}>
                                    <img src="/images/profile.jpg" alt="profile" className="w-100 mb-4" />
                                </Col>
                                <Col sm={6}>
                                    <h1>Web Developer</h1>
                                    <h2>Zixuan Xu</h2>
                                    <p className="lead">Graduated from one of the top universities in China, I started my career as a software engineer in a leading consulting firm in China developing structural design software for professional civil engineers. I'm currently residing in Sydney, Australia, and open to job opportunities.</p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        )
    }
}



export default AboutMe;