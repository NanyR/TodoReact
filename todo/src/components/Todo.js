import React, {Component} from 'react'



class Todo extends Component{

handleDone(e){
    e.preventDefault()
    this.props.onDone(e.target.name)
}
handleEdit(e){
    e.preventDefault()
    this.props.onEdit()
}
handleDelete(e){
    e.preventDefault()
    this.props.onDelete()
}

  render(){
    return (
    <div>
      <li>{this.props.name}</li>
      <button onClick={this.handleDone.bind(this)} name={this.props.name}>Done</button>
      <button onClick={this.handleEdit.bind(this)}>Edit</button>
      <button onclick={this.handleDelete.bind(this)}>Delete</button>
    </div>
    )
  }

}




export default Todo
