import React from "react";

// function Football() {
//     const shoot = (a, b) => {
//       alert(b.type);
//       /*
//       'b' represents the React event that triggered the function,
//       in this case the 'click' event
//       */
//     }
  
//     return (
//       <button onClick={(event) => shoot("Goal!", event)}>Take the shot!</button>
//     );
//   }



// function Football() {
//     const shoot = (a) => {
//       alert(a);
//     }
  
//     return (
//       <button onClick={() => shoot("Goal!")}>Take the shot!</button>
//     );
//   }





// function Football() {
//     function handleClick() {
//         let bodyStyle = document.body.style;
//         if (bodyStyle.backgroundColor === 'black') {
//             bodyStyle.backgroundColor = 'white';
//         } else {
//             bodyStyle.backgroundColor = 'black';
//         }
//     }

//     return (
//         <button onClick={handleClick}>
//             Toggle the lights
//         </button>
//     );
// }





//e.preventDefault(); ensures that the form is not submitted in the 
//default way (which would cause a page reload), but instead, it executes the custom behavior asan bhasha m refresh ni krta page
//defined within the onSubmit function, which in this case is showing an alert saying "Submitting!".//


//  function Football() {
//     return (
//        <form onSubmit={()=>alert('submitting')}>

// <button>Submit</button>

//        </form>
//     );
//   }


 function Football() {
    return (
       <form onSubmit={e=>{e.preventDefault();
       alert("submiting")}}>

<button>Submit</button>

       </form>
    );
  }



export default Football;
