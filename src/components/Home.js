import React from 'react'
import "../Style/Home.css"

import dataFile from "../data.json"
import { useCart } from '../Context'
import Products from './Products'


function Home() {
    const {state,dispatch}=useCart()
    function filterFunction(){
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
         <label   htmlFor="fruits"  >Fruits</label>
            <input type="checkbox" id="fruits"  onChange={(()=>{
                 dispatch({
                    type:"FILTER_PRODUCT",
                    payload:"Fruits"
                })
            })
               
            } />
          

            <label   htmlFor="Vegtables"  >Vegtables</label>
            <input type="checkbox" id="Vegtables"   onChange={(()=>{
                                  dispatch({
                                    type:"FILTER_PRODUCT",
                                    payload:"Vegtables"
                                })  
                        })}
                
             />
         
            <button onClick={filterFunction}>button</button>
            </form>
           

          </div>
              
             <div className="home__row">
                
                  <Products  />
              
                  
                </div>
              
    
        </div>
    )
}

export default Home
