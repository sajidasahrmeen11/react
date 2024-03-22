import React, { Component } from "react";

function Meradata(props) {
  return (
    <>       
      {/* //ye framgment tag ha <> </> jb multiple html tag use krty hain tb use krty hain */}

      {/* inline stlye */}
      <h1  style={{color:"red"}}>Hello {props.name}</h1>
      <h2>{props.greeting}</h2>
      <img src={props.logo}  height={200} width={250}></img>
    </>
  );
}

export default Meradata;



// task send data between two Component