// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';
// import ActionR from '../Redux/ActionR';
// import ActionI from '../Redux/ActionI';
// import ActionD from '../Redux/ActionD';
// import DeleteIcon from '@mui/icons-material/Delete';
// import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
// const Cart = () => {
//   const NewData = useSelector(state => state.cart);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
//     dispatch({ type: "LOAD_CART", payload: storedCart });
//   }, [dispatch]);
//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(NewData));
//   }, [NewData]);
//   const handleRemoveCart = (id) => {
//     dispatch(ActionR(id));
//   };
//   const IncrementCart = (id) => {
//     dispatch(ActionI(id));
//   };
//   const DecrementCart = (id) => {
//     dispatch(ActionD(id));
//   };
//   if (NewData.length === 0) {
//     return (
//       <div className="h-[55vh] flex justify-center items-center text-4xl font-semibold text-gray-500">
//         Cart is Empty
//       </div>
//     );
//   }
//   return (
//     <div className='p-4 bg-gray-100'>
//       <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-4 text-center'>Your Bag</h2>
//       <ul className='space-y-6 mt-4'>
//         {NewData?.map((item) => (
//           <li className='flex flex-col md:flex-row border-2 rounded-xl shadow-lg w-full md:w-[35rem] lg:w-[50rem] h-auto md:h-[15rem] mx-auto p-4' key={item.id}>
//             <img className='w-full md:w-[15rem] rounded-lg mx-auto md:mx-0' src={item.img} alt={item.title} />
//             <div className='mt-4  md:ml-4 flex-1'>
//               <p className='font-semibold text-lg md:text-xl'>{item.title}</p>
//               <h1 className='font-medium text-gray-500 mt-2'>₹{item.price}</h1>
//               <p className='font-medium text-gray-500 mt-2'>Quantity: {item.quantity}</p>
//             </div>
//             <div className='mt-4  md:ml-auto  items-center justify-between  '>
//               <div className='space-x-6'>
//                 <button
//                   className='font-extrabold text-2xl md:text-3xl text-gray-500 hover:text-green-400'
//                   onClick={() => IncrementCart(item.id)}
//                 >
//                   +
//                 </button>
//                 <button
//                   className='font-extrabold text-2xl md:text-3xl text-gray-500 hover:text-sky-400'
//                   onClick={() => DecrementCart(item.id)}
//                 >
//                   -
//                 </button>
//                 <button
//                   className='font-extrabold text-2xl md:text-3xl text-gray-500 hover:text-red-600'
//                   onClick={() => handleRemoveCart(item.id)}
//                 >
//                   <DeleteIcon />
//                 </button>
//               </div>
//               <p className='font-semibold text-lg mt-4 '>Total: ₹{item.price * item.quantity}</p>
//             </div>
//           </li>
//         ))}
//       </ul>
//       <div className='mt-8 text-center'>
//         <Link to='/' className='text-lg md:text-xl font-semibold text-gray-700 hover:text-blue-700'>
//           <KeyboardBackspaceIcon /> Continue Shopping
//         </Link>
//       </div>
//     </div>
//   );
// };
// export default Cart;