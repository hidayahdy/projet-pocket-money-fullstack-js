import React from "react";
const NotAdmin = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        margin: "20px",
      }}
    >
      <h1 className="text-danger">You are not an admin</h1>
      <img style={{justifyContent: "center", alignItems: "center",height: "450px",width:"600px"}}alt="NotAdmin" 
      className=" img-fluid m-3" src="https://img.freepik.com/vecteurs-libre/erreur-404-concept-pour-page-destination_52683-9671.jpg?w=740&t=st=1661426941~exp=1661427541~hmac=5fa9ecf5b4f7291530d4db72154cd2979bb24ee760c9294ce4ed70e5aba053ec" />
    </div>
  );
};

export default NotAdmin;