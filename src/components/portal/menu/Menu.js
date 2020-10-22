import React from 'react'
import { ToolbarMenu } from './ToolbarMenu'
import { MenuList } from './MenuList'
import Container from 'react-bootstrap/Container';
import './menu.css'

export const Menu = () => {
    return (
        <>
        <div id='menu'>
            <Container>
                <h2>Menu (MENU)</h2>
            </Container>
            <Container>
                <div>
                    <p>Sunt incididunt cupidatat et laboris.</p>
                    <ToolbarMenu />
                </div>
                <MenuList />
            </Container>
        </div>
        </>
    )
}
