import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import NavigationBar from '../Sheard/NavigationBar';
import SpiceFooter from '../Sheard/SpiceFooter';

const Main = () => {
    const navigation = useNavigation();
    return (
        <div>
            <NavigationBar></NavigationBar>
            <div>
                {
                    navigation.state === 'loading' ? <div className="flex justify-center items-center">
                        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
                    </div> : ''
                }
            </div>
            <Outlet></Outlet>
            <SpiceFooter></SpiceFooter>
        </div>
    );
};

export default Main;