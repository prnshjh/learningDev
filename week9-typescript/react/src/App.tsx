

const App = () => {
  return (
    <div><Todo
      title="Learn TypeScript"
      description="Understand the basics of TypeScript and its integration with React."
      completed={false}
    /></div>
  )

  interface Todo {
    title: string;
    description: string;
    completed: boolean;
  };

  function Todo(props: Todo) {
    return (
      <div>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <p>Status: {props.completed ? "Completed" : "Pending"}</p>
      </div>
    );
  }
}

export default App