import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import React from 'react'
import { useCart } from '../Context';
import { makeStyles } from "@material-ui/styles";


const useStyles = makeStyles((theme) => ({
    card: {
      maxWidth: 500,
      maxHeight: 300,
    },
    media: {
      // ⚠️ object-fit is not supported by IE 11.
      objectFit: "contain",
    },
    Button: {
      textAlign: "center",
    },
  }));

function Cart() {
    const {state}=useCart();
  
      const classes = useStyles();
    return (

        <div>
             {state.cart.map((dataDetails)=>{
                 return (
                    <Card className={classes.card} key={dataDetails.id} className="cards">
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
                        <Typography component="p">{dataDetails.vendor}</Typography>
                        <Typography>
                          {" "}
                          {dataDetails.available ? "In Stock" : "Out Of Stock"}{" "}
                        </Typography>
                      
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                    <Typography component="p">
                          Price: {dataDetails.price} rs
                      
                        </Typography>
                      <Button
                        className={classes.Button}
                        size="small"
                        color="primary"
                      
                      >
                        Buy
                      </Button>
                    </CardActions>
                  </Card>
                 )

             })}
            
        </div>
    )
}

export default Cart

