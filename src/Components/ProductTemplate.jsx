import React from 'react'

export default function ProductTemplate({ImageUrl,ProductName}) {
  return (
    
        <div className='relative'>
            <div className='h-[420px] w-[420px] overflow-hidden'>
             
              <div className='absolute bottom-20 left-10 text-2xl  text-white'>{ProductName}</div>
            <br/>
           
            <div>
            <div className='text cursor:pointer absolute  bottom-10 left-10 border text-xs p-4 py-2 bg-white
            cursor-pointer hover:bg-transparent  hover:transition-all duration-1000 hover:text-white
            '>VIEW PRODUCTS</div>
              
           
            </div>
            <div className='overflow-hidden '>
            <img src={ImageUrl} alt='products' className='h-[420px] w-[420px] ' />
            </div>
            
           
            </div>
        </div>
      
   
  )
}
