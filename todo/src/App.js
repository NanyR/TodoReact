import React, { Component } from 'react';
import AddTodo from './components/AddTodo'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddTodo/>
      </div>
    );
  }
}

export default App;
