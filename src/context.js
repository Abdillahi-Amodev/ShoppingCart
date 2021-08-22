import React, { useReducer} from 'react'
import reducer from './reducer'
import {liste} from './liste'

const ShopContext =React.createContext();

const initialState={
liste:liste,
cart:[],
number:1,


}


const ShopProvider= ({children}) =>{
    const [shop,dispatch]=useReducer(reducer,initialState)
   
    console.log(shop);
    const addCart = (id) => {
        const findOne = liste.find((oneItem) => {
            return oneItem.id === id
        })
    //   const checked =  shop.cart.includes(findOne)
        // console.log(shop.cart.includes(findOne));
     
        dispatch({ type: 'ADD_CART', payload: [...shop.cart, findOne]})


    }
    const removeFromCart=(id)=>{
           const remove=shop.cart.filter(cartItem=>{
               return cartItem.id !==id
           })

           dispatch({ type: 'REMOVE_FROM_CART', payload: remove})

        }
         

 const numberIncrement=(id)=>{
           dispatch({type:'INCREMENT',payload:id})
      

}
 const numberDecrement=(id)=>{
           dispatch({type:'DECREMENT',payload:id})
      

}

               
    return <ShopContext.Provider value={{ ...shop, addCart, removeFromCart, numberIncrement, numberDecrement}}>
     {children}
 </ShopContext.Provider>

}

export { ShopContext, ShopProvider}


