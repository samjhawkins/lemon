import React, {Component} from 'react';
import WelcomeCard from "./WelcomeCard";
import {Container} from "@material-ui/core/index";

export default class Home extends Component {
    render() {
        return (
            <Container maxWidth={"lg"}>
                <WelcomeCard/>
            </Container>
        )
    }
}