import { REMOVE_FROM_CART } from './actionTypes'
const ActionR = ( id) => {
  console.log("payload",id);
  return {
    type : REMOVE_FROM_CART,
    payload:id
}
};

export default ActionR;