import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {NavBarStyles} from './NavBarStyles'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SmokingRoomsIcon from '@material-ui/icons/SmokingRooms';
import {Link} from 'react-router-dom'


const useStyles = makeStyles((theme) => NavBarStyles(theme));

export const NavBar = props => {
  
  const classes = useStyles();
  const {children} = props;
  const indoor = "Indoor";
  const sustratos = "Sustratos";
  const fertilizantes = "Fertilizantes";

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.barra}>
        <Toolbar>
            <Link to={'/'} className={classes.title}>
               <Typography variant="h5" className={classes.title}>
                 Enjoint
               </Typography>
             </Link>
             <SmokingRoomsIcon />
         <ul className={classes.linkList}>

           <li  className={classes.link}>
             <Link to={`/categoria/${indoor}`} className={classes.botones}>Indoor</Link>
           </li>
           <li  className={classes.link}>
             <Link to={`/categoria/${sustratos}`} className={classes.botones}>Sustratos</Link>
           </li>
           <li  className={classes.link}>
             <Link to={`/categoria/${fertilizantes}`} className={classes.botones}>Fertilizantes</Link>
           </li>
         </ul>
         {children}
        </Toolbar>
      </AppBar>
      <div className={classes.offset}></div>
    </div>
  );
}

export default NavBar;