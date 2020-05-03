import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Todos from './components/Todos'
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo';
import About from './components/pages/About'
import './App.css';
import { v4 as uuidv4 } from 'uuid';

class App extends React.Component {

  state = {
    todos: [
      {
        id: uuidv4(),
        title: "movies",
        completed: false
      },
      {
        id: uuidv4(),
        title: "dinner",
        completed: false
      },
      {
        id: uuidv4(),
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

  addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      completed: false
    }
    if (title !== '') {
      this.setState({ todos: [...this.state.todos, newTodo] })
    }
    
  }

  render() {
    
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} toggleComplete={this.toggleComplete} deleteTodo={this.deleteTodo} />
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>
        
        </div>
      </Router>
      
    );
  }
}

export default App;
