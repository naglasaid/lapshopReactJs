import React , {useContext} from "react";


import { ShopContext } from "./ShopContext";
import remove_icon from '../assets/img/remove-icon.png'

const FavItems = ()=>{
const {getTotalFavAmount,data_product,favItems,removeFromFav} = useContext(ShopContext)

return(
      <div className="cartitems">
      <div className="cartitems-format-main">

     <p>Products</p>
     <p>Title</p>
     <p>Price</p>
     <p>Quantity</p>
     <p>Total</p>
     <p>Remove</p>
     </div>


<hr/>
{data_product.map((e)=>{
if (favItems[e.id]>0)
{
   return <div>
   <div className="cartitems-format-main ">
   <img src={e.image} alt="" className="carticon-product-icon"/>
   <p>{e.name}</p>
   <p>L.E {e.price}</p>
   <button className="cartitems-quantity">{favItems[e.id]}</button>
   <p>L.E {((e.price) * (favItems[e.id]))}</p>
   <img className="cartitems-remove-icon" src={remove_icon} onClick={()=>{removeFromFav(e.id)}} alt="" />
   </div>
   
   <hr/>
   
   </div>   
}
return null;

})}

<div className="caritems-down">
<div className="cartitems-total">
<h1>Fav Totals</h1>
<div>
<div className="cartitems-total-item">
<p>Subtotal</p>
<p>L.E {getTotalFavAmount()}</p>
</div>
<hr/>
<div className="cartitems-total-item">
   <p>Shipping Fee </p>
   <p>Free</p>
</div>
<hr/>

<div className="cartitems-total-item">
   <h3>Total</h3>
   <h3>L.E {getTotalFavAmount()}</h3>
</div>
</div>
<hr/>


</div>




</div>
 </div>

)
}

export default FavItems;
