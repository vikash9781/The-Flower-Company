import { INCREMENT_QUANTITY } from './actionTypes';

const ActionI = (id) => {
  return {
    type: INCREMENT_QUANTITY,
    payload: id,
  };
};

export default ActionI;


































// import { INCREMENT_QUANTITY } from './actionTypes'
// const ActionI = ( id) => {
//   console.log("payload",id);
//   return {
//     type : INCREMENT_QUANTITY,
//     payload:id
// }
// };

// export default ActionI;