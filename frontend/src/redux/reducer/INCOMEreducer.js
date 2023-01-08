
import { GET_INC1 } from "../Types/INCOMEtypes";


const initialState = {
  incomes: [],
};

const INCOMEreducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_INC1:
          return { ...state, incomes: payload };
        default:
          return state;
      }
   
  
};
export default INCOMEreducer ;