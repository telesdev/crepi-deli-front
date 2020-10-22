import React from 'react'
import { Card, CardGroup, Row, Col } from 'react-bootstrap'

export const CardsHighlights = () => {
    return(
        <CardGroup>
            <Row>
                <Col>
                    <Card>
                        <Card.Img variant="top" src='https://via.placeholder.com/150x100' />
                        <Card.Body>
                        <Card.Title>Highlight 1</Card.Title>
                        <Card.Text>
                            Eu sunt sint esse do excepteur consequat do.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src='https://via.placeholder.com/150x100' />
                        <Card.Body>
                        <Card.Title>Highlight 2</Card.Title>
                        <Card.Text>
                            Laborum culpa consectetur reprehenderit tempor esse officia.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src='https://via.placeholder.com/150x100' />
                        <Card.Body>
                        <Card.Title>Highlight 3</Card.Title>
                        <Card.Text>
                            Amet aute officia id nostrud eiusmod sint labore culpa sunt et velit cillum laboris veniam.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <Card.Img variant="top" src='https://via.placeholder.com/150x100' />
                        <Card.Body>
                        <Card.Title>Highlight 4</Card.Title>
                        <Card.Text>
                            In anim consectetur dolore eiusmod pariatur in nulla voluptate ullamco aute fugiat incididunt dolor.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src='https://via.placeholder.com/150x100' />
                        <Card.Body>
                        <Card.Title>Highlight 5</Card.Title>
                        <Card.Text>
                            Pariatur Lorem in exercitation sunt irure minim fugiat labore quis est nulla dolore do.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src='https://via.placeholder.com/150x100' />
                        <Card.Body>
                        <Card.Title>Highlight 6</Card.Title>
                        <Card.Text>
                            Et ea in fugiat voluptate consequat qui dolor cupidatat aliqua irure veniam veniam anim.
                        </Card.Text>
                        </Card.Body>
                    </Card>   
                </Col>         
            </Row>
        </CardGroup>
    )
}