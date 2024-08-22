import React, { useState } from 'react';

import Product from './Product';

function SearchValue({ dataa, currency, setCurrency,ImageUrl,setDataa,dataaa,ProductName}) {
  const [searchValue, setSearchValue] = useState("");

  const searchHandler = (event) => {
    setSearchValue(event.target.value);
  };


  const filteredProducts = searchValue
    ? dataa.filter(product =>
        product.ProductName.toLowerCase().includes(searchValue.toLowerCase())
      )
    : [];

  return (
    <div>
      <input
        placeholder='⌕ search by product name'
        value={searchValue}
        onChange={searchHandler}
      />
      <div>
{  console.log(ProductName)  }
        {searchValue && filteredProducts.length > 0 ? (
        
          
          
          
          filteredProducts.map((product) => (
           <div className='grid grid-cols-4'>
            <div className='flex flex-col justify-center items-center h-[375px] w-[375px] text-xs gap-y-4'  >
      <div className='overflow-hidden'>
        <div className='left-0 text-lg ml-' >
          {/* <ImCart className='z-[40] absolute text-gray-900' onClick={() => handleAddToCart(dataaa)} /> */}
          {/* {
          cartForm ? <CartForm/> : <div></div>
        } */}
        </div>
        <img src={product.ImageUrl} alt='flower' className='h-full w-[340px] overflow-hidden top-0 hover:scale-110 duration-[3s]' />
    </div>

      <div>
        <p>{product.ProductName}</p>
        <p>{product.INR}</p>

      </div>


    </div>
            
           </div>
          
          
          ))
          
        ) : (
          searchValue && <p>No products found</p>
        )}
      </div>
    </div>
  );
}



export default SearchValue;
