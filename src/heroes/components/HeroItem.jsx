import React from 'react'
import { Link } from 'react-router-dom'
import 'animate.css';


const HeroItem = ({ hero }) => {
    const heroImage = `/assets/heroes/${hero.id}.jpg`
    return (
        <div className=' flex flex-row-reverse justify-between items-center   border-2 rounded-xl m-2 p-2  bg-slate-700 text-white
        animate__animated  animate__fadeIn animate__faster'>
            <div className='m-2 w-full'>
                <p className='font-bold'>SuperHero: <span className='font-normal'>{hero.superhero}</span> </p>
                <p className='font-bold'>Alter Ego: <span className='font-normal'>{hero.alter_ego}</span> </p>
                {
                    hero.characters !== hero.alter_ego &&
                    <p className='font-bold'>Character: <span className='font-normal'>{hero.characters}</span> </p>
                }
                <br />
                <Link className='text-blue-500'
                    to={`/hero/${hero.id}`}>
                    ...Mas
                </Link>
            </div>
            <img src={heroImage} className='w-1/3 rounded-tl-xl rounded-bl-xl ' alt="" />


        </div>
    )
}

export default HeroItem