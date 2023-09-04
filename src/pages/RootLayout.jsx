import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/header';

export default function RootLayout() {
    return (
        <>
            <Header />
            Layout
            <Outlet />
        </>
    );
}
