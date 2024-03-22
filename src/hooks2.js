import React, { useEffect, useState } from 'react';


// function Effect(){

// const [num, setnum] = useState(0);


// useEffect(()=>{

//     alert("hello"+num)
// })

// return(

// <>

// <h1>{num}</h1>
// <button onClick={()=>{setnum(num+1)

// }}>Click to count{num}</button>

// <br></br>
// <button onClick={()=>{setnum(num-1)

// }}>Click to minus {num}</button>
// </>

// );
// }

// export default Effect;


function Counter(){



const [num, setnum] = useState(0);
const [product, setproduct] = useState("Eggs");


useEffect(()=>{

alert(product + "High Demand");

},[num]);   //ab ye product p kam nai krega


return(
    <div>
        Current {product}'s count:{num}
        <div>
        <button onClick={()=>{setnum(num+1)

}}>Add to cart{num}</button>

<br></br>
<button onClick={()=>{setnum(num-1) }}>Remove From Cart{num}</button>


Change Product:{""}

<input type='text' onChange={(e)=>setproduct(e.target.value)}></input>


        </div>
    </div>
);

}


export default Counter;