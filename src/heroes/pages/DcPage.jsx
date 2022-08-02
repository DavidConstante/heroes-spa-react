import React, { useMemo } from 'react'
import HeroList from '../components/HeroList';
import { getHeroesByPublisher } from '../helpers/heroData'

const DcPage = () => {
    const DCHeroes = useMemo(() => getHeroesByPublisher('DC Comics'))
    return (
        <>
            <HeroList heroes={DCHeroes} />
        </>
    )
}

export { DcPage }