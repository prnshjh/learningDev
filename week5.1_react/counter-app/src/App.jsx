
//state, component
let state ={
  count: 0
}
function App(){
  return (
    <div>
      <button>
        Counter {state.count}
      </button>
    </div>
  )
}
export default App