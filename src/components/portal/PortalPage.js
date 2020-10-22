import React from 'react'

import { Header } from '../layout/header/Header'
import { Footer } from '../layout/footer/Footer'

import { About, Banner, Info, Highlights, Menu, Services } from './'

export const PortalPage = () => {
    return (
        <>
        <Header />
        <Banner />
        <Info />
        <About />
        <Services />
        <Highlights />
        <Menu />
        <Footer />
        </>
    )
}