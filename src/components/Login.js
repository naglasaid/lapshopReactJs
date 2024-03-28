import React ,{useState} from 'react';
import {Link,useNavigate} from "react-router-dom"
import login from '../assets/img/login.jpg'








const Login = ()=>{
  const navigate= useNavigate();
  const [input,setInput] = useState({
    name:"",
    password:""
  });
  
const handleLogin = (e) =>{
  e.preventDefault();
  const loggeduser = JSON.parse(localStorage.getItem("user"));

  if(input.name==="" || input.password === ""){
    alert("Please Enter Your Credentials")
} 
  else{
    if(input.name === loggeduser.name && input.password === loggeduser.password){
  
      localStorage.setItem("loggedin",true)
      localStorage.setItem("naglaa",true)
      navigate("/")
      // window.location="/"
  
  
    } else{
      alert("Wrong UserName or Password")
      
    }
  }
  }

  


    return(
        <div className='section-form'>

      <div className="container-md  mt-4 text-center">
    
      <div className="row rounded-5 p-3 my-2 border-0"> 
        
        <div className="col-md-12 p-4 text-center">
          <h2 className="mt-1 mb-2">Sign In</h2>
          <hr></hr>
          <img src={login}  className="mt-2 mb-3 rounded-pill img-fluid" alt=''/>
     
        <form onSubmit={handleLogin}>
        <input type="text" placeholder="Enter Username" id="username" name="name"  value={input.name}  onChange={(e)=>setInput({...input,[e.target.name]:e.target.value,})}/>
        <input type="password" placeholder="Enter password" id="password" name="password" value={input.password} onChange={(e)=>setInput({...input,[e.target.name]:e.target.value,})}/>

        <input type="submit" value= "Sign In" id="sign_in" className="mt-5 mb-4"/>
       <label className="text-dark mb-2"> Haven't Account?</label> <Link to="/register" className='signup-link'>sign Up </Link>
      </form>
  
      
      
      
    </div>
  
    </div>
  </div>
    
</div>  
    )
    }
    
    export default Login;
    