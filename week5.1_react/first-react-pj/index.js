/*
npm vite@latest
REACT = STATE + COMPONENT + RE-RENDERING
STATE- AN JS OBJ THAT REPRESENTS DYNAMIC THINGS-THE VALUE THAT CHANGES 
COMPONENT -IT IS A RE-USABLE DYNAMIC HTML-SNIPPET THAT CHNAGES GIVEN A STATE
RE-RENDERING- CHANGES THE DOM ELEMENT A STATE CHANGE TRIGEGRS RE RENDERING
we usually have to define all the components of the once and  then all we have to do is to update the state of the app and react takes care of ree rendering





<!DOCTYPE html>
<html>

<body>
  <div id="buttonParent">
  </div>

  <script>
    let state = {
      count: 0
    }
    function onButtonPress() {
      state.count++;
      buttonComponentRerender()
    }
    function buttonComponentRerender() {
      document.getElementById("buttonParent").innerHTML = "";
      const component = buttonComponent(state.count);
     
      document.getElementById("buttonParent").appendChild(component);
    }
    function buttonComponent(count) {
      const button = document.createElement("button");
      button.innerHTML = `Counter ${count}`;
      button.setAttribute("onclick", "onButtonPress()");
      return button;
    }
    buttonComponentRerender();

  </script>
</body>

</html>


pure react
import { useState } from 'react'



function App() {
const [count, setCount]=useState(0);

function onClickHandler(){
  setCount(count+1);
}
  return (
    <div>
      <button onClick={onClickHandler}>Counter {count} </button>

    </div>

  )
}

export default App





*/