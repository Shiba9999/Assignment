import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { useCart } from "../Context";
import { makeStyles } from "@material-ui/styles";
import Modal from "react-modal";

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
  margin:{
    marginLeft:"60px"
  }

}));

function Cart() {
  const { state } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const classes = useStyles();
  function toggleModal() {
    setIsOpen(!isOpen);
  }
  return (
    <div>
      {/* <h1>Cart Page</h1> */}
      <Typography variant="h4" gutterBottom component="div">
      Cart Page
      </Typography>
      {state.cart.map((dataDetails) => {
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
              <Typography  variant="h6" gutterBottom  component="p"  className={classes.margin}>
                Price: {dataDetails.price} rs
              </Typography>
              <Button
                className={classes.Button}
                size="small"
                color="primary"
                onClick={toggleModal}
              >
                
              </Button>
              <Modal
                isOpen={isOpen}
                onRequestClose={toggleModal}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <div>{JSON.stringify(state.cart)}</div>
                {/* <button onClick={toggleModal}>Close modal</button> */}
                <Button variant="contained" onClick={toggleModal} >Close</Button>
              </Modal>
            </CardActions>
             
          </Card>
    
        );
      })}
      {/* <button onClick={toggleModal}>buy</button> */}
      <Button variant="contained" onClick={toggleModal} >Buy</Button>
      
    </div>
  );
}

export default Cart;
