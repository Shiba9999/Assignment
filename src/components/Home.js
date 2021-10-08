import React from 'react'
import "../Style/Home.css"
import Demo from './Demo'
import dataFile from "../data.json"
import Products from './Products'
import { useCart } from '../Context'


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
         
            <input type="checkbox" id="fruits"  onChange={(()=>{
                 dispatch({
                    type:"FILTER_PRODUCT",
                    payload:"Fruits"
                })
            })
               
            } />
            <label   htmlFor="fruits"  >Fruits</label>

            <input type="checkbox" id="Vegtables"   onChange={(()=>{
                                  dispatch({
                                    type:"FILTER_PRODUCT",
                                    payload:"Vegtables"
                                })  
                        })}
                
             />
            <label   htmlFor="Vegtables"  >Vegtables</label>

            <button onClick={filterFunction}>button</button>

          </div>
              
             <div className="home__row">
                  {/* <Products/> */}
                  <Demo/>
              
                  
                </div>
              
    
        </div>
    )
}

export default Home
