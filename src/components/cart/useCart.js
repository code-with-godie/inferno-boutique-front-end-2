import React, { useEffect, useReducer} from 'react'
import { CART_ACTIONS } from './ACTIONS';
import { reducer } from './reducer';
export const useCart = (cart) => {
    const initialState = {
        cart:[],
        amount:0,
        total:0,
        loading:true,
        error:null
    }
    const [state,dispatch] = useReducer(reducer,initialState);
    useEffect(getCartTotal,[state.cart]);
    useEffect(()=>{
            setCartItems(cart || []);
    },[]);

    //user cart controllers
    const clearCart = ()=>{
        dispatch({type:CART_ACTIONS.clearCart});
    }
    const removeCartItem = (id)=>{
        dispatch({type:CART_ACTIONS.removeCartItem,payload:id});
    }
    const increaseItemAMount = (id)=>{
        dispatch({type:CART_ACTIONS.increaseItemAMount,payload:id})
    }
    const decreaseItemAMount = (id)=>{
        dispatch({type:CART_ACTIONS.decreaseItemAMount,payload:id})
    }
    const getCartTotal = ()=>{
        dispatch({type:CART_ACTIONS.getCartTotal});
    }
    const setCartItems = cart=>{
        dispatch({type:CART_ACTIONS.setCartItems,payload:cart});
    }
    const addCartItem= cartItem =>{
        dispatch({type:CART_ACTIONS.addCartItem,payload:cartItem});
        return true;
    }
    return {...state,clearCart,removeCartItem,increaseItemAMount,decreaseItemAMount,getCartTotal,addCartItem}
}


