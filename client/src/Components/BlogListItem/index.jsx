import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from './style';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Markdown from 'Modules/Markdown';

class BlogListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const { classes, title='Placeholder Title', desc='Placeholder description' } = this.props;

        return (
            <div className={classes.root}>
                <CardContent>
                    <Typography variant={'headline'}>{title}</Typography>
                    <Divider/>
                    <Markdown className={classes.descText}>
                        {desc}
                    </Markdown>
                </CardContent>
                <CardActions className={classes.actions}>
                    <Button>Continue reading...</Button>
                </CardActions>
            </div>
        );
    };
}

export default withStyles(styles)(BlogListItem);