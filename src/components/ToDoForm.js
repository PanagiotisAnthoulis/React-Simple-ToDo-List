import React from "react";
import shortid from 'shortid';
export default class ToDoForm extends React.Component{
    state={
        text:''
    }

    handleChange = (event) =>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if(this.state.text!==''){
        this.props.onSubmit({
            text: this.state.text,
            complete: false,
            id: shortid.generate()
        })
        this.setState({
            text:''
        })
        }
   

    }
    
    render(){
        return(
        <form  className='mx-auto mt-4 d-flex justify-content-center pb-4' onSubmit={this.handleSubmit}>
                <input autoFocus className='d-block p-2' name='text' type='text' value={this.state.text} onChange={this.handleChange} placeholder='Type in your ToDo'/>
                <button className='d-block ml-4 p-1 button' type="submit">Add ToDo</button>
        </form>
        )
    }
}