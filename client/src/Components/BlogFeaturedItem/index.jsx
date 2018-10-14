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
            <Card className={classes.root}>
                <div className={classes.content}>
                    <Typography variant={'subheading'}>{title}</Typography>
                    <Divider/>
                    <Markdown className={classes.desc} variant={'caption'}>
                        {desc}
                    </Markdown>
                </div>
                <CardActions className={classes.actions}>
                    <Button>Read Post</Button>
                </CardActions>
            </Card>
        );
    };
}

export default withStyles(styles)(BlogListItem);