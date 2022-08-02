import React, { useMemo } from 'react'
import HeroList from '../components/HeroList';
import { getPublishers, getHeroesByPublisher } from '../helpers/heroData'

const MarvelPage = () => {

    const marvelHeroes = useMemo(() => getHeroesByPublisher('Marvel Comics'));
    return (
        <>
            <HeroList heroes={marvelHeroes} />
        </>
    )
}

export { MarvelPage }