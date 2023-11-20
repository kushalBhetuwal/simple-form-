import { useState } from "react";
const App =()=>{
const[score, setScore] = useState(0);
const[message, setMessage] = useState("");


const handleSubmit =(e)=>{
  e.preventDefault();
  if(Number(score)<5 && message.length<10){
    alert("please provide us feedback")
   return;
  }
  alert("form has been submitted")
}
  return(
    <form onSubmit ={handleSubmit}>
    <div>
    <h1>Give us Feedback</h1>
    <p>Score:{score}</p>
    <input type='range' min="0" max="10" onChange={(e)=>setScore(e.target.value)}/>
      <textarea rows="8" cols="100" onChange={(e)=>setMessage(e.target.value)}></textarea><br/>
      <button type="submit">Submit</button>
    </div>
    </form>
     
  )
}

export default App;