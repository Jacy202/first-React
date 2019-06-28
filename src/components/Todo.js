import React, {Component} from 'react';
import TodoItems from './TodoItems'
import Header from './Header';

class Todo extends Component {
    state = {
      todoItems : [],
      newTodo : ""
    };
    
    handleChange = (e) => {
        this.setState({newTodo: e.target.value})
        
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState(prevState => {
            return{
                todoItems:[...prevState.todoItems, this.state.newTodo],
                newTodo: ""
            }
           
        })
    }
    
    componentDidUpdate(prevProps, prevState){
        if(prevState.todoItems.length !== this.state.todoItems.length){
            const JsonState = JSON.stringify(this.state.todoItems)
            localStorage.setItem('todoItem', JsonState)
            }
    }
    
    componentDidMount(){
        const itemsFromLocalStorage = localStorage.getItem('todoItem')
        const todoItems = JSON.parse(itemsFromLocalStorage);
        if(todoItems){
            this.setState(() => ({
                todoItems
        }))} 
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

