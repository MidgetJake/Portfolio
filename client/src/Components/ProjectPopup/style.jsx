export default theme => ({
    topSect: {
        display: 'flex',
        alignItems: 'center',
    },
    avatar: {
        height: 100,
        width: 100,
    },
    titleSect: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 24,
    },
    linkButtons: {
        display: 'flex',
        justifyContent: 'center',
        bottom: 0,
    },
    dialog: {
        display: 'flex',
        flexDirection: 'column',
    },
    close: {
        width: 'calc(100% - 10px)',
        display: 'flex',
        justifyContent: 'flex-end',
        padding: 5,
    },
});