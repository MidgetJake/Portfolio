import React from 'react';
import withStyle from 'material-ui/styles/withStyles';
import classnames from 'classnames';

import LandingStyle from 'Styles/Pages/LandingPage';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Card from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import ListItemText from 'material-ui/List/ListItemText';
import Avatar from'material-ui/Avatar';
import GridList from 'material-ui/GridList/GridList';
import GridListTile from 'material-ui/GridList/GridListTile';
import GridListTileBar from 'material-ui/GridList/GridListTileBar';
import Button from 'material-ui/Button';

// Icons
import JSIcon from 'mdi-react/LanguageJavascriptIcon';
import CSIcon from 'mdi-react/LanguageCsharpIcon';
import PYIcon from 'mdi-react/LanguagePythonIcon';
import JIcon from 'mdi-react/CoffeeIcon';
import CPPIcon from 'mdi-react/LanguageCppIcon';
import ReactIcon from 'mdi-react/ReactIcon';
import JQIcon from 'mdi-react/JqueryIcon';
import NodeIcon from 'mdi-react/NodejsIcon';
import MaterialIcon from 'mdi-react/MaterialUiIcon';
import GitIcon from 'mdi-react/GitIcon';
import UnityIcon from 'mdi-react/UnityIcon';
import UnrealIcon from 'Images/unreal.svg';
import DatabaseIcon from 'mdi-react/DatabaseIcon';
import PHPIcon from 'mdi-react/LanguagePhpIcon';
import MarkerIcon from 'mdi-react/MapMarkerIcon';
import CameraIcon from 'mdi-react/CameraIcon';

import BackImage from 'Images/mountainBackground.jpg';

const tiledata = [
    {
        img: BackImage,
        title: 'Image',
        featured: true,
    },
    {
        img: BackImage,
        title: 'Image',
        featured: false,
    },
    {
        img: BackImage,
        title: 'Image',
        featured: false,
    },
    {
        img: BackImage,
        title: 'Image',
        featured: false,
    },
    {
        img: BackImage,
        title: 'Image',
        featured: false,
    },
    {
        img: BackImage,
        title: 'Image',
        featured: false,
    },
    {
        img: BackImage,
        title: 'Image',
        featured: true,
    },
];

