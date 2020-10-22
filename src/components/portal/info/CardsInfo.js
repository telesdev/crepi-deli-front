import React from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import { SiInstagram, SiTwitter, SiFoursquare } from 'react-icons/si'

export const CardsInfo = () => {
    return (
        <>
        <CardDeck>
            <Card border="dark">
                <Card.Body>
                    <Card.Title>Endereços</Card.Title>
                    <Card.Text>
                        Tijuca<br/>
                        Rua Lalala 100
                    </Card.Text>
                    <Card.Text>
                        Largo do Machado<br/>
                        Rua Mas não Largo do Copo
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card border="dark">
                <Card.Body>
                    <Card.Title>Horário de Funcionamento</Card.Title>
                    <Card.Text>
                        Aberto todos os dias<br/>
                        Domingo a Quinta, das 18:00 às 23:00<br/>
                        Sexta e Sábado, das 18:00 às 00:00
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card border="dark">
                <Card.Body>
                    <Card.Title>Mídias Sociais</Card.Title>
                    <Card.Text><SiInstagram /> <SiTwitter /> <SiFoursquare /></Card.Text>
                </Card.Body>
            </Card>
        </CardDeck>
        </>
    )
}