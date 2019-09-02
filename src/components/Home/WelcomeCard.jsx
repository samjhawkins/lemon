import React from 'react';
import {
    Paper,
    Typography
} from "@material-ui/core/index";
import LinkedButton from "../common/Links/LinkedButton";

export default class WelcomeCard extends React.Component {
    render() {
        return (
            <Paper style={{marginTop: "20px", padding: "20px"}}>
                <Typography variant="h1" gutterBottom>
                    Welcome!
                </Typography>
                <Typography variant="h2" gutterBottom>
                    This is Sam's portfolio website. Here you can see all of the weird and wonderful
                    projects that Sam is involved in...
                </Typography>
                <LinkedButton
                    to={"/about"}
                    size={"large"}
                    text={"Learn About Sam"}
                    colour={"primary"}
                />
                <LinkedButton
                    to={"/"}
                    size={"large"}
                    text={"Explore Site"}
                />
            </Paper>
        );
    }
}