import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SmokingRoomsIcon from '@material-ui/icons/SmokingRooms';
import './NavBar.css'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(1),
    },
    title: {
      fontFamily: 'Fredoka One',
      marginRight: theme.spacing(2),
    },
    offset: theme.mixins.toolbar
  }));

export const NavBar = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="sticky" color="secondary">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="Inherit" aria-label="menu">
            <SmokingRoomsIcon />
          </IconButton>
          <Typography variant="h5" className={classes.title}>
            Enjoint
          </Typography>
          <Button color="inherit" edge="start">Productos</Button>
          <Button color="inherit">Quienes Somos?</Button>
          <Button color="inherit">Contacto</Button>
        </Toolbar>
      </AppBar>
      <div className={classes.offset}></div>
    </div>
  );
}

