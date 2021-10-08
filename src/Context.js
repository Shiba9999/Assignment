import React, { useEffect } from "react";
import dataFile from "./data.json"
export const CartContext = React.createContext();


export const initialState ={
    cart:[],
    product:[],
    category:[]
    
}
export  const reducer=(state,action)=>{
    switch(action.type){
        case "SET_PRODUCT":
            return {
             ...state,
             product:action.payload
            }
            ;
            case "CHANGE_QUANTITY":
                return {
                    ...state,
                    product:state.product.map((ele)=>{
                        if(ele.id===action.payload.id){                           
                          return {...ele,quantity:action.payload.quantity}
                        }

                    })

                };
                case "FILTER_PRODUCT":
                    return {
                        ...state,
                        category:[...state.category,action.payload]
                      
                       
                    }
                    default : return state
    }
}


export const ContextProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    useEffect(() => {
      
        dispatch({
            type:"SET_PRODUCT",
           payload:dataFile
        })
    
      
    }, [])
  

  return <CartContext.Provider value={{state,dispatch}}>{children}</CartContext.Provider>;
};



export const useCart = () => React.useContext(CartContext);
