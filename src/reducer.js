
const reducer = (state, action) => {
    console.log(state);
    
    if (action.type==='ADD_CART') {
        return { 
            ...state, 
            cart:action.payload,
            check:action.value
          
        }
    }
    if (action.type === 'REMOVE_FROM_CART') {
        return {...state,cart:action.payload}
    }
    if (action.type === 'INCREMENT') {
        let tempCart=state.cart.map(item=>{
            if (item.id===action.payload) {
                return { ...item,pair:item.pair+1}
            }
            return item
        })
        return {...state,cart:tempCart}
    }
    if (action.type === 'DECREMENT') {
        let tempCart=state.cart.map(item=>{
            if (item.id===action.payload) {
                if (item.pair > 1) {
                    return { ...item,pair:item.pair-1}
                    
                }else{
                    return { ...item, pair: 1 }
                }
            }
            return item
        })
        return {...state,cart:tempCart}
    }
   


    return state

}
export default reducer