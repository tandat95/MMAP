import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';

const useStyles = makeStyles(theme => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        position: 'absolute',
        zIndex: 100,
        top: '7px',
        left: '7px',
        alignItems: 'center',
        borderRadius: 8,
        width: 400,
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10
    },
    directIconButton: {
        padding: 10,
        color: '#679df6'
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));

export default function SearchBar(props) {
    const classes = useStyles();
    return (
        <Paper className={classes.root}>
            <IconButton className={classes.iconButton} aria-label="menu" onClick={props.handlerOpenMenu}>
                <MenuIcon />
            </IconButton>
            <InputBase
                className={classes.input}
                placeholder="Nhập từ khóa.."
                inputProps={{ 'aria-label': 'search vbd map' }}
            />
            <IconButton className={classes.iconButton} aria-label="search">
                <SearchIcon />
            </IconButton>
            <Divider className={classes.divider} orientation="vertical" />
            <IconButton className={classes.directIconButton} aria-label="directions">
                <DirectionsIcon />
            </IconButton>
        </Paper>
    );
}