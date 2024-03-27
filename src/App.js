// import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';


import React from 'react';
import Header from './components/Header';
import Login from './components/Login';
import Home from './components/Home';
import Register from './components/Register';
import Fav from './components/Fav'
// import Banner from './components/Banner'
import Footer from './components/Footer'
import Cart from './components/Cart';
//import ProtectedRoutes from './Services/ProtectedRoutes'

// import { BrowserRouter,Routes,Route } from 'react-router-dom';

import { HashRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div>
       
        <HashRouter>
        <Header/>
        
        
        <Routes>
        <Route path="/login" element={<Login/>}/> 
        <Route path="/home" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/> 
        <Route path="/fav" element={<Fav/>}/>
        <Route path="/cart" element={<Cart/>}/>

        {/* <Route path="/" element={<ProtectedRoutes/>}>
        <Route path="/" element={<Home/>}/>
        </Route> */}





        <Route path="*" element={<Home/>}/>


        </Routes>
        <Footer/>
        </HashRouter>
    
    </div>
  );
}

export default App;
