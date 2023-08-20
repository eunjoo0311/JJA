import React from 'react';
import { appRouter } from './pages/Router';
import { RouterProvider } from 'react-router-dom';

export default function App() {
    return (
        <>
            <RouterProvider router={appRouter} fallbackElement={null} />
        </>
    );
}
