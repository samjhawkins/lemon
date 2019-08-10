import React from 'react';
import {render} from 'react-dom';
import App from './App.jsx';
import {CssBaseline} from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import theme from './themes/theme';

render(
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <App/>
    </ThemeProvider>
,  document.getElementById('app'));