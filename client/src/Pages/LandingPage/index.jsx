import React from 'react';
import withStyle from '@material-ui/core/styles/withStyles';
import withMobileDialog from '@material-ui/core/withMobileDialog';
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
import ProjectPopup from 'Components/ProjectPopup';

import TwitterIcon from 'mdi-react/TwitterIcon';
import GitHubIcon from 'mdi-react/GithubFaceIcon';
import LinkedInIcon from 'mdi-react/LinkedinIcon';

import BackImage from 'Images/mountainBackground.jpg';
import Face from 'Images/face.jpg';

// Forced Images
import ForcedImg from 'Images/Forced/forced.png';
import ForcedThumb from 'Images/Forced/ForcedThumbnail.png';
import ForcedImg1 from 'Images/Forced/ForcedImg1.png';
import ForcedImg2 from 'Images/Forced/ForcedImg2.png';
import ForcedImg3 from 'Images/Forced/ForcedImg3.png';

// Only Space Images
import SpaceThumb from 'Images/OnlySpace/SpaceThumb.png';
import SpaceFront from 'Images/OnlySpace/FrontImage.png';
import SpaceImg1 from 'Images/OnlySpace/Img1.png';
import SpaceImg2 from 'Images/OnlySpace/Img2.png';
import SpaceImg3 from 'Images/OnlySpace/Img3.png';
import SpaceImg4 from 'Images/OnlySpace/Img4.png';

// MidgetBot Avatar
import MidgetBotAvatar from 'Images/MidgetBot/BotFace.png';
import MidgetBotFront from 'Images/MidgetBot/DiscordIcon.png';

class LandingPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            projectDialog: null,
            tiledata: [
                {
                    img: ForcedImg,
                    title: 'Forced (GDQ One Mechanic Jam)',
                    featured: true,
                    video: false,
                    onClick: () => {
                        this.setState({
                            projectDialog: <ProjectPopup
                                open={true}
                                imgSrc={ForcedThumb}
                                altText={'Forced Avatar'}
                                title={'Forced - GDQ Game Jam entry'}
                                desc={'Developed in unity for the July 2018 GDQ one mechanic game jam. '}
                                github={'https://github.com/MidgetJake/GDQ-One-Mechanic-Jam'}
                                downloadLink={'https://valesoft.itch.io/forced'}
                                onClose={() => this.setState({ projectDialog: null }, () => {
                                    const body = document.body;
                                    body.style = 'padding: 0; margin: 0; width:100vw; overflow-x: hidden;';
                                })}
                                gallery={[
                                        { imgPath: ForcedImg, },
                                        { imgPath: ForcedImg1, },
                                        { imgPath: ForcedImg2, },
                                        { imgPath: ForcedImg3, },
                                    ]
                                }
                            />,
                        });
                    },
                },
                {
                    img: SpaceFront,
                    title: 'Only Space (Ludum Dare 42)',
                    featured: false,
                    video: false,
                    onClick: () => {
                        this.setState({
                            projectDialog: <ProjectPopup
                                open={true}
                                imgSrc={SpaceThumb}
                                altText={'Only Space Avatar'}
                                title={'Only Space - Ludum Dare 42 Jam entry'}
                                desc={'Created in only 72 hours for Ludum Dare 42. The theme was "Running out of space"'}
                                github={'https://github.com/MidgetJake/LD-Jam'}
                                downloadLink={'https://valesoft.itch.io/only-space'}
                                onClose={() => this.setState({ projectDialog: null }, () => {
                                    const body = document.body;
                                    body.style = 'padding: 0; margin: 0; width:100vw; overflow-x: hidden;';
                                })}
                                gallery={[
                                        { imgPath: SpaceFront, },
                                        { imgPath: SpaceImg1, },
                                        { imgPath: SpaceImg2, },
                                        { imgPath: SpaceImg3, },
                                        { imgPath: SpaceImg4, },
                                    ]
                                }
                            />,
                        });
                    },
                },
                {
                    img: MidgetBotFront,
                    title: 'MidgetBot - Discord Bot',
                    featured: false,
                    video: false,
                    onClick: () => {
                        this.setState({
                            projectDialog: <ProjectPopup
                                open={true}
                                imgSrc={MidgetBotAvatar}
                                altText={'MidgetBot Avatar'}
                                title={'MidgetBot - Discord Bot'}
                                desc={'Created using NodeJS and has a few basic functionalities: AutoMod, Fun Commands, User Points, etc...'}
                                github={'https://github.com/MidgetJake/MidgetBot'}
                                onClose={() => this.setState({ projectDialog: null }, () => {
                                    const body = document.body;
                                    body.style = 'padding: 0; margin: 0; width:100vw; overflow-x: hidden;';
                                })}
                                /*gallery={[
                                        { imgPath: SpaceFront, },
                                        { imgPath: SpaceImg1, },
                                        { imgPath: SpaceImg2, },
                                        { imgPath: SpaceImg3, },
                                        { imgPath: SpaceImg4, },
                                    ]
                                }*/
                            />,
                        });
                    },
                },
            ],
        };
    }

    render() {
        const { classes, fullScreen } = this.props;

        return (
            <div style={{ overflow: 'hidden', minHeight: '100vh' }}>
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
                                I make games & other things
                            </Typography>
                        </div>

                        <div className={classes.gamesList}>
                            <GridList cellHeight={400} spacing={fullScreen ? 0 : 5} className={classes.gridList} cols={fullScreen ? 1 : 3}>
                                {this.state.tiledata.map(tile => (
                                    <GridListTile key={tile.img} cols={tile.featured ? fullScreen ? 1 : 2 : 1} rows={1} className={classes.tileItem}>
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

                        {this.state.projectDialog}


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

export default withMobileDialog()(withStyle(LandingStyle)(LandingPage));