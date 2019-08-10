import SignIn from "../components/Account/SignIn/SignIn";
import Register from "../components/Account/Register/Register";
import Home from "../components/Home/Home";
import About from "../components/About";
import React from "react";
import PageNotFound from "../components/PageNotFound";

export const authRoutesConfig = [{
    path: "/signIn",
    exact: true,
    component: SignIn
}, {
    path: "/register",
    exact: true,
    component: Register
}, {
    path: "/",
    exact: true,
    component: Home
}, {
    path: "/about",
    exact: true,
    component: About
}, {
    render: PageNotFound
}];

export const unAuthRoutesConfig = [{
    path: "/register",
    exact: true,
    component: Register
}, {
    path: "/(signIn)?",
    exact: true,
    component: SignIn
}, {
    render: PageNotFound
}];