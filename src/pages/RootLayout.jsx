import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';

export default function RootLayout() {
    return (
        <>
            <Header />
            Layout
            <Outlet />
        </>
    );
}
