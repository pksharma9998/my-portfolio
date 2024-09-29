import React from 'react'
import { Outlet } from 'react-router-dom';
import CustomCursor from './CustomCursor';
import NavBar from './Navbar';
import Particle from './Particle';

function Index() {

    return (
        <>
            <CustomCursor />
            <NavBar />
            <Particle />
            <Outlet />
        </>
    )
}

export default Index;