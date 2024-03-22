import React from "react";


function Add(){

let like=10;
const onUserClick=()=>console.log("Clicked 😊");

return(




// {/* <button onClick={()=>console.log("Clicked 😊")}> Click me </button> */}


// {/* <button onClick={onUserClick}>Click</button> */}


<div>

<button onClick={()=>{ like++;
        console.log(like)  }}> LIKE 👍 </button>
 


 <h1>{like} 👍</h1>
 <h1>{like} 👍</h1>


</div>


);

}


export default Add;