import React from 'react';
import {Route} from 'react-router-dom'
import {unAuthRoutesConfig, authRoutesConfig} from "./routes.config";

const renderRoutes = (auth) => {
    const routesConfig = auth ? authRoutesConfig : unAuthRoutesConfig;
    return routesConfig.map((route, index) => {
        return <Route key={index} {...route}/>
    });
};

export default renderRoutes;
