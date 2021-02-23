import React from 'react'
import axios from 'axios'

export default class ImportAxio extends React.Component {
    state = {
        tasks: [],
        loaded: false,
        // State for new task added
        newTask : "",

        // for editing the title field when being edited
        taskBeingEdited : 0,
        modifiedTaskTitle : ""
    }
    // Load in the data using componetDidMount
    async componentDidMount() {
        console.log("List is mounted and ready")
        let response = await axios.get('items.json');
        console.log(response.data.tasks)
        this.setState({
            tasks: response.data.tasks,
            loaded: true
        })

        response = await axios.get("colours.json");
        console.log(response.data)

        this.setState({
            colours: response.data
        })
    }
    // Display the list
    renderList = () => {
        if (this.state.tasks.length === 0) {
            return <div>There is no data </div>
        }
        else {
            return this.state.tasks.map(item => 
                this.state.taskBeingEdited !== item.id 
                ? this.displayTask(item)
                : this.displayEditTask(item)
            )
        }
    }
    // Event handler
    eventHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    // function to add task
    addTask = e => {
        let newTask = {
            id: Math.random() *10000 +9999,
            title : this.state.newTask, 
            done:false
        }
        console.log(newTask)
        this.setState ({
            tasks : [...this.state.tasks, newTask],
        })
        this.setState ({
            newTask : ""
        })
    }
    // Find and change the checkbox of the task clicked
    findTask =task_id=>{
        // find the task being modified
        let currentTask = this.state.tasks.filter(task=> task.id === task_id)[0];
        // console.log(currentTask)
        // clone the task
        let modifiedTask ={...currentTask}; 
        // change and invert the done True->False or False->True
        modifiedTask.done = !currentTask.done

        // clone a new list and insert the modified task
        let modifiedList = this.state.tasks.map( task => {
            // if it is not the task, return the original task to the array
            if  (task.id !== task_id) {
                return task;
            }
            // else replace the task with the modified task
            else {
                return modifiedTask;
            }
        })
        this.setState ({
            tasks : modifiedList
        })
    }
    // Delete task
    deleteTask =task_id=> {
        // find the task index
        let task_index = this.state.tasks.findIndex( task=> task.id === task_id)
        // modified by slicing and set it back to the state
        this.setState ({
            tasks : [...this.state.tasks.slice(0,task_index),
                     ...this.state.tasks.slice(task_index+1)]
        })

    }
    // Display normal Li
    displayTask = item => {
        return (
            <li key={item.id}>{item.title}
                <input 
                    type="checkbox" 
                    checked={item.done} 
                    onChange={
                        ()=>{
                            this.findTask(item.id)
                        }
                    }
                />
                <button onClick={
                    async ()=> {
                        this.setState ({
                            taskBeingEdited : item.id,
                            modifiedTaskTitle: item.title
                        })
                    }
                }>Edit</button>
                <button onClick={
                    ()=>{
                        this.deleteTask(item.id);
                    }
                }>Delete</button>
            </li>
        )
    }
    // Display Edit Task
    displayEditTask = task => {
        return (<li>
                <input 
                    type="text"
                    name = "modifiedTaskTitle"
                    value={this.state.modifiedTaskTitle}
                    placeholder="Enter new description"
                    onChange={this.eventHandler} />
                <button
                    onClick={
                        async ()=> {
                            this.updateTask(task.id)
                            this.setState({
                                taskBeingEdited : 0
                            })
                        }
                    }
                >Update</button>
            </li>)
    }
    // Update Task 
    updateTask =task_id=>{
        // find the task being modified
        let currentTask = this.state.tasks.filter(task=> task.id === task_id)[0];
        // console.log(currentTask)
        // clone the task
        let modifiedTask ={...currentTask}; 
        // change and invert the done True->False or False->True
        modifiedTask.title = this.state.modifiedTaskTitle

        // clone a new list and insert the modified task
        let modifiedList = this.state.tasks.map( task => {
            // if it is not the task, return the original task to the array
            if  (task.id !== task_id) {
                return task;
            }
            // else replace the task with the modified task
            else {
                return modifiedTask;
            }
        })
        this.setState ({
            tasks : modifiedList
        })
    }

    render() {
        return (
            <React.Fragment>
                <h2>To Do List 2021</h2>
                <ul>{this.renderList()} </ul>

                <div>
                    <h3>Create New Task</h3>
                    <input type="text" name="newTask" value=
                    {this.state.newTask} onChange={this.eventHandler}/>
                    <button onClick={this.addTask}>Add</button>
                </div>
                

            </React.Fragment>
        )
    }
}

