  
import React from "react";

const Logout = () => {
  

  function logoutButton (){
    window.alert("Vous êtes maintenant déconnecter.");
    localStorage.clear()
    localStorage.setItem('infoUser', "");
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