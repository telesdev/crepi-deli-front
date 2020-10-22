import React from 'react'
import Nav from 'react-bootstrap/Nav'
import './header.css'

export const NavHeader = () => {
    return (
        <>
        <Nav className="justify-content-end">
            <Nav.Item>
                <Nav.Link href="#home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#info">Contato</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#about">Sobre</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#services">Serviços</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#highlights">Destaques</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#menu">Cardápio</Nav.Link>
            </Nav.Item>
        </Nav>
        </>
    )
}