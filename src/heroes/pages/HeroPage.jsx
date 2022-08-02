import React, { useMemo } from 'react'
import { Navigate, useParams, useNavigate } from 'react-router-dom';
import { getHeroeById } from '../helpers/heroData';
import 'animate.css';

const HeroPage = () => {
    const navigate = useNavigate();

    const { id } = useParams();
    const hero = useMemo(() => getHeroeById(id), [id])
    const heroImage = `/assets/heroes/${hero.id}.jpg`

    if (!hero) {
        return <Navigate to='/marvel' />
    }

    const onNavigateBack = () => {
        navigate(-1)
    }

    return (
        <div className='flex justify-center m-12 animate__animated animate__bounce animate__fadeIn'>
            <img src={heroImage} className='w-1/4 rounded-lg ' alt="" />
            <div className='mx-12'>
                <p className='text-2xl font-bold'>{hero.superhero}</p>

                <div className='mx-4 mt-4'>
                    <p className='font-bold'>Alter Ego: <span className='font-light'>{hero.superhero}</span> </p>
                    <p className='font-bold'>Publisher: <span className='font-light'>{hero.publisher}</span> </p>
                    <p className='font-bold'>First appareance: <span className='font-light'>{hero.first_appearance}</span> </p>
                </div>

                <p className='text-xl font-bold mt-4'>Characters</p>
                <p className='font-bold'>Alter Ego: <span className='font-light'>{hero.characters}</span>

                </p>

                <button
                    className='bg-slate-700 text-white font-bold p-2 my-8 rounded-lg'
                    onClick={onNavigateBack}
                >
                    Regresar
                </button>
            </div>

        </div>
    )
}

export { HeroPage }