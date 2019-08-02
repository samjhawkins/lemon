import React from 'react';
import {
    Card, CardActions, CardContent, Typography, Button
} from "@material-ui/core";

export default class WelcomeCard extends React.Component {
    render() {
        return (
            <Card>
                <CardContent>
                    <Typography variant="h1" gutterBottom>
                        Welcome!
                    </Typography>
                    <Typography variant="h2" gutterBottom>
                        This is Sam's portfolio website. Here you can see all of the weird and wonderful
                        projects that Sam is involved in...
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="large" variant="contained" color="primary">
                        Learn About Sam
                    </Button>
                    <Button size="large" variant="contained">
                        Explore Site
                    </Button>
                </CardActions>
            </Card>
        );
    }
}