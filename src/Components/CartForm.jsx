import React from 'react'

export default function CartForm() {
   console.log("entered in cart")
  return (
    
    <div className='absolute z-[10] cursor-pointer h-[315px] w-[317px] bg-[#ffffff42] scale-y-100 duration-[5s] '>
      <form className='flex flex-col justify-center items-center'>
        <div htmlFor='city' className='text-black mt-16 text-[16px]' >city</div>
        <select name='city' className=' mt-2 w-64 text-sm'>
            <option>Delhi</option>
            <option>Banglore</option>
            <option>Jaipur</option>
            <option>Mumbai</option>
        </select>

        <div className='text-black mt-2 text-[16px]'> Quantity</div>
        <select name='quantity' className=' mt-2 w-64 text-sm '>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
        </select>

        <button className='mt-4 border py-1 px-11 bg-gray-700 border-gray-700 text-white text-sm'>Add</button>
      </form>
    </div>
  )
}
