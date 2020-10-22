import React from 'react'
import Table from 'react-bootstrap/Table'
import { MenuListItem } from './MenuListItem'

export const MenuList = ({ items }) => {
    return (
        <>
        <Table responsive>
            <thead>
                <tr>
                    <th>Imagem</th>
                    <th>Label</th>
                    <th>Descrição</th>
                    <th>Preço</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><MenuListItem /></td>
                    <td><MenuListItem /></td>
                    <td><MenuListItem /></td>
                    <td><MenuListItem /></td>
                </tr>
                <tr>
                    <td><MenuListItem /></td>
                    <td><MenuListItem /></td>
                    <td><MenuListItem /></td>
                    <td><MenuListItem /></td>
                </tr>
                <tr>
                    <td><MenuListItem /></td>
                    <td><MenuListItem /></td>
                    <td><MenuListItem /></td>
                    <td><MenuListItem /></td>
                </tr>
                <tr>
                    <td><MenuListItem /></td>
                    <td><MenuListItem /></td>
                    <td><MenuListItem /></td>
                    <td><MenuListItem /></td>
                </tr>
            </tbody>
        </Table>
        </>
    )
}