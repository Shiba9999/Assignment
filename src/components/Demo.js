import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import dataFile from "../data.json"
import "../Style/Demo.css"
const useStyles = makeStyles((theme)=>({

        card: {
          maxWidth: 500,
          maxHeight:300,
        },
        media: {
          // ⚠️ object-fit is not supported by IE 11.
          objectFit: 'contain',

        },
        Button:{
           textAlign:"center"
           

        }

      
}))

function Demo() {
    const classes = useStyles();

  return (
    <div className="all">
          {dataFile.map((dataDetails,index)=>{
          return <Card className={classes.card} className="cards">
            <CardActionArea>
              <CardMedia
                
                component="img"
                alt=""
                className={classes.media}
                className="image"
                height="140"
                image={dataDetails.imageURl}
             
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {dataDetails.name}
                </Typography>
                <Typography component="p">
                  {dataDetails.vendor}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button className={classes.Button} size="small" color="primary">
                Buy
              </Button>
            </CardActions>
          </Card>
       

            })}
 
    </div>
  );
}
export default Demo

