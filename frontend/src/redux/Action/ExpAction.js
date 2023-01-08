
import axios from "axios";
import { GET_EXP, GET_EXP1 } from "../Types/EXPtypes";

//GET
export const get_EXP = () => async (dispatch) => {
  try {
    const res = await axios.get("/expense/");
    dispatch({ type: GET_EXP, payload: res.data.expense});
  } catch (error) {
    console.log(error);
  }

};

//GET for one user
export const get_EXP1 = () => async (dispatch) => {
  const config = {
    headers: {
      token: localStorage.getItem("token"),
    },
  };
  try {
    
    const res = await axios.get("/expense/myexpenses/" , config);
     console.log("res" )
    dispatch({ type: GET_EXP1, payload: res.data.expense});

  } catch (error) {
    console.log(error);
  }

};
//ADD
export const add_EXP = (data) => async (dispatch) => {
  const config = {
    headers: {
      token: localStorage.getItem("token"),
    },
  };
  try {
    const res = await axios.post("/expense/", data , config);
  
    dispatch(get_EXP1());
  } catch (error) {
    console.log(error);
  }
};

//DEL
export const del_EXP = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/expense/${id}`);

    dispatch(get_EXP());
  } catch (error) {
    console.log(error);
  }
};

//UPDATE
export const edit_EXP= (id, data) => async (dispatch) => {
  try {
    const res = await axios.put(`/expense/${id}`, data);
    console.log('HELLO update',res.data);
    dispatch(get_EXP());
  } catch (error) {
    console.log(error);
  }
};


