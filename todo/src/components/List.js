import React, {Component} from 'react'
//components
import AddTodo from './AddTodo'
import Todo from './Todo'


class List extends Component{
  constructor(){
    super()
    this.state={
      pending:[],
      done:[],

    }
    this.handleOnSubmit=this.handleOnSubmit.bind(this)
    this.handleDone=this.handleDone.bind(this)
    this.handleDelete=this.handleDelete.bind(this)
  }

  handleOnSubmit(todo){
    this.setState({
      pending:[...this.state.pending, todo]
    })
  }
  handleDone(todo){
    let i=this.state.pending.indexOf(todo)
    let first=this.state.pending.slice(0, i)
    let second=this.state.pending.slice(i+1)
    this.setState({
      done:[...this.state.done, todo],
      pending:[this.state.pending.slice(0, i), this.state.pending.slice(i+1)]
    })

  }

  handleUpdate(todo){
    let i=this.state.pending.indexOf(todo)
    let first=this.state.pending.slice(0, i)
    let second=this.state.pending.slice(i+1)
    this.setState({
      pending:[first, todo, second]
    })
  }
  handleDelete(todo){
    let i=this.state.pending.indexOf(todo)
    let first=this.state.pending.slice(0, i)
    let second=this.state.pending.slice(i+1)
    this.setState({
      pending:[first, second]
    })
  }

  render(){
    const list= this.state.pending.map((listItem, index)=>{
      return <Todo name={listItem} onDone={this.handleDone} onEdit={this.handleEdit} onDelete={this.handleDelete} key={index}/>
    })
    return(
      <div className="list-container">
        <AddTodo handleOnSubmit={this.handleOnSubmit} button="add task list" type="submit"/>
        <ul className="tasks-container">
          {list}
          </ul>

      </div>
    )
  }

}

export default List
