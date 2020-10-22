import React from 'react'
import { CardsInfo } from './CardsInfo'
import Container from 'react-bootstrap/Container';
import './info.css'

export const Info = () => {
    return (
        <>
        <div id='info'>
            <Container>
                <h2>Contato (INFO)</h2>
            </Container>
            <Container>
                <p>Sunt incididunt cupidatat et laboris.</p>
                <CardsInfo />
            </Container>
        </div>
        </>
    )
}