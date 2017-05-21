import React, {Component} from 'react'
//components
import AddTodo from './AddTodo'
import Todo from './Todo'


class List extends Component{
  constructor(){
    super()
    this.state={
      todos:[]
    }
    this.handleOnSubmit=this.handleOnSubmit.bind(this)
  }

  handleOnSubmit(todo){
    this.setState({
      todos:[...this.state.todos, todo]
    })
  }

  render(){
    const list= this.state.todos.map((listItem)=>{
      return <li><Todo name={listItem}/></li>
    })
    return(
      <div>
        <AddTodo handleOnSubmit={this.handleOnSubmit}/>
        {list}
      </div>
    )
  }

}

export default List
