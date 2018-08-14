import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import withMobileDialog from "@material-ui/core/withMobileDialog";
import style from './style';

import Card from '@material-ui/core/Card';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Carousel from 'Components/Carousel';

import GitHubIcon from 'mdi-react/GithubFaceIcon';
import DownloadIcon from 'mdi-react/DownloadIcon';
import CloseIcon from 'mdi-react/CloseIcon';

class ProjectPopup extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            open: this.props.open || false,
        }
    }

    componentWillReceiveProps(props) {
        this.setState({ open: props.open });
    }

    handleClose = () => {
        this.setState({ open: false });
        this.props.onClose();
    };

    render() {
        const { classes, title, desc, altText, imgSrc, github = null, downloadLink = null, gallery = null, fullScreen, children } = this.props;

        return (
            <Dialog open={this.state.open} scroll={'paper'} onClose={this.handleClose} fullScreen={fullScreen}>
                {fullScreen ? (
                    <div className={classes.close}>
                        <IconButton onClick={this.handleClose}>
                            <CloseIcon/>
                        </IconButton>
                    </div>
                ) : (
                    null
                )}
                <DialogContent className={classes.dialog}>
                    <div className={classes.topSect}>
                        <Avatar alt={altText} src={imgSrc} className={classes.avatar} />
                        <div className={classes.titleSect}>
                            <Typography variant={'headline'}>{title}</Typography>
                            <Typography variant={'caption'}>{desc}</Typography>
                        </div>
                    </div>

                    {gallery ? (
                        <Carousel gallery={gallery}/>
                    ) : (
                        null
                    )}

                    {github || downloadLink ? (
                        <div className={classes.linkButtons}>
                            {github ? (
                                <IconButton component='a' href={github} target='_blank'><GitHubIcon/></IconButton>
                            ) : (
                                null
                            )}

                            {downloadLink ? (
                                <IconButton component='a' href={downloadLink} target='_blank'><DownloadIcon/></IconButton>
                            ) : (
                                null
                            )}
                        </div>
                    ) : (
                        null
                    )}
                    {children}
                </DialogContent>
            </Dialog>
        );
    };
}

export default withMobileDialog()(withStyles(style)(ProjectPopup));