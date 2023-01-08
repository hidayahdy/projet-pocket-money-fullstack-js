
import axios from "axios";
import { GET_INC, GET_INC1 } from "../Types/INCOMEtypes";

//get all
export const get_INC= () => async (dispatch) => {
  try {
    const res = await axios.get("/income/");

    dispatch({ type: GET_INC, payload: res.data.income});
  } catch (error) {
    console.log(error);
  }
};


//update
export const edit_INC= (id, data) => async (dispatch) => {
  try {
    const res = await axios.put(`/income/${id}`, data);

    dispatch(get_INC());
  } catch (error) {
    console.log(error);
  }
};

//GET for one user
export const get_INC1 = () => async (dispatch) => {
  const config = {
    headers: {
      token: localStorage.getItem("token"),
    },
  };
  try {
    
    const res = await axios.get("/income/myincomes/" , config);
    
    dispatch({ type: GET_INC1, payload: res.data.income});

  } catch (error) {
    console.log(error);
  }
}

//add
export const add_INC = (data) => async (dispatch) => {
  const config = {
    headers: {
      token: localStorage.getItem("token"),
    },
  };
  try {
    const res = await axios.post("/income/", data,config);
    console.log(res.data);
    dispatch(get_INC1());
  } catch (error) {
    console.log(error);
  }
};
//delete
export const del_INC = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/income/${id}`);

    dispatch(get_INC());
  } catch (error) {
    console.log(error);
  }
};
