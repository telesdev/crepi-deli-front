import React from 'react'
import Container from 'react-bootstrap/Container';
import './about.css'

export const About = () => {
    return (
        <>
        <div id='about'>
            <Container>
                <h2>Sobre (ABOUT)</h2>
            </Container>
            <Container id='aboutContainer'>
                <div>
                    <p>Sunt incididunt cupidatat et laboris.</p>
                </div>
                <div>
                    <img 
                        src='https://via.placeholder.com/600x200'
                        alt='Imagem About'
                        id='imgAbout'
                    />
                </div>
            </Container>
        </div>
        </>
    )
}
