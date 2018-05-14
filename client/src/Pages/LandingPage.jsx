import React from 'react';
import withStyle from '@material-ui/core/styles/withStyles';
import classnames from 'classnames';

import LandingStyle from 'Styles/Pages/LandingPage';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from'@material-ui/core/Avatar';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Button from '@material-ui/core/Button';
import Player from 'react-player';

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
import MarkerIcon from 'mdi-react/MapMarkerIcon';
import CameraIcon from 'mdi-react/CameraIcon';
import ShaderIcon from 'mdi-react/SpotlightBeamIcon';
import JetBrainsIcon from 'Images/jetbrains.svg';
import VSIcon from 'mdi-react/VisualstudioIcon';

import SnowTrailVideo from 'Videos/snowtrail.mp4';

import BackImage from 'Images/mountainBackground.jpg';

const tiledata = [
        {
        img: SnowTrailVideo,
        title: 'Snow trail shader. Made with Unity',
        featured: false,
        video: true,
    },
];

class LandingPage extends React.Component {

    render() {
        const { classes } = this.props;

        return (
            <div style={{ overflow: 'hidden' }}>
                <div className={classes.header}>
                    <img src={BackImage} className={classes.headerImage}/>
                    <div className={classes.headerText}>
                        <Typography variant={'display4'} align={'center'} style={{ color: '#fff' }}>
                            Hi,
                        </Typography>
                        <Typography variant={'display1'} align={'center'} style={{ color: '#fff' }}>
                            I'm Jake Barter
                        </Typography>
                        <Typography variant={'subheading'} align={'center'} style={{ color: '#fff' }}>
                            I do web stuff and make games
                        </Typography>
                    </div>
                </div>
                <Card className={classes.contentPaper}>
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
                                        <Avatar style={{ background: '#444444' }}>
                                            <ShaderIcon color={'#ffffff'} />
                                        </Avatar>
                                        <ListItemText primary="Unity Shader" secondary="Basic Level" />
                                    </ListItem>
                                    <ListItem>
                                        <Avatar style={{ background: '#2196f3' }}>
                                            <MaterialIcon color={'#ffffff'} />
                                        </Avatar>
                                        <ListItemText primary="Material UI" secondary="React/Unity libraries" />
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
                                            <JetBrainsIcon/>
                                        </Avatar>
                                        <ListItemText primary="JetBrains Software" secondary="WebStorm, PyCharm, etc" />
                                    </ListItem>
                                    <ListItem>
                                        <Avatar style={{ background: '#444444' }}>
                                            <CameraIcon color={'#fff'} />
                                        </Avatar>
                                        <ListItemText primary="Photoshop" secondary="Intermediate" />
                                    </ListItem>
                                    <ListItem>
                                        <Avatar style={{ background: '#68217a' }}>
                                            <VSIcon color={'#fff'} />
                                        </Avatar>
                                        <ListItemText primary="Visual Studio" secondary="With Unity (C#)" />
                                    </ListItem>
                                </List>
                            </Card>
                        </Grid>
                    </Grid>
                </Card>
                <Card className={classnames(classes.contentPaper, classes.darkBack)} elevation={0}>
                    <Typography variant={'display3'} align={'center'} style={{ color: '#fff', marginBottom: 13 }}>
                        What I've done
                    </Typography>
                    <GridList cellHeight={400} spacing={1} className={classes.gridList} cols={3}>
                        {tiledata.map(tile => (
                            <GridListTile key={tile.img} cols={tile.featured ? 2 : 1} rows={1}>
                                <Button className={classes.tileButton}>
                                    {tile.title}
                                </Button>
                                {tile.video ? (
                                    <Player url={tile.img} playing loop volume={0} width={'auto'} height={'100%'}/>
                                ) : (
                                    <img src={tile.img} alt={tile.title} />
                                )}
                            </GridListTile>
                        ))}
                    </GridList>
                </Card>
            </div>
        );
    };
}

export default withStyle(LandingStyle)(LandingPage);