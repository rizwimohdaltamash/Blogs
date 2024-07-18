import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
// import { AiOutlineShareAlt, AiOutlineSearch } from 'react-icons/ai';
import { FaSun, FaMoon } from 'react-icons/fa'; // Assuming these icons for light/dark mode

import myContext from '../../context/data/myContext'; // Assuming your context import
import SearchDialog from '../searchDialog/SearchDialog';

export default function Nav() {
    const [openNav, setOpenNav] = useState(false);
    const context = useContext(myContext);
    const { mode, toggleMode } = context;

    const admin =localStorage.getItem('admin');

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <li className="p-1 font-normal">
                <Link to={'/'} className="flex items-center text-white">
                    Home
                </Link>
            </li>
            <li className="p-1 font-normal">
                <Link to={'/allblogs'} className="flex items-center text-white">
                    Blogs
                </Link>
            </li>
            <li className="p-1 font-normal">
                <Link to={'/adminlogin'} className="flex items-center text-white">
                    Admin Login
                </Link>
            </li>

            <li className="p-1 font-normal">
                <Link to={'/register'} className="flex items-center text-white">
                    Register
                </Link>
            </li>
        </ul>
    );

    return (
        <>
            <nav className={`sticky top-0 z-20 ${mode === 'dark' ? 'bg-gray-800' : 'bg-blue-900'} py-2 px-4 lg:px-8`}>
                <div className="container mx-auto flex items-center justify-between text-white">
                    <Link to={'/'}>
                        <div className="flex items-center">
                            <img className="w-10 h-10" src="https://cdn-icons-png.flaticon.com/128/3685/3685253.png" alt="Logo" />
                            <span className="ml-2 text-xl font-bold">AL-Blogs</span>
                        </div>
                    </Link>

                    <div className="flex items-center gap-4">
                        <div className="hidden lg:block">
                            {navList}
                        </div>
                          
                          {/* Search */}
                        <div>
                            {/* <AiOutlineSearch size={20} color="white" /> */}
                            <SearchDialog />
                        </div>

                         {/* Dashboard */}
                        <div>
                            {admin ?<Link to={'/dashboard'}>
                                <img
                                    src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png"
                                    alt="avatar"
                                    className="w-10 h-10 rounded-full border-2 border-white"
                                    style={{ borderColor: mode === 'dark' ? 'rgb(226, 232, 240)' : 'rgb(30, 41, 59)' }}
                                />
                            </Link> :""}
                        </div>

                         {/* Theme Changer */}
                        <div>
                            {mode === 'light' ?
                                <button
                                    className="bg-white text-black rounded-full p-2"
                                    onClick={toggleMode}
                                >
                                    <FaSun size={20} />
                                </button>
                                :
                                <button
                                    className="bg-gray-800 text-white rounded-full p-2"
                                    onClick={toggleMode}
                                >
                                    <FaMoon size={20} />
                                </button>
                            }
                        </div>

                        <div>
                            <button
                                className="ml-auto lg:hidden text-white"
                                onClick={() => setOpenNav(!openNav)}
                            >
                                {openNav ?
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                }
                            </button>
                        </div>
                    </div>
                </div>

                {openNav && <div className="lg:hidden">{navList}</div>}
            </nav>
        </>
    );
}
