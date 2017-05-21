import React, {Component} from 'react'
//components
import AddTodo from './AddTodo'


class Todo extends Component{
  constructor(){
    super()
    this.state={
      edit: false
    }
  }

handleDone(e){
    e.preventDefault()
    this.props.onDone(e.target.name)

}
handleEdit(e){
    e.preventDefault()
    this.setState({
      edit: true
    })

}
handleDelete(e){
    e.preventDefault()
    this.props.onDelete(e.target.name)
}

  render(){
    return (
    <div>
        {this.state.edit ? <AddTodo button="update task" type="edit"/> : <div><li>{this.props.name}</li>
        <button onClick={this.handleDone.bind(this)} name={this.props.name}>Done</button>
        <button onClick={this.handleEdit.bind(this)} name={this.props.name}>Edit</button>
        <button onClick={this.handleDelete.bind(this)} name={this.props.name}>Delete</button></div>}

    </div>
    )
  }

}




export default Todo
