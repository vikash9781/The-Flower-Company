import React, { useState } from 'react'
import { ImCart } from "react-icons/im";
import CartForm from "./CartForm"
import { useDispatch } from 'react-redux';
import ActionA from '../Redux/dacta'


function Product({ id, ProductName, INR, ImageUrl, Category, currency, setCurrency, USD, EUR, CAD, GBP, dataaa }) {
  
  console.log('dataaacne', dataaa);

  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    console.log('items',item);
    
    dispatch(ActionA(item))
  }

  function selectCurrency() {
    if (currency === "INR") {
      return INR
    } else if (currency === "USD") {
      return USD
    } else if (currency === "EUR") {
      return EUR
    } else if (currency === "CAD") {
      return CAD
    } else if (currency === "GBP") {
      return GBP
    } else { return "select Currency" }
  }


  // function sendToCart(){
  //   console.log("Sending to cart")
  // setCartFrom(() => !cartForm)

  // }




  return (
    <div className='flex flex-col justify-center items-center h-[375px] w-[375px] text-xs gap-y-4'  >
      <div className='overflow-hidden'>
        <div className='left-0 text-lg ml-' >
          
          {/* {
          cartForm ? <CartForm/> : <div></div>
        } */}
        </div>
        <img src={ImageUrl} alt='flower' className='h-full w-[340px] overflow-hidden top-0 hover:scale-110 duration-[3s]' />
    </div>

      <div>
        <p>{ProductName}</p>
        <div className='flex'>
        <p>{selectCurrency()}</p>
        
        </div>
        
        <ImCart className='z-[40] absolute ' onClick={() => handleAddToCart(dataaa)} />
      </div>


    </div>
  )
}


export default Product;

