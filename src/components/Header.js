import React from "react";
import {Link} from "react-router-dom"
let signupstyle={
 
    padding:"7px",
    // transition:"all 0.5s",
    

}

const Header = ()=>{
return(
    <div>
    <nav className="navbar navbar-expand-lg" >
        <div className="container-fluid">
          {/* <a className="navbar-brand" href="#home"><img src={logo} alt="Logo" /></a> */}
          <a className="navbar-brand" href="#home"><span className="spanstyle">L</span>AP<span className="spanstyle">S</span>HOP</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/home">Shop</Link>
                 <Link to="/login">Sign In</Link>
                 <Link to="/register" className="border" style={signupstyle}>Sign Up</Link>
                 {/* <Link to="/fav">Fav</Link> */}

                

              </li>
              </ul>
              
              
              
            
           
          </div>
        </div>
      </nav>
      
      </div>
    
)
}

export default Header;
