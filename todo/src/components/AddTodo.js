import React, {Component} from 'react';

class AddTodo extends Component{
  constructor(){
    super()
    this.state={
      text:''
    }
    this.handleChange=this.handleChange.bind(this)
  }
  handleChange(e){
    this.setState({
      text: e.target.value
    })
  }

  render(){
    return(
      <div>
        <form>
          <input type="text" value={this.state.text} onChange={this.handleChange}/>
        </form>
      </div>
    )
  }

}
export default AddTodo
