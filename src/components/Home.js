import React, { useState } from 'react'
import "../Style/Home.css"
import dataFile from "../data.json"
import { useCart } from '../Context'
import Products from './Products'
import { Button, Typography } from '@material-ui/core'


function Home() {
   
    const {state,dispatch}=useCart()
    function filterFunction(e){
        e.preventDefault();
        const filteredValue=  dataFile.filter((ele)=>{
            return state.category.includes(ele.category)
            })
            dispatch({
                type:"SET_PRODUCT",
               payload:filteredValue
            })

    }
    return (
        <div className="home">
  
          <div className="filter">
         <form className="formElements">
 
         <Typography variant="h6" gutterBottom component="div">
        Fruits
      </Typography>
            <input type="checkbox"  value={state.category.includes("fruits")} id="fruits"  onChange={((e)=>{
             
                 dispatch({
                    type:"FILTER_PRODUCT",
                    payload:"Fruits"
                })
            })
               
            } />
    
            <Typography variant="h6" gutterBottom component="div">
              Vegtables
             </Typography>
            <input type="checkbox" id="vegetables" value={state.category.includes("vegetable")}  onChange={((e)=>{
                          

                                  dispatch({
                                    type:"FILTER_PRODUCT",
                                    payload:"Vegetables"
                                })  
                        })}
                
             />
         
            <Button variant="contained" onClick={filterFunction}>Filter</Button>
            </form>
          </div>
              
             <div className="home__row">
                
                  <Products  />
              
                  
                </div>
              
    
        </div>
    )
}

export default Home
