import React from 'react';
import { makeStyles } from '@material-ui/core'
import {ItemStyle} from './ItemStyle'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyle = makeStyles((theme) => ItemStyle(theme));

export const Item = props => {

    const classes = useStyle();
    const { producto } = props;

    return <>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              width="100%"
              image= {producto.picture.foto}
              title= {producto.picture.alt}
            />
            <CardContent className={classes.cardContenedor}>
              <Typography gutterBottom variant="h6" component="h2" className={classes.title}>{producto.title}</Typography>
              <Typography variant="body1" color="textSecondary" component="p" className={classes.description}>{producto.description}</Typography>
              <Typography variant="h6" color="textPrimary" component="p">${producto.price}</Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="large" variant="contained" className={classes.boton}>
              Agregar al carrito
            </Button>
          </CardActions>
        </Card>
        </>
}