import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainPage from './MainPage/MainPage';
import InformationPage from './InformationPage/InformationPage';
import IndexPage from './BookcontentsPage/IndexPage/IndexPage';
import ChapterPage from './BookcontentsPage/ChapterPage/ChapterPage';
import RootLayout from './RootLayout';
import ErrorPage from './ErrorPage/ErrorPage';

export const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '',
                element: <MainPage />,
            },
            {
                path: 'info',
                element: <InformationPage />,
            },
            {
                path: ':bookname',
                children: [
                    {
                        path: 'index',
                        element: <IndexPage />,
                    },
                    {
                        path: ':chapter',
                        element: <ChapterPage />,
                    },
                ],
            },
        ],
    },
]);
