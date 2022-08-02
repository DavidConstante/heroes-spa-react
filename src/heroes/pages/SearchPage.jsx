import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useForm } from '../hooks/useForm'

import queryString from 'query-string'
import { getHeroByName } from '../helpers/heroData'
import HeroItem from '../components/HeroItem'

const SearchPage = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const { q = '' } = queryString.parse(location.search);
    const heroes = getHeroByName(q);

    const { searchText, onInputChange } = useForm({
        searchText: ''
    });


    const onSearchSubmit = (e) => {
        e.preventDefault();

        navigate(`?q=${searchText}`); //Write the query on navbar
    }


    return (
        <div className='p-16 flex justify-around  bg-red-50 h-screen'>

            <form className='flex flex-col justify-start items-center  mx-8 w-1/2' onSubmit={onSearchSubmit}>
                <p className='font-bold text-2xl'>Searching</p>
                <hr />

                <input
                    className='my-4 border-2 p-2 rounded-lg w-1/2'
                    type="text"
                    name="searchText"
                    value={searchText}
                    onChange={onInputChange}
                    placeholder='Search a Hero' />
                <button className='bg-slate-700 text-white font-bold p-2 w-1/2 rounded-lg'>Search</button>
            </form>

            <div className='mx-8 flex flex-col w-1/2'>
                <p className='font-bold text-2xl'>Results</p>
                <hr />

                {
                    heroes.length !== 0 ?
                        <div className='grid grid-cols-2 bg-blue-200 my-4 p-4 rounded-md overflow-scroll'>
                            {heroes.map((hero) => <HeroItem key={hero.id} hero={hero} />)}
                        </div>
                        :
                        <p className='bg-red-200 my-4 p-4 rounded-md'>No heroes with <span className='font-bold text-red-800'>{q}</span></p>

                }

            </div>
            <hr />

        </div>
    )
}

export { SearchPage }