import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate();

    const onLogout = () => {
        navigate('/login', {
            replace: true // Evita que se pueda retornar a la pagina anterior
        })
    }

    return (
        <div className='flex justify-between items-center bg-slate-700 text-white  p-4'>
            <div className='flex items-center ' >
                <NavLink to="/" className={({ isActive }) => `hover:cursor-pointer mx-4 text-2xl `}>Heroes - SPA</NavLink>

                <NavLink to="/marvel" className={({ isActive }) => `hover:cursor-pointer mx-4 ${isActive ? 'font-bold' : ''} `}>Marvel</NavLink>
                <NavLink to="/dc" className={({ isActive }) => `hover:cursor-pointer mx-4 ${isActive ? 'font-bold' : ''} `}>DC</NavLink>
                <NavLink to="/search" className={({ isActive }) => `hover:cursor-pointer mx-4 ${isActive ? 'font-bold' : ''} `}>Search</NavLink>
            </div>
            <div className='flex items-center'>
                <p className='mx-4 text-blue-400'>David</p>
                <button
                    className='border-2 p-2 rounded-lg'
                    onClick={onLogout}
                >
                    Logout
                </button>
            </div>

        </div>
    )
}

export default Navbar