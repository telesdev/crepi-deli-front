import React from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaGem, FaHeart } from "react-icons/fa";
import styled from 'styled-components';
import 'react-pro-sidebar/dist/css/styles.css';
import './sidebar.css'

export const Sidebar = () => {

    const Sidebar = styled(ProSidebar)`
        @media (max-width: 735px) {
            {
            }
        }
    `

    return (
        <>        
        <Sidebar id='SidebarAdm'>
            <SidebarHeader>
                <Container>
                    <h4><FaGem /> Dashboard</h4>
                </Container>
            </SidebarHeader>
            <SidebarContent>
                <Menu iconShape="circle" popperArrow>
                    <SubMenu title="Banner" icon={<FaHeart />}>
                        <MenuItem>Lista</MenuItem>
                        <MenuItem>Inserção</MenuItem>
                    </SubMenu>
                    <SubMenu title="Contato" icon={<FaHeart />}>
                        <MenuItem>Lista</MenuItem>
                        <MenuItem>Inserção</MenuItem>
                    </SubMenu>
                    <SubMenu title="Sobre" icon={<FaHeart />}>
                        <MenuItem>Lista</MenuItem>
                        <MenuItem>Inserção</MenuItem>
                    </SubMenu>
                    <SubMenu title="Serviços" icon={<FaHeart />}>
                        <MenuItem>Lista</MenuItem>
                        <MenuItem>Inserção</MenuItem>
                    </SubMenu>
                    <SubMenu title="Destaques" icon={<FaHeart />}>
                        <MenuItem>Lista</MenuItem>
                        <MenuItem>Inserção</MenuItem>
                    </SubMenu>
                    <SubMenu title="Menu" icon={<FaHeart />}>
                        <MenuItem>Lista</MenuItem>
                        <MenuItem>Inserção</MenuItem>
                    </SubMenu>
                    <SubMenu title="Usuários" icon={<FaHeart />}>
                        <MenuItem>Lista<Link to='/admin/user-list' /></MenuItem>
                        <MenuItem>Inserção<Link to='/admin/user-form' /></MenuItem>
                    </SubMenu>
                </Menu>
            </SidebarContent>
            <SidebarFooter>
                <Container>
                    <h6>Todos os Direitos Reservados Koopao 2020</h6>
                </Container>
            </SidebarFooter>
        </Sidebar>
        </>
    )
}
