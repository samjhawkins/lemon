import React from "react";
import SignIn from "../components/Account/SignIn/SignIn";
import PasswordReset from "../components/Account/PasswordReset/PasswordReset";
import Register from "../components/Account/Register/Register";
import Home from "../components/Home/Home";
import About from "../components/About";
import MyAccount from "../components/Account/MyAccount/MyAccount";
import SignOut from "../components/Account/SignOut/SignOut";
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
    path: "/myAccount",
    exact: true,
    component: MyAccount
}, {
    path: "/signOut",
    exact: true,
    component: SignOut
}, {
    render: PageNotFound
}];

export const unAuthRoutesConfig = [{
    path: "/register",
    exact: true,
    component: Register
}, {
    path: "/passwordReset",
    exact: true,
    component: PasswordReset
}, {
    path: "/(signIn)?",
    exact: true,
    component: SignIn
}, {
    render: PageNotFound
}];