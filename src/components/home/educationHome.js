import React, { Component } from 'react'
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

class EducationHome extends Component {
    render() {
        return (
            <Jumbotron fluid className="educationHome mb-0 text-light " id="education" style={{ backgroundColor: 'rgb(180, 40, 58)' }}>
                <Container fluid>
                    <h1 className="mb-4 text-center">Education</h1>
                    <Row className="justify-content-center mb-4">
                        <Col sm={11}>
                            <h2>Shanghai Jiao Tong University</h2>
                            <h3>Master's Degree, Architectural and Civil Engineering</h3>
                            <h3>2014 – 2017</h3>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col sm={11}>
                            <h2>Shanghai Jiao Tong University</h2>
                            <h3>Bachelor's Degree, Naval Architecture and Ocean Engineering</h3>
                            <h3>2010 – 2014</h3>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        )
    }
}

export default EducationHome;
