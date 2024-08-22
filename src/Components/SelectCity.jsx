import React from 'react'

import Product from './Product'

export default function SelectCity({dataa, setDataa, currency , setCurrency}) {
   
    const product = dataa.slice(0,28)
  return (
   
    <div>
        <div className='flex justify-center items-center'>
        <h1 className='text-2xl py-12'>DELHI</h1>
        </div>
      

      <div className='grid grid-cols-5 gap-y-8 justify-evenly ml-5 mb-12 gap-x-4'>
        {
          product.map((dataaa) => {
            return <Product key={dataaa.id} {...dataaa} dataaa={dataaa} setDataa={setDataa} currency={currency} setCurrency={setCurrency} />  })
        }
      </div>
    </div>
  )
}
