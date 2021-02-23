
import React from 'react'

export default class AdvancedTodoList extends React.Component {
    state = {
        'tasks': [
            {
                "id": 1234,
                "title": "Clean the room",
                "done": true
            },
            {
                "id": 1235,
                "title": "Wash the car",
                "done": false
            },
            {
                "id": 1236,
                "title": "Clean the room",
                "done": true
            }
        ]
    }

    renderTaskList =()=> {
        let t = []
        for (let task of this.state.tasks) {
            t.push(<li key={task.id}>
                    {task.title} ({task.id})
                    <input type="checkbox" checked={task.done}/>
                </li>
            )
        }
        return t;
    }
    

    render() {
        return <React.Fragment>
            <ul>
            {this.renderTaskList()}
            </ul>
        </React.Fragment>

    }

}
