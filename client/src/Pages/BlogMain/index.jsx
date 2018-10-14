import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from './style';
import axios from 'axios';

import BlogListItem from 'Components/BlogListItem';
import BlogFeaturedItem from 'Components/BlogFeaturedItem';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';

class BlogMain extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            latest_blogs: [],
            featured_blogs: [],
        };
    }

    componentWillMount() {
        axios.get('/api/latest/5').then(resp => {
            if (resp.data.success) {
                const blogs = [];
                for (let blog of resp.data.rows) {
                    blogs.push(
                        <BlogListItem key={blog.postID} title={blog.title} desc={blog.description}/>
                    );
                }

                this.setState({ latest_blogs: blogs });
            }
        });

        axios.get('/api/featured').then(resp => {
            if (resp.data.success) {
                const blogs = [];
                for (let blog of resp.data.rows) {
                    blogs.push(
                        <BlogFeaturedItem key={blog.postID} title={blog.title} desc={blog.description}/>
                    );
                }

                this.setState({ featured_blogs: blogs });
            }
        });
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <div className={classes.lists}>
                    <div className={classes.blogList}>
                        <div className={classes.featuredTitle}>
                            <Typography variant={'headline'} style={{ marginBottom: 10 }}>Latest posts</Typography>
                            <Divider/>
                        </div>
                        {this.state.latest_blogs}
                    </div>
                    <div className={classes.otherList}>
                        <div className={classes.featuredTitle}>
                            <Typography variant={'headline'} style={{ marginBottom: 10 }}>Featured posts</Typography>
                            <Divider/>
                        </div>
                        <div className={classes.featuredList}>
                            {this.state.featured_blogs}
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default withStyles(styles)(BlogMain);