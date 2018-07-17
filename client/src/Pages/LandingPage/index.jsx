import React from 'react';
import withStyle from '@material-ui/core/styles/withStyles';
import classnames from 'classnames';
import LandingStyle from './style';

import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Player from 'react-player';

import TwitterIcon from 'mdi-react/TwitterIcon';
import GitHubIcon from 'mdi-react/GithubFaceIcon';
import LinkedInIcon from 'mdi-react/LinkedinIcon';

import BackImage from 'Images/mountainBackground.jpg';
import Face from 'Images/face.jpg';
import SnowTrailVideo from 'Videos/snowtrail.mp4';
import ForcedImg from 'Images/forced.png';

const tiledata = [
    {
        img: SnowTrailVideo,
        title: 'Snow trail shader. Made with Unity',
        featured: false,
        video: true,
        onClick: () => {},
    },
    {
        img: ForcedImg,
        title: 'Forced',
        featured: true,
        video: false,
        onClick: () => {alert('FORCED');},
    },
    {
        img: ForcedImg,
        title: 'Forced',
        featured: true,
        video: false,
        onClick: () => {alert('FORCED');},
    },
    {
        img: SnowTrailVideo,
        title: 'Snow trail shader. Made with Unity',
        featured: false,
        video: true,
        onClick: () => {},
    },
    {
        img: SnowTrailVideo,
        title: 'Snow trail shader. Made with Unity',
        featured: false,
        video: true,
        onClick: () => {},
    },
    {
        img: ForcedImg,
        title: 'Forced',
        featured: true,
        video: false,
        onClick: () => {alert('FORCED');},
    },
];

class LandingPage extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div style={{ overflow: 'hidden', minHeight: '100vh', paddingBottom: 30, }}>
                <div className={classes.header} id={'particles-js'}>
                    <img src={BackImage} className={classes.headerImage}/>

                </div>
                <div className={classes.content}>
                    <Avatar className={classes.avatar} src={Face} alt={'Picture of me'}/>
                    <Card className={classes.card} elevation={10}>
                        <div className={classes.headerText}>
                            <Typography variant={'display1'} align={'center'} style={{ color: '#444', marginBottom: 10, fontWeight: 'bold' }}>
                                Jake Barter
                            </Typography>
                            <Typography variant={'subheading'} align={'center'}>
                                I make games
                            </Typography>
                        </div>

                        <div className={classes.gamesList}>
                            <GridList cellHeight={400} spacing={5} className={classes.gridList} cols={3}>
                                {tiledata.map(tile => (
                                    <GridListTile key={tile.img} cols={tile.featured ? 2 : 1} rows={1} className={classes.tileItem}>
                                        <Button className={classes.tileButton} onClick={tile.onClick}>
                                            {tile.title}
                                        </Button>
                                        {tile.video ? (
                                            <Player url={tile.img} playing loop volume={0} width={'auto'} height={'100%'}/>
                                        ) : (
                                            <img src={tile.img} alt={tile.title}/>
                                        )}
                                    </GridListTile>
                                ))}
                            </GridList>
                        </div>


                        <div className={classes.social}>
                            <IconButton component='a' href='https://twitter.com/midgetjake' target='_blank'><TwitterIcon/></IconButton>
                            <IconButton component='a' href='https://github.com/midgetjake' target='_blank'><GitHubIcon/></IconButton>
                            <IconButton component='a' href='https://www.linkedin.com/in/jake-barter-570458127/' target='_blank'><LinkedInIcon/></IconButton>
                        </div>
                    </Card>
                </div>
            </div>
        );
    };
}

export default withStyle(LandingStyle)(LandingPage);