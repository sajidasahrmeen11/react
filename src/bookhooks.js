import React, { useEffect, useState } from "react";


function Addhook(){

// let [like,setlike]=useState(10);


// return(


// <div>

// <button onClick={()=>{ setlike(like+1);
//         console.log(like)  }}> LIKE 👍 </button>
 


//  <h1>👍{like} </h1>
//  <h1>{like} 👍</h1>

// agre hm use likhengy tw shorcut hoga

// const [merivalue, setmerivalue] = useState("green");

// const styles={
//     background:merivalue,
// };



// return(

//     <div style={styles}>
//         <h1>
//             color Box
//         </h1>
// <input type="text" style={styles} placeholder="Type a color" onChange={(event)=>setmerivalue(event.target.value)}></input>


// <h1>{merivalue}</h1>
//         </div>



const [merivalue, setmerivalue] = useState(0);


const [value, setvalue] = useState(0);


// use effect hr bar render hony k bd chalta ha
useEffect(()=>{

alert("hello",merivalue);


},[merivalue]);

return(

    <div >
        <h1>
            Use Effect Example
        </h1>

<button onClick={()=>setmerivalue(merivalue+1)}> Click on me</button>


<button onClick={()=>setvalue(value+1)}> Click on Value</button>
{value}
<h1>{merivalue}</h1>
        </div>



);
}


export default Addhook;