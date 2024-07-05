import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggledarkMode = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('dark', !darkMode);
    };

    return (
        <>
            <nav className='pb-[30px]'>
                <div className="container">
                    <div className="menu p-5 flex justify-between flex-wrap pt-[30px]">
                        <div className="menu-logo">
                            <Link to='#'>
                                <img src="https://i.ibb.co/n6ZGxn7/logo.png" alt="logo" />
                            </Link>
                        </div>
                        <div className="menu-pages flex flex-wrap px-[15px]">
                            <ul className='flex flex-wrap gap-4'>
                                <NavLink to="/" className={({ isActive }) => isActive ? "px-[19px] bg-gradient-to-r from-[#FA5252] to-[#DD2476] text-[13px] font-poppins text-white h-10 flex justify-center items-center gap-2 rounded-lg hover:stroke-white" : "px-[19px] bg-white text-[#44566c] dark:bg-[#1d1d1d] dark:text-[#A6A6A6] hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] text-[13px] font-poppins hover:text-white h-10 flex justify-center items-center gap-2 rounded-lg transition duration-300 font-medium"}>
                                    <span><i className="fa-light fa-house text-lg"></i></span> Home
                                </NavLink>
                                <NavLink to="/about" className={({ isActive }) => isActive ? "px-[19px] bg-gradient-to-r from-[#FA5252] to-[#DD2476] text-[13px] font-poppins text-white h-10 flex justify-center items-center gap-2 rounded-lg hover:stroke-white" : "px-[19px] bg-white text-[#44566c] dark:bg-[#1d1d1d] dark:text-[#A6A6A6] hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] text-[13px] font-poppins hover:text-white h-10 flex justify-center items-center gap-2 rounded-lg transition duration-300 font-medium"}>
                                    <span><i className="fa-light fa-address-card text-lg"></i></span> About
                                </NavLink>
                                <NavLink to="/resume" className={({ isActive }) => isActive ? "px-[19px] bg-gradient-to-r from-[#FA5252] to-[#DD2476] text-[13px] font-poppins text-white h-10 flex justify-center items-center gap-2 rounded-lg hover:stroke-white" : "px-[19px] bg-white text-[#44566c] dark:bg-[#1d1d1d] dark:text-[#A6A6A6] hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] text-[13px] font-poppins hover:text-white h-10 flex justify-center items-center gap-2 rounded-lg transition duration-300 font-medium"}>
                                    <span><i className="fa-light fa-file-user text-lg"></i></span> Resume
                                </NavLink>
                                <NavLink to="/works" className={({ isActive }) => isActive ? "px-[19px] bg-gradient-to-r from-[#FA5252] to-[#DD2476] text-[13px] font-poppins text-white h-10 flex justify-center items-center gap-2 rounded-lg hover:stroke-white" : "px-[19px] bg-white text-[#44566c] dark:bg-[#1d1d1d] dark:text-[#A6A6A6] hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] text-[13px] font-poppins hover:text-white h-10 flex justify-center items-center gap-2 rounded-lg transition duration-300 font-medium"}>
                                    <span><i className="fa-light fa-briefcase text-lg"></i></span> Work
                                </NavLink>
                                <NavLink to="/blogs" className={({ isActive }) => isActive ? "px-[19px] bg-gradient-to-r from-[#FA5252] to-[#DD2476] text-[13px] font-poppins text-white h-10 flex justify-center items-center gap-2 rounded-lg hover:stroke-white" : "px-[19px] bg-white text-[#44566c] dark:bg-[#1d1d1d] dark:text-[#A6A6A6] hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] text-[13px] font-poppins hover:text-white h-10 flex justify-center items-center gap-2 rounded-lg transition duration-300 font-medium"}>
                                    <span><i className="fa-light fa-newspaper text-lg"></i></span> Blog
                                </NavLink>
                                <NavLink to="/contact" className={({ isActive }) => isActive ? "px-[19px] bg-gradient-to-r from-[#FA5252] to-[#DD2476] text-[13px] font-poppins text-white h-10 flex justify-center items-center gap-2 rounded-lg hover:stroke-white" : "px-[19px] bg-white text-[#44566c] dark:bg-[#1d1d1d] dark:text-[#A6A6A6] hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] text-[13px] font-poppins hover:text-white h-10 flex justify-center items-center gap-2 rounded-lg transition duration-300 font-medium"}>
                                    <span><i className="fa-light fa-address-book text-lg"></i></span> Contact
                                </NavLink>
                            </ul>
                            <div className="menu-theme w-[45px] h-[45px] text-[22px] bg-white flex justify-center items-center rounded-3xl text-[#44566C] shadow-6xl hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:text-white ml-[30px] dark:bg-[#1d1d1d] dark:text-[#A6A6A6] transition duration-300" onClick={toggledarkMode}>
                                {darkMode ? <i className="fa-light fa-moon text-lg"></i> : <i className="fa-light fa-sun text-lg"></i>}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
