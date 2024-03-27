import React from 'react';
// import Banner from './components/Banner'
import icon1 from '../assets/img/nav-icon1.svg'
import icon2 from '../assets/img/nav-icon2.svg'
import icon3 from '../assets/img/nav-icon3.svg'


const Footer = ()=>{
    return(
        
         
       

       <div className="footer pt-5 pb-3 text-center text-lg-start ">
     <div className="container-fluid">
    <div className="footer">
      <div className="container fotter-content">
       <div className="row">
        
         <div className="footer-col col-lg-3 col-md-12">
      
          {/* <a className="navbar-brand text m-2" href="index.html"><span>LAP</span><span>SHOP</span></a> */}
          <a className="navbar-brand" href="#home"><span className="spanstyle">L</span>AP<span className="spanstyle">S</span>HOP</a>
      <p className="mt-3 fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, veniam enim error eveniet quas officia.</p>
          
          
       </div>
        <div className="footer-col col-lg-3 col-md-12">
          <h4>Company</h4>
          
           <ul className="list-unstyled">
            <li><a href="#" className="text-transform: capitalize; text-decoration-none mb-3">About Us</a></li>
            <li><a href="#" className="text-transform: capitalize; text-decoration-none mb-3">Our Services</a></li>
            <li><a href="#" className="text-transform: capitalize; text-decoration-none mb-3">Privacy Policy</a></li>
            <li><a href="#" className="text-transform: capitalize; text-decoration-none mb-3">Payment Options</a></li>
           </ul>
        </div>
       
       <div className="footer-col col-lg-3 col-md-12">
        <h4>Online Shop</h4>
        <ul className="list-unstyled">
         <li><a href="#" className="text-transform: capitalize; text-decoration-none mb-3">Lap Top</a></li>
         <li><a href="#" className="text-transform: capitalize; text-decoration-none mb-3 ">Printers</a></li>
         <li><a href="#" className="text-transform: capitalize; text-decoration-none mb-3">PCs</a></li>
         <li><a href="#" className="text-transform: capitalize; text-decoration-none mb-3">Accessories </a></li>
        </ul>
     </div>
     <div className="footer-col col-lg-3 col-md-12">
      <h4>Follow Us</h4>
      <div className="social-links">
       <a href="#" className="rounded-circle"><img src={icon1} alt=""/></a>
       <a href="#" className="rounded-circle"><img src={icon2} alt=""/></a>
       <a href="#" className="rounded-circle"><img src={icon3} alt=""/></a>
       
      </div>
      <h4 className="mt-3 mb-3">Contact Us</h4>
      <p className="lh-lg mt-1 mb-4 fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis!</p>
      <a className="btn btn-lg  mb-3" href="#">lapagency@gmail.com</a>
   </div>
   {/* <hr className="text-dark"/> */}
     <div className="fw-bold w-100 py-2">
     <hr/>
      <h6 className="col-lg-12 text-center rights position-relative"> All Rights Reserved for Z Design 2024 © </h6>
    
    </div>
  
  
  
      </div>
    </div>
    
  </div>
  </div>
  </div>
  
  
  
     
       
       
       
    )
    }
    
    export default Footer;