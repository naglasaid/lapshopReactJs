import React, {createContext, useState} from 'react';
import data_product from '../assets/data'

export const ShopContext = createContext(null)



const getDefaultCart=()=>{
    let cart = {};
    for (let index=0 ; index < data_product.length+1 ; index++){
      cart[index] = 0;
    }
    console.log(cart)
    return cart; 
    
  }

  const getDefaultFav=()=>{
    let fav = {};
    for (let index=0 ; index < data_product.length+1 ; index++){
      fav[index] = 0;
    }
    return fav;
  }


const ShopContextProvider = (props) =>{

    const [cartItems,setCartItems] = useState(getDefaultCart());
    const [favItems,setFavItems] = useState(getDefaultFav());

  
   const addToCart = (itemId) =>{
    setCartItems((prev)=> ({...prev,[itemId]:prev[itemId]+1}))
    
   } 

   const addToFav = (itemId) =>{
    setFavItems((prev)=> ({...prev,[itemId]:prev[itemId]+1}))
    
   } 




   const removeFromCart = (itemId) =>{
    setCartItems((prev)=> ({...prev,[itemId]:prev[itemId]-1}))
   } 

   const removeFromFav = (itemId) =>{
    setFavItems((prev)=> ({...prev,[itemId]:prev[itemId]-1}))
   } 


   const getTotalCartAmount =()=> {
       let totalAmount=0

       for(const item in cartItems)
       {
        
              if(cartItems[item] > 0)
              {
                
                let itemInfo = data_product.find((product)=> product.id===Number(item))
                totalAmount += itemInfo.price * cartItems[item]
                
              }

              
       }
       return totalAmount;
   }

   const getTotalFavAmount =()=> {
    let totalAmount=0

    for(const item in favItems)
    {
     
           if(favItems[item] > 0)
           {
             
             let itemInfo = data_product.find((product)=> product.id===Number(item))
             totalAmount += itemInfo.price * favItems[item]
             
           }

           
    }
    return totalAmount;
}




const getTotalCartItems =()=>{
  let totalItem = 0;
  for(const item in cartItems)
  {
    if(cartItems[item]>0){
      totalItem +=cartItems[item];
    }
  }
  return totalItem
} 

const getTotalFavItems =()=>{
  let totalItem = 0;
  for(const item in favItems)
  {
    if(favItems[item]>0){
      totalItem +=favItems[item];
    }
  }
  return totalItem
} 

   const contextValue = {getTotalFavItems,getTotalFavAmount,getTotalCartItems,getTotalCartAmount,data_product,cartItems,favItems,addToCart,removeFromCart,addToFav,removeFromFav};
   

    return(
        <ShopContext.Provider value={contextValue}>
        {props.children}
        </ShopContext.Provider>
       
    )


}
 export default ShopContextProvider;