import React from 'react'
import ProductTemplate from './ProductTemplate'


export default function CollectionShop({dataa, setDataa}) {
    const collection = dataa.slice(0,12)
    console.log(collection)
  return (
    <div className=' grid grid-cols-4 gap-y-8 justify-evenly ml-5 mb-12 '>
      {
        collection.map((dataaa) => {
            return <ProductTemplate key={dataaa.id} {...dataaa} dataa={dataa} setDataa={setDataa}   />
        })
      }
    </div>
  )
}
