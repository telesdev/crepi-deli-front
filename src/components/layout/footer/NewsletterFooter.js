import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export const NewsletterFooter = () => {
    return(
        <>
        <div>
            <h6>Acompanhe nossas novidades</h6>
            <Form>
                <Form.Group>
                    <Form.Control type='text' placeholder='Nome' />                
                </Form.Group>
                <Form.Group>
                    <Form.Control type='email' placeholder='Seu melhor email' />                
                </Form.Group>
                <Button type='submit'>Assinar</Button>
            </Form>
        </div>
        </>
    )
}