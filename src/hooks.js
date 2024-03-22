import React, { useCallback, useState } from "react";


// let counter=15
// const addvalue = () =>{

//     console.log("Clicked",Math.random());
//     counter=counter+1;

  
//     return (
//         <>
//   <h1>Counter value : {counter} </h1>
    
//     <button onClick={addvalue}>Add Value</button>
//     </>);
//     }


/////////////// with hooks /////////////////////////

////-------------------- use state--------------------------//////////////////////


function addValue(counter, setCounter) {
    console.log("Clicked", Math.random());
    setCounter(counter + 1);
  }
  
  function removeValue(counter, setCounter) {
    console.log("Clicked", Math.random());
    setCounter(counter - 1);
  }
  
  function CounterComponent() {


    const [counter, setCounter] = useState(15);
  
    return (
      <>
        <h1>Counter value: {counter} </h1>
  
        <button onClick={() => addValue(counter, setCounter)}>
          Add Value {counter}
        </button>
  
        <button onClick={() => removeValue(counter, setCounter)}>
          Remove Value {counter}
        </button>
      </>
    );
  }




  
  export default CounterComponent;