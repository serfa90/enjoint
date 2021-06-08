import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SmokingRoomsIcon from '@material-ui/icons/SmokingRooms';
import {CartWidget} from '../CartWidget/Cartwidget'
import Badge from '@material-ui/core/Badge';

const useStyles = makeStyles((theme) => ({

    menuButton: {
      marginRight: theme.spacing(1),
    },
    title: {
      fontFamily: 'Fredoka One',
      marginRight: theme.spacing(2),
      flexGrow: 1,
    },
    barra: {
      backgroundColor: 'green',
    },
    contacto: {
      marginRight: theme.spacing(10),
    },
    offset: theme.mixins.toolbar
  }));

export const NavBar = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="sticky" className={classes.barra}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="Inherit" aria-label="menu">
            <SmokingRoomsIcon />
          </IconButton>
          <Typography variant="h5" className={classes.title}>
            Enjoint
          </Typography>
          <Button color="inherit" edge="start">Productos</Button>
          <Button color="inherit">Quienes Somos?</Button>
          <Button color="inherit" className={classes.contacto}>Contacto</Button>
          <Badge badgeContent={5} color="secondary">
            <CartWidget className={classes.carrito}/>
          </Badge>
        </Toolbar>
      </AppBar>
      <div className={classes.offset}></div>
    </div>
  );
}

