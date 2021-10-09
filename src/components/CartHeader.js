import React from 'react'
import "../Style/Header.css"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useCart } from '../Context';
import { Link } from '@material-ui/core';
import { useHistory } from 'react-router';



function CartHeader() {
    const history=useHistory();
    const {state}=useCart();
    return (
        <div className="header" >
            
            <div>
            
            <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
            </div>
          
            
            <div className="header__nav">
             
                <button className="header__optionBasket" onClick={(e)=>{
                      e.preventDefault();
                      history.push("/cart")

                }}>
               
               
               
                </button>
          
            </div>

        </div>
    )
}


export default CartHeader 
