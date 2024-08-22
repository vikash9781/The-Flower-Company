import { ADD_TO_CART, REMOVE_FROM_CART, INCREMENT_QUANTITY, DECREMENT_QUANTITY } from './actionTypes';

const initialState = {
  cart: JSON.parse(localStorage.getItem('cart')) || [], 
};

const cartReducer = (state = initialState, action) => {
  let updatedCart;
  switch (action.type) {
    case ADD_TO_CART:
      const itemInCart = state.cart.find(item => item.id === action.payload.id);
      if (itemInCart) {
        updatedCart = state.cart.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updatedCart = [...state.cart, { ...action.payload, quantity: 1 }];
      }
      localStorage.setItem('cart', JSON.stringify(updatedCart)); 
      return {
        ...state,
        cart: updatedCart,
      };

    case REMOVE_FROM_CART:
      updatedCart = state.cart.filter(item => item.id !== action.payload);
      localStorage.setItem('cart', JSON.stringify(updatedCart)); 
      return {
        ...state,
        cart: updatedCart,
      };

    case INCREMENT_QUANTITY:
      updatedCart = state.cart.map(item =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return {
        ...state,
        cart: updatedCart,
      };

    case DECREMENT_QUANTITY:
      updatedCart = state.cart
        .map(item =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0); 
      localStorage.setItem('cart', JSON.stringify(updatedCart)); 
      return {
        ...state,
        cart: updatedCart,
      };

    default:
      return state;
  }
};

export default cartReducer;

















































// import { ADD_TO_CART, REMOVE_FROM_CART, INCREMENT_QUANTITY, DECREMENT_QUANTITY } from './actionTypes';
// const initialState = {
//   cart: [],
// };
// const cartReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "LOAD_CART":
//       return {
//         ...state,
//         cart: action.payload,
//       };
    // case ADD_TO_CART:
    //   const itemInCart = state.cart.find(item => item.id === action.payload.id);
    //   if (itemInCart) {
    //     return {
    //       ...state,
    //       cart: state.cart.map(item =>
    //         item.id === action.payload.id
    //           ? { ...item, quantity: item.quantity + 1 }
    //           : item
    //       ),
    //     };
    //   }
    //   return {
    //     ...state,
    //     cart: [...state.cart, { ...action.payload, quantity: 1 }],
    //   };
//     case REMOVE_FROM_CART:
//       return {
//         ...state,
//         cart: state.cart.filter(item => item.id !== action.payload),
//       };
//     case INCREMENT_QUANTITY:
//       return {
//         ...state,
//         cart: state.cart.map(item =>
//           item.id === action.payload
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         ),
//       };
//     case DECREMENT_QUANTITY:
//       return {
//         ...state,
//         cart: state.cart.map(item =>
//           item.id === action.payload && item.quantity > 1
//             ? { ...item, quantity: item.quantity - 1 }
//             : item
//         ),
//       };
//     default:
//       return state;
//   }
// };
// export default cartReducer;