class LandingPage extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div style={{ overflow: 'hidden' }}>
                <div className={classes.header}>
                    <img src={BackImage} className={classes.headerImage}/>
                    <div>
                        <Typography variant={'display4'} align={'center'} style={{ color: '#fff' }}>
                            Hi,
                        </Typography>
                        <Typography variant={'display1'} align={'center'} style={{ color: '#fff' }}>
                            I'm Jake Barter
                        </Typography>
                        <Typography variant={'subheading'} align={'center'} style={{ color: '#fff' }}>
                            I'm a programmer that makes things
                        </Typography>
                    </div>
                </div>
                <Paper className={classes.contentPaper}>
                    <Typography variant={'display3'} align={'center'} style={{ color: '#222' }}>
                        What I can do
                    </Typography>
                    <Grid container className={classes.skillsGrid} spacing={24}>
                        <Grid item>
                            <Card className={classes.skillCard}>
                                <Typography variant={'title'} align={'center'} style={{ color: '#222' }}>
                                    Languages
                                </Typography>
                                <List>
                                    <ListItem>
                                        <Avatar style={{ background: '#444' }}>
                                            <JSIcon color={'#f7df1e'} />
                                        </Avatar>
                                        <ListItemText primary="Javascript" secondary="4+ Years" />
                                    </ListItem>
                                    <ListItem>
                                        <Avatar style={{ background: '#3571a3' }}>
                                            <PYIcon color={'#ffcf3f'} />
                                        </Avatar>
                                        <ListItemText primary="Python" secondary="2+ Years" />
                                    </ListItem>
                                    <ListItem>
                                        <Avatar style={{ background: '#e74c3c' }}>
                                            <JIcon color={'#ffffff'} />
                                        </Avatar>
                                        <ListItemText primary="Java" secondary="1+ Years" />
                                    </ListItem>
                                    <ListItem>
                                        <Avatar style={{ background: '#672179' }}>
                                            <CSIcon color={'#fff'} />
                                        </Avatar>
                                        <ListItemText primary="C-Sharp" secondary="1+ Years" />
                                    </ListItem>
                                    <ListItem>
                                        <Avatar style={{ background: '#444444' }}>
                                            <DatabaseIcon color={'#fff'} />
                                        </Avatar>
                                        <ListItemText primary="PostgreSQL" secondary="Know my way around" />
                                    </ListItem>
                                    <ListItem>
                                        <Avatar style={{ background: '#6181b6' }}>
                                            <PHPIcon color={'#fff'} />
                                        </Avatar>
                                        <ListItemText primary="PHP" secondary="Know my way around" />
                                    </ListItem>
                                    <ListItem>
                                        <Avatar style={{ background: '#007ac3' }}>
                                            <CPPIcon color={'#fff'} />
                                        </Avatar>
                                        <ListItemText primary="C++" secondary="A small amount" />
                                    </ListItem>
                                </List>
                            </Card>
                        </Grid>
                        <Grid item>
                            <Card className={classes.skillCard}>
                                <Typography variant={'title'} align={'center'} style={{ color: '#222' }}>
                                    Frameworks/Libraries
                                </Typography>
                                <List>
                                    <ListItem>
                                        <Avatar style={{ background: '#78b743' }}>
                                            <NodeIcon color={'#ffffff'} />
                                        </Avatar>
                                        <ListItemText primary="NodeJS" secondary="2+ Years" />
                                    </ListItem>
                                    <ListItem>
                                        <Avatar style={{ background: '#076aac' }}>
                                            <JQIcon color={'#79cef4'} />
                                        </Avatar>
                                        <ListItemText primary="JQuery" secondary="2+ Years" />
                                    </ListItem>
                                    <ListItem>
                                        <Avatar style={{ background: '#292929' }}>
                                            <ReactIcon color={'#00dafb'} />
                                        </Avatar>
                                        <ListItemText primary="React" secondary="1+ Years" />
                                    </ListItem>
                                    <ListItem>
                                        <Avatar style={{ background: '#2196f3' }}>
                                            <MaterialIcon color={'#ffffff'} />
                                        </Avatar>
                                        <ListItemText primary="Material UI" secondary="1> Years" />
                                    </ListItem>
                                    <ListItem>
                                        <Avatar style={{ background: '#444444' }}>
                                            <MarkerIcon color={'#ffffff'} />
                                        </Avatar>
                                        <ListItemText primary="PostGIS" secondary="Basic Level" />
                                    </ListItem>
                                </List>
                            </Card>
                        </Grid>
                        <Grid item>
                            <Card className={classes.skillCard}>
                                <Typography variant={'title'} align={'center'} style={{ color: '#222' }}>
                                    Software/Tools
                                </Typography>
                                <List>
                                    <ListItem>
                                        <Avatar style={{ background: '#444444' }}>
                                            <GitIcon color={'#f05133'} />
                                        </Avatar>
                                        <ListItemText primary="Git" secondary="Experienced" />
                                    </ListItem>
                                    <ListItem>
                                        <Avatar style={{ background: '#444444' }}>
                                            <UnityIcon color={'#fff'} />
                                        </Avatar>
                                        <ListItemText primary="Unity" secondary="1+ Years" />
                                    </ListItem>
                                    <ListItem>
                                        <Avatar style={{ background: '#444444' }}>
                                            <UnrealIcon />
                                        </Avatar>
                                        <ListItemText primary="Unreal Engine" secondary="1> Years" />
                                    </ListItem>
                                    <ListItem>
                                        <Avatar style={{ background: '#444444' }}>
                                            <CameraIcon color={'#fff'} />
                                        </Avatar>
                                        <ListItemText primary="Photoshop" secondary="Intermediate" />
                                    </ListItem>
                                </List>
                            </Card>
                        </Grid>
                    </Grid>
                </Paper>
                <Paper className={classnames(classes.contentPaper, classes.darkBack)}>
                    <Typography variant={'display3'} align={'center'} style={{ color: '#fff', marginBottom: 13 }}>
                        What I've done
                    </Typography>
                    <GridList cellHeight={400} spacing={1} className={classes.gridList} cols={3}>
                        {tiledata.map(tile => (
                            <GridListTile key={tile.img} cols={tile.featured ? 2 : 1} rows={1}>
                                <Button className={classes.tileButton}>
                                    {tile.title}
                                </Button>
                                <img src={tile.img} alt={tile.title} />
                                {/*<GridListTileBar
                                    title={tile.title}
                                    titlePosition="top"
                                    actionPosition="left"
                                    className={classes.titleBar}
                                />*/}
                            </GridListTile>
                        ))}
                    </GridList>
                </Paper>
            </div>
        );
    };
}

export default withStyle(LandingStyle)(LandingPage);