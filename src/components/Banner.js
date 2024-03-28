import React,{useContext, useState} from 'react';
import {useNavigate} from "react-router-dom"
import {Link} from "react-router-dom"
import carticon from "../assets/img/cart.png"
import favicon from "../assets/img/fav.png"
import { ShopContext } from './ShopContext';
const naglaa = JSON.parse(localStorage.getItem("naglaa")); 

    

     let logoutstyle={}
    if (naglaa){
        logoutstyle= {
            display: "block"
        }}
     else {
        logoutstyle= {
            display: "none"
        }
     }

const Banner = ()=>{


    const navigate= useNavigate();
    // const [isvisible,setIsvisible]= useState("d-none")

    // const userName = JSON.parse(localStorage.getItem("user"))

 const {getTotalCartItems,getTotalFavItems} =useContext(ShopContext)
    
//    if(userName){
//     setIsvisible("d-block")
//        }
//     else{
//         setIsvisible("d-none")
       
//     }
   

    const handleLogout = (e)=>{
    localStorage.removeItem("loggedin")
    localStorage.setItem("naglaa",false)
   
    navigate("/login")
    // window.location="/login"
}

    return(
        <div className=''>
       
       <div className="bannerstyle ">
        
       <div id="userdiv"  style={{display:'none'}}> Welcome</div>
       {/* <div id="userdiv" className={isvisible}> Welcome {userName.name}</div> */}
        <div className='fs-6'>Enjoy<span> 10% </span> Discount on All Products</div>
        

        

        <div className='nav-login-cart ms-auto'>
            {/* <Link to="/login"><button>Login</button></Link> */}
            

            <Link to="/cart"><img src={carticon} alt="cart"/></Link>
            <div className='nav-login-count'>{getTotalCartItems()}</div>

            <Link to="/fav"><img src={favicon} alt="fav"/></Link>
            <div className='nav-login-count'>{getTotalFavItems()}</div>
            <button onClick={handleLogout} className='btn btn-light' style={logoutstyle} id="logoutbtn" type="button">Log Out</button>
        </div>
        
        <div>

            
            
           
            
            
            </div>


        </div>

        
       </div>
    )
    }
    
    export default Banner;