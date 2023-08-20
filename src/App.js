import React from 'react';
import { appRouter } from './pages/Router';
import { RouterProvider } from 'react-router-dom';
import { Global, ThemeProvider } from '@emotion/react';
import globalStyle from './style/GlobalStyle';
import theme from './style/theme';

export default function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Global styles={globalStyle} />
                <RouterProvider router={appRouter} fallbackElement={null} />
            </ThemeProvider>
        </>
    );
}
