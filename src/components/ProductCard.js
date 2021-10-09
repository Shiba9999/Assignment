import React, { useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import dataFile from "../data.json";
import "../Style/Product.css";
import { useCart } from "../Context";

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

function ProductCard({ dataDetails }) {
  

  const [quantity,setQuantity]=useState(1)
  const {state,dispatch}=useCart()
 
  function addToBasket() {
    dispatch({
      type:"ADD_TO_BASKET",
      payload:dataDetails
    })
    dispatch({
      type:"CHANGE_QUANTITY",
      payload:{id:dataDetails.id,quantity}
  })
  setQuantity(1)
  }
  const classes = useStyles();
  function handleQuantity(e){
  
    const{value}=e.target
  
  setQuantity(value)

  }
  
  return (
    <Card className={classes.card} key={dataDetails.id} className="cards">
      <CardActionArea className="cardAction">
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
      <Typography component="p" >
            Price: {dataDetails.price} rs
            <input type="number" className="quantity" value={quantity} onChange={handleQuantity} />
          </Typography>
        <Button
          className={classes.Button}
          size="small"
          color="primary"
          onClick={addToBasket}
        >
          Add To Cart
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;
