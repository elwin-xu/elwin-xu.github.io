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
                                <li>QSE (Quality, Safety, and Environment) office daily tasks including uploading licence documents on the company intranet and updating site rosters with engineers</li>
                                <li>Supported senior project engineer with site inspection and document archiving</li>
                                <li>Inspected and updated the locations of fire equipment, and prepared drawings for fire safety inspections and audits</li>
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
                                <li>Worked on the development of a professional design application used by civil engineers to calculate mechanical responses and prepare structural drawings</li>
                                <li>Designed user interface using C++ and MFC, and replaced out-of-date UI elements with newest ones, giving the software a modern UI Style</li>
                                <li>Invited by the customer to go to their company to work with their engineer team to collect customer feedback on our software, which afterwards enabled our team to add several critical features that greatly improved the efficiency of our software</li>
                                <li>Collaborative development experience working with the team using Git</li>
                                <li>Implemented JSON serialisation which enabled users to save calculation results</li>
                                <li>Adopted agile software development methodologies while working closely with teammates and customers</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        )
    }
}

export default ExperienceHome;
