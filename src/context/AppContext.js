import React, { useContext,createContext, useReducer } from 'react'
import { useCart } from '../components/cart/useCart';
import { reducer } from './reducer';

const AppContext = createContext();
const AppContextProvider = ({children}) => {
    const cartSlice = useCart([]);
    const initialProps = {
        cartSlice
    }
     const [state,dispatch] = useReducer(reducer,initialProps);

     //user controllers


     const shareControllers = {}
  return (
    <AppContext.Provider value={'hello'}>
        {children}
    </AppContext.Provider>
  )
}
export const useAppContext = ()=>{
    return useContext(AppContext);
}

export default AppContext
