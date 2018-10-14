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

class CreatePost extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            description: '',
            content: '',
            tags: '',
        };
    }

    submitForm = e => {
        e.preventDefault();
        const tags = this.state.tags.split(' ');

        axios.post('/api/create', {
            title: this.state.title,
            description: this.state.description,
            content: this.state.content,
            tags: tags,
        }).then((response) => {
            console.log(response.data);
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
                                New Post
                            </Typography>
                            <TextField
                                id="title"
                                name="title"
                                label="Post Title"
                                className={classes.textField}
                                value={this.state.title}
                                onChange={this.handleChange('title')}
                                margin="normal"
                            />
                            <TextField
                                id="standard-textarea"
                                label="Post Description"
                                placeholder="Supports Markdown"
                                multiline
                                value={this.state.description}
                                onChange={this.handleChange('description')}
                                className={classes.textField}
                                margin="normal"
                            />
                            <TextField
                                id="tags"
                                name="tags"
                                label="Post Tags (separate with spaces)"
                                className={classes.textField}
                                value={this.state.tags}
                                onChange={this.handleChange('tags')}
                                margin="normal"
                            />
                            <TextField
                                id="standard-textarea"
                                label="Post Content"
                                placeholder="Supports Markdown"
                                multiline
                                value={this.state.content}
                                onChange={this.handleChange('content')}
                                className={classes.textField}
                                margin="normal"
                            />
                        </CardContent>
                        <CardActions>
                            <Button size="small" variant="raised" color="primary" type='submit' style={{ margin: 0, marginBottom: 4 }}>
                                Create Post
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

CreatePost.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(loginFormStyle)(CreatePost);