import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {ItemStyles} from './ItemStyles'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ItemStyles(theme));

export const Item = props => {
    const classes = useStyles();
    
    const { id, title, description, price, picture, alt, stock } = props;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          width="100%"
          image={picture}
          title={alt}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2" className={classes.title}>{title}</Typography>
          <Typography variant="body1" color="textSecondary" component="p" className={classes.description}>{description}</Typography>
          <Typography variant="h6" color="textPrimary" component="p">${price}</Typography>
          <Typography variant="body2" color="textSecondary" component="p">Existencia: {stock}</Typography>
          <Typography variant="body2" color="textSecondary">ID: {id}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="large" variant="outlined" className={classes.boton}>
          Agregar al carrito
        </Button>
      </CardActions>
    </Card>
  );
}
