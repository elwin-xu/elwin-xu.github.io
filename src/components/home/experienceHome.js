import React, { Component } from 'react'
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

class ExperienceHome extends Component {
    render() {
        return (
            <Jumbotron fluid className="experienceHome mb-0 text-light" id="experience" style={{ backgroundColor: 'rgb(0, 126, 101)' }}>
                <Container fluid>
                    <h1 className="mb-4 text-center">Experience</h1>
                    <Row className="justify-content-center mb-4">
                        <Col sm={4}>
                            <h2>Delta Group</h2>
                            <h3>Civil Engineer - Intern</h3>
                            <h3>Melbourne, Australia</h3>
                            <h3>Mar 2019 – Jun 2019</h3>
                        </Col>
                        <Col sm={7}>
                            <ul>
                                <li>QSE (Quality, Safety, and Environment) office tasks</li>
                                <li>Supported senior project engineers (on-site and off-site)</li>
                                <li>Maintained all documentation required for the monthly progress approval</li>
                                <li>Prepared drawings for fire safety inspections and audits</li>
                            </ul>
                        </Col>
                    </Row>

                    <Row className="justify-content-center">
                        <Col sm={4}>
                            <h2>China Academy of Building Research</h2>
                            <h3>Software Engineer</h3>
                            <h3>Shanghai, China</h3>
                            <h3>Jun 2017 – Feb 2018</h3>
                        </Col>
                        <Col sm={7}>
                            <ul>
                                <li>Adopted agile software development methodologies while working closely with teammates and customers</li>
                                <li>Communicated with customers to research possible improvements of software</li>
                                <li>Designed user interface and interactive mechanism using C++ and MFC</li>
                                <li>Implemented saving functionality of calculations using JSON file format</li>
                                <li>Designed algorithms to match joint components with different sizes</li>
                                <li>Worked on the project collaboratively on Visual Studio using Git</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        )
    }
}

export default ExperienceHome;
