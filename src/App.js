import React, { Component } from 'react'
import './App.css';
export default class App extends Component {
  state = {
    todo: [
      { id: Math.random(), action: 'workchop props', isDone: false },
      { id: Math.random(), action: 'workchop state', isDone: false },
      { id: Math.random(), action: 'workchop Hooks', isDone: false }
    ],
    newText: ""
  };

  handleDelete = (i) => this.setState({ todo: this.state.todo.filter(el => el.id !== i) })
  handlecomplet = (i) => this.setState({ todo: this.state.todo.map(el => el.id === i ? { ...el, isDone: !el.isDone } : el) })
  handleChange = (e) => this.setState({ newText: e.target.value })
  handlesubmit = (e) => {
    e.preventDefault();
    
    const newtask = {
      id: Math.random(),
      action: this.state.newText,
      isDone: false
    }
    !this.state.newText.trim()
    ?alert('Please fill input'):
    this.handleAdd(newtask)
    this.setState({ text: '' })
  };
  handleAdd = (newtask) => this.setState({ todo: [...this.state.todo, newtask] })

  render() {
    return (
      <div className="App">
        <h2>Our to do list </h2>
        <form onSubmit={this.handlesubmit}>
          <input type="text" value={this.state.newText} onChange={this.handleChange} />
          <button>Add</button>
        </form>
        {this.state.todo.map(el => (<div>
          <h1 className={el.isDone ? "done" : ""}>{el.action}</h1>
          <button onClick={() => this.handlecomplet(el.id)}>complete</button>
          <button onClick={() => this.handleDelete(el.id)}>delete</button>
        </div>))}
      </div>

    )
  }
}
