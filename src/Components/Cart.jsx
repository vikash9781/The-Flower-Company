import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdDelete } from "react-icons/md";
import ActionR from '../Redux/remove';
import ActionI from '../Redux/increment'; // Import increment action
import ActionD from '../Redux/decrement'; // Import decrement action

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  function deleteHandler(id) {
    dispatch(ActionR(id));
  }

  function incrementHandler(id) {
    dispatch(ActionI(id));
  }

  function decrementHandler(id) {
    dispatch(ActionD(id));
  }

  // Calculate total quantity
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div>
      <div className='grid grid-cols-5 mt-7'>
        {cart.map((dataa) => (
          <div key={dataa.id} className='h-[400px]'>
            <img className='w-full md:w-[15rem] rounded-lg mx-auto md:mx-0 h-[240px]' src={dataa?.ImageUrl} alt="image" />
            <div className='mt-4 md:ml-4 flex-1'>
              <p className='font-semibold text-lg md:text-xl'>{dataa.ProductName}</p>
              <span className='font-medium text-gray-500 mt-2'>{dataa?.INR}</span>
              <div className='flex items-center mt-2'>
                <button
                  onClick={() => decrementHandler(dataa.id)}
                  className='px-2 py-1 bg-gray-200 text-gray-700 rounded'
                >
                  -
                </button>
                <span className='mx-2'>{dataa.quantity}</span>
                <button
                  onClick={() => incrementHandler(dataa.id)}
                  className='px-2 py-1 bg-gray-200 text-gray-700 rounded'
                >
                  +
                </button>
                <MdDelete
                  onClick={() => deleteHandler(dataa.id)}
                  className='cursor-pointer ml-4'
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='mt-4'>
        <h2 className='text-lg font-bold'>Total Quantity: {totalQuantity}</h2>
      </div>
    </div>
  );
};

export default Cart;
















// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { MdDelete } from "react-icons/md";
// import ActionR from '../Redux/remove';

// const Cart = () => {
//   const cart = useSelector((state) => state.cart);
//   const dispatch = useDispatch();
//   console.log('cartdata', cart);

//   function deleteHandler(id) {
//     dispatch(ActionR(id));
//   }

//   return (
//     <div className='grid grid-cols-5 mt-7'>
//       {cart.map((dataa) => (
//         <div key={dataa.id} className='h-[400px]'>
//           <img className='w-full md:w-[15rem] rounded-lg mx-auto md:mx-0 h-[240px]' src={dataa?.ImageUrl} alt="image" />
//           <div className='mt-4  md:ml-4 flex-1'>
//             <p className='font-semibold text-lg md:text-xl'>{dataa.ProductName}</p>
//             <span className='font-medium text-gray-500 mt-2'>{dataa?.INR}</span>
//             <MdDelete
//               onClick={() => deleteHandler(dataa.id)} // Pass the id here
//               className='cursor-pointer mt-2'
//             />
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Cart;
