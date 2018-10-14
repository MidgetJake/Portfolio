import React from 'react';
import PropTypes from 'prop-types';
import loginFormStyle from './style';
import withStyles from '@material-ui/core/styles/withStyles';
import axios from 'axios';
import Link from 'react-router-dom/Link';

import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';

class LoginCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            error: false,
            errorMsg: '',
        };
    }

    submitForm = e => {
        e.preventDefault();
        axios.post('/login', {
            username: this.state.username,
            password: this.state.password,
        }).then((response) => {
            console.log(response);
            if (response.data.success) {
                window.location.replace('/admin');
            } else {
                this.setState({ error: true, errorMsg: response.data.error });
            }
        }).catch((error) => {
            console.log(error);
        });
    };

    closeSnack = () => {
        this.setState({ error: false });
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.mainContainer}>
                <Card className={classes.card}>
                    <form onSubmit={this.submitForm} method="post">
                        <CardContent>
                            <Typography variant="headline" component="h2">
                                Login
                            </Typography>
                            <TextField
                                id="username"
                                name="username"
                                label="Username"
                                className={classes.textField}
                                value={this.state.username}
                                onChange={this.handleChange('username')}
                                margin="normal"
                            />
                            <TextField
                                id="password"
                                name="password"
                                label="Password"
                                className={classes.textField}
                                value={this.state.password}
                                type='password'
                                autoComplete='current-password'
                                onChange={this.handleChange('password')}
                                margin="normal"
                            />
                        </CardContent>
                        <CardActions>
                            <Button size="small" variant="raised" color="primary" type='submit' style={{ margin: 0, marginBottom: 4 }}>
                                Login
                            </Button>
                        </CardActions>
                    </form>
                </Card>
                <Snackbar
                    open={this.state.error}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                    message={<span>{this.state.errorMsg}</span>}
                    autoHideDuration={10000}
                    onClose={this.closeSnack}
                />
            </div>
        );
    }
}

LoginCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(loginFormStyle)(LoginCard);