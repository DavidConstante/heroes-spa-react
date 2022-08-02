import React from 'react'
import HeroItem from './HeroItem'

const HeroList = ({ heroes }) => {

    return (
        <div className='px-24 py-12 h-screen grid grid-cols-3 bg-slate-300'>
            {
                heroes.map((hero) => <HeroItem key={hero.id} hero={hero} />)
            }
        </div>
    )
}

export default HeroList