import { ADD_TO_CART } from './actionTypes'
 const ActionA = ( payload) => {
  console.log("payload",payload);
  return {
    type : ADD_TO_CART,
    payload
}
};

export default ActionA