import React from 'react'
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {

    const navigate = useNavigate();

    const onLogin = () => {
        navigate('/', {
            replace: true
        })
    }
    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-1/2 p-6 m-auto bg-white border-t-4 border-slate-700 rounded-md shadow-md border-top lg:max-w-md">
                <h1 className="text-3xl font-semibold text-center text-slate-700">LOGO</h1>
                <form className="mt-6">
                    <div>
                        <label htmlFor="email" className="block text-sm text-gray-800">Email</label>
                        <input type="email" className="block w-full px-4 py-2 mt-2 text-slate-700 bg-white border rounded-md focus:border-slate-400 focus:ring-slate-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>
                    <div className="mt-4">
                        <div>
                            <label htmlFor="password" className="block text-sm text-gray-800">Password</label>
                            <input type="password" className="block w-full px-4 py-2 mt-2 text-slate-700 bg-white border rounded-md focus:border-slate-400 focus:ring-slate-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>
                        <a href="#" className="text-xs text-gray-600 hover:underline">Forget Password?</a>
                        <div className="mt-6">
                            <button
                                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-slate-700 rounded-md hover:bg-slate-600 focus:outline-none focus:bg-slate-600"
                                onClick={onLogin}
                            >
                                Login
                            </button>
                        </div>
                        <p className="mt-8 text-xs font-light text-center text-gray-700"> Don't have an account? <a href="#" className="font-medium text-slate-600 hover:underline">Sign up</a></p>
                    </div></form>
            </div>
        </div>


    )
}

export default LoginPage