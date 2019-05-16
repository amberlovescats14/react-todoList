import React from 'react';
import './App.css';
import Todos from './components/Todos';


function App() {
  App.state = {
    todos: [
      {
        id: 1,
        title: "Take out the trash",
        completed: false,
      },
      {
        id: 2,
        title: "Dinner with wife",
        completed: false,
      },
      {
        id: 3,
        title: "Meeting with boss",
        completed: false,
      }
    ]

  }
  App.markComplete = (id) => {
    this.setState({ todos : App.state.todos.map((todo)=> {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo
    })  });
  }


  console.log(App.state.todos)
  return (
    <div className="App">
    <h1>hello</h1>
    <Todos todos={App.state.todos} markComplete={App.markComplete}/>
    </div>
  );
}

export default App;
