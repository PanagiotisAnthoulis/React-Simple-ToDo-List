import React from "react";
import '../css/style.css';
import ToDoForm from "./ToDoForm"; 
import ToDo from "./ToDo";

export default class ToDoList extends React.Component{
    state = {
        todos: [],
        todoToShow: "all"
    }
    addTodo = (todo) => {

        this.setState({
            todos: [todo,...this.state.todos]
            
        })
     }
    
    toggleComplete = (id) => {
        this.setState({
            todos : this.state.todos.map(
                todo => {
                    if(todo.id === id)
                    {
                        return {
                            ...todo,
                            complete:!todo.complete
                        }
                    }
                    else{
                        return todo;
                    }
                }
            )
        })
    }

    updateToDoToShow = (s) => {
        this.setState({
            todoToShow: s
        })
    }

    handleDeleteToDo = (id) =>{
        this.setState({
            todos:this.state.todos.filter( todo => todo.id !== id )
        })
    }

    render(){
        let todos = []

        if(this.state.todoToShow === "all"){
            todos = this.state.todos
        }
        else if (this.state.todoToShow === "active"){
            todos = this.state.todos.filter( todo => !todo.complete)
        }
        else if (this.state.todoToShow === "complete"){
            todos = this.state.todos.filter( todo => todo.complete)
        }
        return(
        <div className='d-flex flex-column align-items-center'>
            <div id='title' className='text-center mt-2'>
                ToDo or Not Todo
            </div>
            <ToDoForm onSubmit={this.addTodo} />    
            {todos.map( todo => (
                <ToDo key={todo.id} toggleComplete={() => this.toggleComplete(todo.id)}  todo={todo} onDelete={()=> this.handleDeleteToDo(todo.id)}> </ToDo>
            )) }     
            <div className='d-flex flex-column text-center align-self-stretch'>
                ToDos Left:{
                    this.state.todos.filter(
                        todo =>
                            !todo.complete
                        
                    ).length
                }
                <div className="d-flex pt-2 justify-content-between w-50 align-self-center">
                    <button className='cat_btn' onClick={()=> this.updateToDoToShow('all')}>All</button>
                    <button className='cat_btn' onClick={()=> this.updateToDoToShow('active')}>Active</button>
                    <button className='cat_btn' onClick={()=> this.updateToDoToShow('complete')}>Complete</button>
                </div>
            </div>
        </div>
        )
    }
}