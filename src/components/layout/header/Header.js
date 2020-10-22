import React from 'react'
import './header.css'
import { NavHeader } from './NavHeader'
import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar'

export const Header = () => {
    return (
        <>
        <header>
            <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand>Crepi Deli</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <NavHeader />
                    </Navbar.Collapse>    
                </Container>          
            </Navbar>
        </header>
        </>
    )
}