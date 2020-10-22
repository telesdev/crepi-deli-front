import React from 'react'
import './footer.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { MiniAboutUsFooter } from './MiniAboutUsFooter'
import { NewsletterFooter } from './NewsletterFooter'
import { QuickLinksFooter } from './QuickLinksFooter'


export const Footer = () => {
    return (
        <>
        <footer>
            <Container>
                <Row>
                    <Col sm={7}>
                        <MiniAboutUsFooter />
                    </Col>
                    <Col>
                        <NewsletterFooter />
                    </Col>
                    <Col>
                        <QuickLinksFooter />
                    </Col>
                </Row>
                <hr />
                <p id="copyright">Copyright© 2020 por Crepi Deli. Todos os direitos reservados.</p>
            </Container>
        </footer>
        </>
    )
}