  
import React from "react";

const Logout = () => {
  

  function logoutButton (){
    window.alert("Vous êtes maintenant déconnecter.");
   
    /*const infoUser = {
      phone: this.state.phone,
      username: this.state.password
  };
  let conection = JSON.stringify(infoUser);*/
  //localStorage.setItem("infoUser",JSON.stringify({id:JSON.parse(localStorage.getItem("infoUser")).id,username:JSON.parse(localStorage.getItem("infoUser")).username,phone:JSON.parse(localStorage.getItem("infoUser")).phone}));
  localStorage.clear()
  localStorage.setItem("infoUser",JSON.stringify({id:"",username:"",phone:""}));
    //localStorage.setItem('infoUser', "");
    console.log(localStorage)
    window.location = "/";
  } 

  return (
    <div>
      <button onClick={logoutButton} className="logout">Se Déconnecter</button>
    </div>
  );
};

export default Logout;