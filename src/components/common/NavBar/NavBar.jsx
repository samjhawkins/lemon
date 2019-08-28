import React, {Component} from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Avatar,
    Container,
    Hidden
} from '@material-ui/core/index';
import ProfileOptions from "./ProfileOptions/ProfileOptions";
import Grid from "@material-ui/core/Grid/index";
import {withStyles} from "@material-ui/core/styles";
import logo from "../../../images/logo.png";

const styles = theme => ({
    avatar: {
        margin: 10,
        width: 60,
        height: 60,
    }
});

export class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            auth: true
        };
        this.handleClose = this.handleClose.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle() {
        this.setState({open: !this.state.open});
    }

    handleClose() {
        this.setState({open: false});
    }

    render() {
        const {classes} = this.props;
        return (
            <AppBar position='fixed'>
                <Toolbar>
                    <Container maxWidth="md">
                        <Grid justify={"space-between"} container>
                            <Grid item container sm={4} alignContent={"center"} justify={"center"}>
                                <Avatar
                                    alt="Lemon Logo"
                                    src={logo}
                                    className={classes.avatar}
                                />
                                <Typography
                                    variant='h6'
                                    display={'inline'}
                                    style={{alignSelf: "center"}}
                                >
                                    Lemon
                                </Typography>
                            </Grid>
                            <Grid item container xs={12} sm={1} justify={"center"}>
                                <ProfileOptions
                                    open={this.state.open}
                                    auth={this.state.auth}
                                    handleClose={this.handleClose}
                                    handleToggle={this.handleToggle}
                                />
                            </Grid>
                        </Grid>
                    </Container>

                </Toolbar>
            </AppBar>
        );
    }
};

export default withStyles(styles)(NavBar);