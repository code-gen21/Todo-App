import React, { Component } from 'react'
import Todo from './todo';
import {v4 as uuidv4} from "uuid"
import './Todoform.css'


class Todoform extends Component{
    constructor(props){
        super(props);
        this.state={task:""}
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(evt){
        evt.preventDefault();
        this.props.addtodo({...this.state,id:uuidv4(),completed:false});
        this.setState({task:""});

    }
    handleChange(evt){
        this.setState({[evt.target.name]:evt.target.value});
    }

    render(){
        return(
            <form className='NewTodoForm' onSubmit={this.handleSubmit}>
                <label htmlFor='todo-item'>New Todo</label>
                <input 
                type="text"
                id="todo-item"
                placeholder='New Todo'
                name='task'
                value={this.state.task}
                onChange={this.handleChange}
                 />
                 <button> Add Todo</button>
            </form>
        )
    }

}

export default Todoform;