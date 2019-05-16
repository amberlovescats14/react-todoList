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
  console.log(App.state.todos)
  return (
    <div className="App">
    <h1>hello</h1>
    <Todos todos={App.state.todos}/>
    </div>
  );
}

export default App;
