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
import { useCart } from '../Context';
import ProductCard from './ProductCard';

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


function Products() {
  const {state}=useCart();
    const classes = useStyles();
  

  return (
    <div className="all">
        
          {state.product.map((dataDetails)=>{
            
          return <ProductCard dataDetails={dataDetails}/>
       

            })}
 
    </div>
  );
}
export default Products

