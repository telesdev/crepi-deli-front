import React from 'react'
import './admHeader.css'
import { Form, FormControl, Button, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { AiOutlineSearch } from 'react-icons/ai'

export const AdmHeader = () => {
    return (
        <>
        <header>
            <Navbar collapseOnSelect expand="sm" sticky="top" bg='dark' variant='dark'>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-light"><AiOutlineSearch /></Button>
            </Form>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav id='logado' className='justify-content-end'>
                    <NavDropdown title='Logged In'>
                        <NavDropdown.Item>Sair</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>  
            </Navbar>
        </header>
        </>
    )
}