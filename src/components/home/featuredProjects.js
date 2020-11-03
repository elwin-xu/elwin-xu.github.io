import React, { Component } from 'react'
import { Jumbotron, Container, Card, CardDeck, Col, Row } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

class FeaturedProjects extends Component {
    render() {
        return (
            <Jumbotron fluid className="featuredProjects mb-0" id="featuredProjects" style={{ backgroundColor: 'rgb(233,233,233)' }}>
                <Container fluid>
                    <h1 className="mb-4 text-center">Projects</h1>
                    <Row className="justify-content-center">
                        <Col sm={11}>
                            <CardDeck>
                                <Card style={style.card}>
                                    <Card.Img variant="top" src="images/react.png" />
                                    <Card.Body>
                                        <Card.Title>Personal Blog</Card.Title>
                                        <Card.Text>
                                            A personal blog hosted on AWS, with the front-end built with React & UIkit, and the back-end built with Express & MongoDB.
                                        </Card.Text>
                                    </Card.Body>

                                    <Card.Footer>
                                        <Card.Link
                                            href="https://www.zixuanxu.com/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            View Website
                                        </Card.Link>
                                    </Card.Footer>
                                    {/* <span> &nbsp;|&nbsp; </span> */}
                                    {/* <Card.Link href="#">Another Link</Card.Link> */}
                                </Card>
                                <Card style={style.card}>
                                    <Card.Img variant="top" src="images/vue.jpg" />
                                    <Card.Body>
                                        <Card.Title>SVG Plotter</Card.Title>
                                        <Card.Text>
                                            An interactive app based on Vue that can be used to create SVG elements via commands.
                                        </Card.Text>
                                    </Card.Body>

                                    <Card.Footer>
                                        <Card.Link
                                            href="https://zixuan-xu.github.io/Exercise-Vue.js-SVG-Plotter/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            View Website
                                        </Card.Link>
                                    </Card.Footer>
                                    {/* <span> &nbsp;|&nbsp; </span> */}
                                    {/* <Card.Link href="#">Another Link</Card.Link> */}
                                </Card>
                            </CardDeck>
                        </Col>
                    </Row>
                    <div className="text-center">
                        {/* <Link to="/projects"><Button variant="primary">View All Projects</Button></Link> */}
                    </div>
                </Container>
            </Jumbotron>
        )
    }
}

const style = {
    card: {
        backgroundColor: 'transparent',
        border: 'none'
    },


}

export default FeaturedProjects;
