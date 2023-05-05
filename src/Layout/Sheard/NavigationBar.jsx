
import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

import { HiMenuAlt2, HiMenuAlt3 } from "react-icons/hi";

const NavigationBar = () => {
    const [open, setOpen] = useState(false);

    const { user, logOut } = useContext(AuthContext)

    const handleSignOut = () => {
        logOut();
    }
    return (
        <div className='py-5 px-10 bg-yellow-100'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-3'>

                    <div onClick={()=> setOpen(!open)} className=''>
                        <span>{open === true? <p className='text-2xl'><HiMenuAlt2 /></p> : <p className='text-2xl'><HiMenuAlt3 /></p>}</span>
                    </div>

                    <Link to='/'>
                        <p className='text-2xl font-bold'>
                            <span className='text-green-600'>Spice</span><span className='text-blue-500'>Route</span>
                        </p>
                    </Link>
                </div>


                <ul className={`absolute md:static md:flex gap-10 duration-300 bg-yellow-100 px-8 py-4 ${open ? 'top-28' : '-top-36'}`}>
                    <li>
                        <NavLink
                            to='/'
                            className={({ isActive }) => (isActive ? 'active' : 'default')}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/blog'
                            className={({ isActive }) => (isActive ? 'active' : 'default')}
                        >
                            Blog
                        </NavLink>
                    </li>

                    {
                        !user && <li>
                            <NavLink
                                to='/register'
                                className={({ isActive }) => (isActive ? 'active' : 'default')}
                            >
                                Register
                            </NavLink>
                        </li>
                    }
                </ul>

                <div className='flex items-center'>
                    <div className={user?.displayName ? 'tooltip tooltip-bottom' : ''} data-tip={user?.displayName}>

                        {
                            user && <img className=" h-12 w-12 rounded-full" src={user.photoURL} alt="" />
                        }
                    </div>

                    <div className='ms-3'>
                        {
                            user ? <button onClick={handleSignOut} className='btn border-none'>Sign Out</button> : <Link to='/login'><button className='btn border-none'>Login</button></Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavigationBar;