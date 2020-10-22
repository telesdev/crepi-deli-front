import React from 'react'
import { CardsServices } from './CardsServices'
import Container from 'react-bootstrap/Container';
import './services.css'

export const Services = () => {
    return (
        <>
        <div id='services'>
            <Container>
                <h2>Serviços (SERVICES)</h2>
            </Container>
            <Container>
                <p>Sunt incididunt cupidatat et laboris.</p>
                <CardsServices />
            </Container>
        </div>
        </>
    )
}
