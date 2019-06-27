import React, {Component} from 'react';
import TodoItems from './TodoItems'
import Header from './Header';

class Todo extends Component {
    state = {
      todoItems : ['cook','eat','sleep','relax','pray'],
      newTodo : ""
    };
    
    handleChange = (e) => {
        this.setState({newTodo: e.target.value})
        
    }
    handleSubmit = (e) => {

        this.setState(state => {
            const todoItems = this.state.todoItems.concat(state.newTodo);
            return {
                todoItems,
                newTodo:"",
            }
        })
        e.preventDefault()
        console.log(this.state.newTodo)
    }
    render (){
        const todoItems =['cook','eat','sleep','relax','pray'];
        return (
            <div>
          <Header title = "MY TODO TITLE"/> 
    
            <h1> Welcome to my todo App</h1>
            
            {this.state.todoItems.map(item =>(
            <TodoItems individualItem = {item}/>
            ))}
            <form onSubmit = {this.handleSubmit}>
                <label htmlFor = "">Todo Item</label><br/>
                <input type ="text" name = "todo-item" 
                value ={this.state.newTodo} onChange={this.handleChange} />{" "} <br/>
                <button>Submit</button>
            </form>
            </div>
        )
    }
}
export default Todo;
