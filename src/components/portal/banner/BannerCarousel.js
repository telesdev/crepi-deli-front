import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

export const BannerCarousel = () => {
    return (
        <>
        <Carousel>
        <Carousel.Item>
            <img 
                className="d-block w-100"
                src="https://via.placeholder.com/500x100"
                alt="Primeiro Slide"
            />
            <Carousel.Caption>
                <h3>Primeiro Slide</h3>
                <p>In officia culpa dolore dolore quis sit eiusmod sit aliqua.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img 
                className="d-block w-100"
                src="https://via.placeholder.com/500x100"
                alt="Segundo Slide"
            />
            <Carousel.Caption>
                <h3>Segundo Slide</h3>
                <p>In officia culpa dolore dolore quis sit eiusmod sit aliqua.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img 
                className="d-block w-100"
                src="https://via.placeholder.com/500x100"
                alt="Terceiro Slide"
            />
            <Carousel.Caption>
                <h3>Terceiro Slide</h3>
                <p>In officia culpa dolore dolore quis sit eiusmod sit aliqua.</p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel> 
        </>
    )
}

