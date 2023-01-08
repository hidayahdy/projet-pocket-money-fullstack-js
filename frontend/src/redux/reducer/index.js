import { combineReducers } from "redux";
import Authreducer from "./Authreducer";
import errorreducer from "./errorreducer";
import EXPreducer from "./EXPreducer";
import INCOMEreducer from "./INCOMEreducer";


const rootReducer = combineReducers({
  Authreducer,
  errorreducer,
  EXPreducer,
  INCOMEreducer,
  
});
export default rootReducer;
