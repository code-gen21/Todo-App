import react,{Component} from 'react'
import Todo from './todo';
import Todoform from './todoform';
import './TodoList.css'

class Todolist extends Component{
    constructor(props){
        super(props);
        this.state={todos:[]};
        this.addtodo=this.addtodo.bind(this);
        this.remove=this.remove.bind(this);
        this.update=this.update.bind(this);
        this.toggleCompletion=this.toggleCompletion.bind(this);
    }
    addtodo(item){
        if(item.task.length>0)
        this.setState({todos:[...this.state.todos,item]});
    } 
    remove(id){
        this.setState({
            todos:this.state.todos.filter(t=>t.id!==id)
        })
    }

    update(id,newtask){
        const updateTodos=this.state.todos.map(todo=>{
            if(todo.id===id){
                return {...todo,task:newtask}
            }
            return todo;
        });
        this.setState({todos:updateTodos});
    }

    toggleCompletion(id){
        const updateTodos=this.state.todos.map(todo=>{
            if(todo.id===id){
                return {...todo,completed:!todo.completed}
            }
            return todo;
        });
        this.setState({todos:updateTodos});
    }


    render(){
        const todos=this.state.todos.map(mp=>(
            <Todo key={mp.id} id={mp.id} item={mp.task} completed={mp.completed} removeTodo={this.remove} updateTodo={this.update} toggleTodo={this.toggleCompletion} />
        ))
        return(
            <div className='TodoList'>
                <h1>Todo List!<span>A Simple React Todo List App.</span></h1> 
                <ul>
                {todos}
                </ul>
                
                <Todoform addtodo={this.addtodo} />
            </div>
        )
    }
}
export default Todolist;