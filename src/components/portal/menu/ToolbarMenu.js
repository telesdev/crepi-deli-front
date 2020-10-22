import React from 'react'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import InputGroup from 'react-bootstrap/InputGroup'
import './menu.css'

export const ToolbarMenu = () => {
    return (
        <>
        <ButtonToolbar className="justify-content-between" id='toolbar'>
            <InputGroup>
                <Form inline>
                    <FormControl
                        type="text"
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="btnGroupAddon"
                    />
                    <Button type="submit">Search</Button>
                </Form>
            </InputGroup>
            <ButtonGroup>
                <Button variant="secondary">1</Button>
                <Button variant="secondary">2</Button>
                <Button variant="secondary">3</Button>
                <Button variant="secondary">4</Button>
            </ButtonGroup>
        </ButtonToolbar>
        </>
    )
}