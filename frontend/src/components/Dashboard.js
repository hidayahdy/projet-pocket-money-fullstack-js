
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getusers } from "../redux/Action/authAction";
import DashboardCard from "./DashboardCard";
import NotAdmin from "./NotAdmin";


const Dashboard = () => {

      const dispatch = useDispatch();
      useEffect(() => {
        dispatch(getusers());
      }, []);
      const users = useSelector((state) => state.Authreducer.users);
      const user = useSelector((state)=>state.Authreducer.user)
      const token = localStorage.getItem("token")
      console.log("second",user)
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          {token && user.isAdmin ==true && (
          users.map((el) => (
            <div key={el._id}>
              <DashboardCard el={el} />
            </div>
          ))) }
          {token && user.isAdmin==false && (
            <NotAdmin/>
          )}
        </div>
      );
    };
    


export default Dashboard;