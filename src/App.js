// import logo from './logo.svg';
 import './App.css';
// // import Salam from './greet' // This line is commented out, make sure it's intended

// // Import Salam without curly braces if it's a default export
 import Salam from './greet';

 import Combutton from './buttondata';
 import img1 from "./images/car.jpg";

 import Meradata from './meradata';
 import { Button, Button2 } from './button';
 function App() {
   return (
    <div className="App">
       {/* <Meradata name="Sara" greeting="hello" />
      <Meradata name="Sajida" greeting="hello" /> */}
<Meradata
        name="John"
        greeting="Welcome to my website!"
        logo={img1} 
      />

<Meradata
        name="Sherry"
        greeting="Welcome to my website!"
        logo={img1} 
      />

      <Salam></Salam>
       <Salam></Salam>
       <Button></Button>
      <Button2></Button2>
    
      <Combutton text="Successfull" color="red" fontSize={12}/>

<br></br>

      <Combutton text="Wrong" color="blue" fontSize={14} />
 


<br>
</br>
<Combutton text="Right" color="green" fontSize={14} />

     </div>
   );
}

 export default App;




