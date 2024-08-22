import { DECREMENT_QUANTITY } from './actionTypes';

const ActionD = (id) => {
  return {
    type: DECREMENT_QUANTITY,
    payload: id,
  };
};

export default ActionD;































// import { DECREMENT_QUANTITY } from './actionTypes'
// const ActionD = ( id) => {
//   console.log("payload",id);
//   return {
//     type : DECREMENT_QUANTITY,
//     payload:id
// }
// };

// export default ActionD;