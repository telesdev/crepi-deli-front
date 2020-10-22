import React from 'react'
import { BannerCarousel } from './BannerCarousel'
import { Container } from 'react-bootstrap'
import './banner.css'

export const Banner = () => {
    return (
        <>
        <div id='banner'>
        <Container>
            <h2>BANNER</h2>
        </Container>
        <BannerCarousel />
        </div>
        </>
    )
}
