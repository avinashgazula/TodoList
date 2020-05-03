import React from 'react';
import Todos from './components/Todos'
import Header from './components/layout/Header'
import './App.css';

class App extends React.Component {

  state = {
    todos: [
      {
        id: 1,
        title: "movies",
        completed: false
      },
      {
        id: 2,
        title: "dinner",
        completed: false
      },
      {
        id: 3,
        title: "meeting",
        completed: false
      }
    ]
  }

  toggleComplete = (id) => {

    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
        todo.completed = !todo.completed;
        }
        return todo;
    })})
    
  }

  deleteTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter(todo => {
        if (todo.id !== id) {
          return todo;
        }
        return null;
      })
    })
  }

  render() {
    
    return (
      <div className="App">
        <Header/>
        <Todos todos={this.state.todos} toggleComplete={this.toggleComplete} deleteTodo={this.deleteTodo}/>
      </div>
    );
  }
}

export default App;
