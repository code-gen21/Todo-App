import React, { Component } from 'react'
import "./Todo.css"

class Todo extends Component{
    constructor(props){
        super(props);
        this.state={
            isEditing:false,task:this.props.item
        }
        this.handleRemove=this.handleRemove.bind(this);
        this.toggleForm=this.toggleForm.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.handleUpdate=this.handleUpdate.bind(this);
        this.handleToggle=this.handleToggle.bind(this);
    }

    handleRemove(e){
        this.props.removeTodo(this.props.id);
    }
    toggleForm(){
        this.setState({isEditing:!this.state.isEditing});
    }
    handleUpdate(e){
        e.preventDefault();
        this.props.updateTodo(this.props.id,this.state.task);
        this.toggleForm();
    }
    handleChange(evt){
        this.setState({[evt.target.name]:evt.target.value});
    }

    handleToggle(e){
        this.props.toggleTodo(this.props.id)
    }
    

    render(){
        let result;
        if(this.state.isEditing){
            result=(
                <div className='Todo'>
                    <form className='Todo-edit-form' onSubmit={this.handleUpdate}>
                        <input type="text" value={this.state.task} name="task" onChange={this.handleChange} />
                        <button>Save</button>
                    </form>
                </div>
            )
        }
        else{
            result=(
                <div className='Todo' style={{cursor:"pointer"}}>
                    <li className={this.props.completed ? "Todo-task completed" : "Todo-task"} onClick={this.handleToggle}>{this.props.item}</li>
                    <div className='Todo-buttons'>
                        <button onClick={this.toggleForm}><i className="fa-solid fa-pen"></i></button>
                        <button onClick={this.handleRemove}><i className="fa-solid fa-trash"></i></button>
                    </div>
                 </div>
            )
        }
       
        return result;
    }
}
export default Todo;