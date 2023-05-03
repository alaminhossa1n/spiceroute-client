import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../Sheard/NavigationBar';
import SpiceFooter from '../Sheard/SpiceFooter';

const Main = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <SpiceFooter></SpiceFooter>
        </div>
    );
};

export default Main;