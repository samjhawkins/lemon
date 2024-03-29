import React, {Component} from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Avatar,
    Container,
} from '@material-ui/core/index';
import ProfileOptions from "./Profile/ProfileOptions";
import Grid from "@material-ui/core/Grid/index";
import {withStyles} from "@material-ui/core/styles";
import logo from "../../../images/logo.png";

const styles = theme => ({
    avatar: {
        margin: theme.spacing(5),
        width: theme.spacing(30),
        height: theme.spacing(30),
    },
    padIt: {
        padding: theme.spacing(10)
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
            <AppBar position='sticky' >
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
                                    variant='h5'
                                    display={'inline'}
                                    style={{alignSelf: "center"}}
                                >
                                    Lemon&nbsp;&nbsp;
                                </Typography>
                            </Grid>
                            <Grid item container xs={12} sm={4} justify={"center"} className={classes.padIt}>
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