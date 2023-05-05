
import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const NavigationBar = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleSignOut = () => {
        logOut();
    }
    return (
        <div className='py-5 px-10 bg-yellow-100'>
            <div className='flex items-center justify-between'>
                <Link to='/'>
                    <span className='text-2xl font-bold'>
                        <span className='text-violet-600'>Spice</span>Route
                    </span>
                </Link>


                <ul className='items-center space-x-8 md:flex'>
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
                    <div className={user?.displayName? 'tooltip tooltip-bottom' : ''} data-tip={user?.displayName}>

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