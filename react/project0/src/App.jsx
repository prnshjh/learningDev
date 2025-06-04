import { useState } from "react";
import { useEffect } from "react";

function App(){
const [todos, setTodos]=useState([])
useEffect(async()=>{
  fetch("https://sum-server.100xdevs.com/todos")
  .then (async function(res){
    const json =await res.json();
    setTodos(json);
  })
},[])
return <div>
{todos.map(todo=><Todo></Todo>)}
</div>
}

function Todo({title, description}){
 <div>
  <h1>
    {title}
  </h1>
  <h2>
    {description}
  </h2>
 </div>
}
export default App