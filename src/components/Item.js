import React, { useContext } from "react";
import { ShopContext } from "./ShopContext";

const naglaa = JSON.parse(localStorage.getItem("naglaa")); 

    

   
    

const Item=(props)=>{


    const {addToCart,addToFav} = useContext(ShopContext)
    let buttonstyle={}
    if (naglaa){
        buttonstyle= {
            display: "block"
        }}
     else {
        buttonstyle= {
            display: "block"
        }
     }
    
    return(
     
       



<div className="item">

<img src={props.image} alt=""/>
<p>{props.name}</p>
<p className="price">L.E {props.price}</p>
<div className="product-actions" style={buttonstyle}>
    <button onClick={()=>{addToCart(props.id)}}>ADD TO CART</button>
    <button onClick={()=>{addToFav(props.id)}}>Save</button>
</div>

</div>



    )



}


export default Item;