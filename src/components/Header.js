import React from 'react'
import "../Style/Header.css"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';



function Header() {

    return (
        <div className="header" >
            
            <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
            
            <div className="header__nav">
                
                <div className="header__optionBasket">
                    <ShoppingBasketIcon/>
                    <span className="header__optionLineTwo header__basketCount">0</span>
                </div>
            </div>

        </div>
    )
}

export default Header 
