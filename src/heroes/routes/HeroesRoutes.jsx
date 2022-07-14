import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from '../components'
import { DcPage, HeroPage, MarvelPage, SearchPage } from '../pages'

const HeroesRoutes = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="marvel" element={<MarvelPage />} />
                <Route path="dc" element={<DcPage />} />
                <Route path="hero" element={<HeroPage />} />
                <Route path="search" element={<SearchPage />} />

                <Route path="/" element={<Navigate to="/marvel" />} />
            </Routes>
        </div>
    )
}

export default HeroesRoutes