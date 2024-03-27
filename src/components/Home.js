import React from 'react';
import wallpaper from '../assets/img/wallpaper.png'
import Banner from './Banner'

import data_product from '../assets/data';
import Item from './Item';
import NewsLetter from './NewsLetter'


const Home = ()=>{

    // const userName = JSON.parse(localStorage.getItem("user"))

    return(
        <> 
        <Banner/>
            <div className='container'>
            <div className='home-div mt-3 text-center'>
                <img className='wallpaperstyle img-fluid' src = {wallpaper} alt=""/>
            </div>
            <div className='container home-text'>
                <p className='mb-3'>
               <h2>New offers</h2> 
               </p>
               <p>
               Get a quote for your organization that includes all the products, services or solutions you need, and you will be answered as soon as possible
               </p>
               

                <div className='d-flex offerdiv'>
                 <button className='btn mt-3'>Have A Look</button>
                 {/* <img src={arrow1} alt="arrow"></img> */}
                 </div>
            
            </div>
            </div>



              <div className='container-fluid products'>

               <h2>LATEST PRODUCTS</h2>
               <hr/>
               <div className='products-item'>

                {data_product.map((item , i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price} />


                })}

               </div>



              </div>


              {/* <NewsLetter/> */}
           

        </>
    )
    }
    
    export default Home;