import React from "react";

const NewsLetter=()=>{

    return(
<div className="container">
 <div className="newsletter">
  <h2> Get Exclusive Offers On Your Email </h2>
  <p className="mt-4">Subscribe to our newsletter an stay updated</p>
  <div className="my-5">
    <input type='email' placeholder="Your Email id"/>
    
  </div>
  <button className="btn btn-dark">Subscribe</button>
</div>
</div>


    )



}


export default NewsLetter;