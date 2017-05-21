import React, {Component} from 'react';

class AddTodo extends Component{
  constructor(){
    super()
    this.state={
      text:''
    }
    this.handleChange=this.handleChange.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
  }
  handleChange(e){
    this.setState({
      text: e.target.value
    })
  }
  handleSubmit(e){
    e.preventDefault()
    this.setState({
      text:''
    })
    this.props.handleOnSubmit(this.state.text)
  }


  render(){
    return(
      <div className="form-container">
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.text} onChange={this.handleChange}/>
          <input type="submit" value="add to list"/>
        </form>
      </div>
    )
  }

}
export default AddTodo
