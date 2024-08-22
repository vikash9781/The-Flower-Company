import React from 'react'
import Product from './Product'

function OccasionShop({dataa,setDataa,currency,setCurrency}) {
    const occasionData = dataa.slice(7,25)

  return (
    <div>
        <div className='flex justify-center items-center '>
      <h1 className='text-xl py-12'>SHOP BY OCCASION</h1>
        </div>
      <div className=' grid grid-cols-5 gap-y-8 justify-around gap-x-16 ml-5 mb-12'>
        {
       occasionData.map((dataaa) => {
        return <div className=''>
            <Product key={dataaa.id} {...dataaa} dataaa={dataaa} setDataa={setDataa} currency={currency} setCurrency={setCurrency} /> </div>
    })
        }
      </div>
    </div>
  )
}

export default OccasionShop;
