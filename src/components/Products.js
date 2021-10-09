import React from 'react';

import { makeStyles } from '@material-ui/styles';
import dataFile from "../data.json"
import "../Style/Product.css"
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
            
          return    <ProductCard dataDetails={dataDetails}/>
         
         
       

            })}
 
    </div>
  );
}
export default Products

// <Card dataDetails={dataDetails}/>