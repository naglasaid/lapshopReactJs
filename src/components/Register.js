import React,{useState} from 'react';
 
import {Link,useNavigate} from "react-router-dom"
import signup from '../assets/img/signup.png'





const Register = ()=>{
// const navigate= useNavigate();
const [input,setInput] = useState({
  name:"",
  email:"",
  password:""
});

// To store values on localStorage

const handleSubmit=(e)=>{
  e.preventDefault();
  localStorage.setItem("user",JSON.stringify(input))
  // navigate("/login")
  window.location="/login"
}





   


    return(
        <div className='section-form'>

    <div className="container-md  mt-4 text-center">
      
        <div className="row rounded-5 p-3 my-2"> 
          <div className="col-md-12 p-3 text-center">
        
       <h2>Sign Up</h2>
       <hr></hr>
       <img  src={signup} alt ='' className="mt-2 mb-3 rounded-pill img-fluid"/>
      <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter Username"  id="username" name="name"  value={input.name}  onChange={(e)=>setInput({...input,[e.target.name]:e.target.value,})}/>
          <input type="email" placeholder="Enter email" id="email" name="email"   value={input.email} onChange={(e)=>setInput({...input,[e.target.name]:e.target.value,})} />
          
          <input type="password" placeholder="Enter password" id="password" name="password" value={input.password} onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} />
  
          <input type="submit" value= "Sign Up" id="sign_up" className="mt-5 mb-4"/>
          <label className="text-dark mb-2"> Have An Account?</label> <Link to="/login" className='signin-link'>sign in</Link>
      </form>
    
        
        
      </div>
    
      </div>
    
    </div>
      
  </div>  
    )
    }
    
    export default Register;