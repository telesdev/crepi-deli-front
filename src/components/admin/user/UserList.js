import React from 'react'
import { Table, Container } from 'react-bootstrap'
import './user.css'

export const UserList = ({ users }) => {
    return (
        <>
        <Container>
            <h1 id='userFormTitle'>User List</h1>
            <Table responsive bordered hover>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    
                    <tr>
                        <td>Teles</td>
                        <td>thyago@teles.com</td>
                        <td>*****</td>
                        <td>Editar | Deletar</td>
                    </tr>
                    <tr>
                        <td>Breda</td>
                        <td>andre@breda.com</td>
                        <td>*****</td>
                        <td>Editar | Deletar</td>
                    </tr>
                    <tr>
                        <td>Moraes</td>
                        <td>elberth@moraes.com</td>
                        <td>*****</td>
                        <td>Editar | Deletar</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
        </>
    )
}
