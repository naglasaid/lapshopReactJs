import React , {useContext} from "react";


import { ShopContext } from "./ShopContext";
import remove_icon from '../assets/img/remove-icon.png'

const CartItems = ()=>{
const {getTotalCartAmount,data_product,cartItems,removeFromCart} = useContext(ShopContext)

return(
      <div className="cartitems">
      {/* <div className="cartitems-format-main">

     <p>Products</p>
     <p>Title</p>
     <p>Price</p>
     <p>Quantity</p>
     <p>Total</p>
     <p>Remove</p>
     </div> */}


<hr/>
{data_product.map((e)=>{
if (cartItems[e.id]>0)
{
   return <div className="container">
   <div className="cartitems-format-main">
   <img src={e.image} alt="" className="carticon-product-icon"/>
   <p className="carticon-product-name">{e.name}</p>
   <p>L.E {e.price}</p>
   <button className="cartitems-quantity">{cartItems[e.id]}</button>
   <p>L.E {((e.price) * (cartItems[e.id]))}</p>
   <img className="cartitems-remove-icon" src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
   </div>
   
   <hr/>
   
   </div>   
}
return null;

})}
<div className="container">
<div className="caritems-down">
<div className="cartitems-total">
<h1>Cart Totals</h1>
<div>
<div className="cartitems-total-item">
<p>Subtotal</p>
<p>L.E {getTotalCartAmount()}</p>
</div>
<hr/>
<div className="cartitems-total-item">
   <p>Shipping Fee </p>
   <p>Free</p>
</div>
<hr/>

<div className="cartitems-total-item">
   <h3>Total</h3>
   <h3>L.E {getTotalCartAmount()}</h3>
</div>
</div>
<hr/>
<button>PROCEED TO CHECKOUT</button>

</div>




</div>
 </div>
 </div>
)
}

export default CartItems;
