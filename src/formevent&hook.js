import React, { useState } from "react";

 function Blogs() {

 const [title, settitle]=useState('');

 const [blog, setblog]=useState('');

 const[author, setauthor]=useState('james');
return(


<>

<form onSubmit={(event)=>{
event.preventDefault();  //refresh ni krega ye
const blogdata={title,blog,author};

console.log(blogdata);

}}>

<label>enter title</label>
<input type="text" required onChange={(event)=>settitle(event.target.value)}   value={title}></input>
<br></br>
<label>enter blog</label>
<input type="text" required onChange={(event)=>setblog(event.target.value)}   value={blog}></input>
<br></br>
<label>enter author</label>
<select onChange={(event)=>setauthor(event.target.value)}   value={author}>

<option value="john">Jhon

</option>

<option value="vancy">Vancy

</option>
</select>
<br></br>
<button >Submit</button>
</form>

{title}
<br></br>

{blog}
<br></br>
{author}

</>

);




 }


 export default Blogs;