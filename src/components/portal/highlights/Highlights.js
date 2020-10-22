import React from 'react'
import { CardsHighlights } from './CardsHighlights'
import Container from 'react-bootstrap/Container';
import './highlights.css'

export const Highlights = () => {
    return (
        <>
        <div id='highlights'>
            <Container>
                <h2>Destaques (HIGHTLIGHTS)</h2>
            </Container>
            <Container>
                <div>
                    <p>Sunt incididunt cupidatat et laboris.</p>
                </div>
                <CardsHighlights />
            </Container>
        </div>
        </>
    )
}
