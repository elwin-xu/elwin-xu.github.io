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
                                    <Card.Img variant="top" src="images/vue.jpg" />
                                    <Card.Body>
                                        <Card.Title>Vue.js SVG Plotter</Card.Title>
                                        <Card.Text>
                                            This is an interactive website that can be used to create SVG elements, and it's based on the popular framework Vue.js.
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
                                <Card style={style.card}>
                                    <Card.Img variant="top" src="images/count areas.jpg" />
                                    <Card.Body>
                                        <Card.Title>Count Areas</Card.Title>
                                        <Card.Text>
                                            An algorithm developed to count the number of areas of the same color.
                                        </Card.Text>
                                    </Card.Body>

                                    <Card.Footer>
                                        <Card.Link
                                            href="https://github.com/zixuan-xu/count-areas"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            View on Github
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
