import React from 'react'
import "../Style/Products.css"
import dataFile from "../data.json"
import Button from '@material-ui/core/Button';
function Products() {
    return (
        <div className="all">
            {dataFile.map((dataDetails,index)=>{
                return <div className="product" > 
                  {/* <h1>{dataDetails.name}</h1>
                  <img src={dataDetails.imageURl} alt=""/> */}
                   <div className="product__info">
                  <p>{dataDetails.name}</p>
                  </div>
              <div className="product_image">  
              <img  src={dataDetails.imageURl} alt=""/>
                <button  className="button-6" variant="contained">Buy</button>
              </div>
                </div>

            })}

        </div>
    )
}

export default Products
