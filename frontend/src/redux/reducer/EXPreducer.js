import {  GET_EXP1 } from "../Types/EXPtypes";


const initialState = {
  expenses: [],
};

const EXPreducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_EXP1:
          return { ...state, expenses: payload };
        default:
          return state;
      }
   
  
};
export default EXPreducer;