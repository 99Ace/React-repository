import React from 'react'

export default class Todo extends React.Component {
    state = {
        tasks : [
            "Walk dog",
            "Clean floor",
            "Pay bills"
        ]
    }

    renderTask() {
        let t = []
        for (let task of this.state.tasks) {
        t.push(<li>{task}</li>)
        }
        return t
    }

    renderTaskIV() {
        return this.state.tasks.map(function(task){
            return <li style={{color:'blue'}}>{task}</li>
        })
    }

    render() {
        let taskArray = []
        for (let task of this.state.tasks) {
            taskArray.push(<li style={{color:'green'}}>{task}</li>)
        }

        return (

            <React.Fragment>
                {/* Method I : Direct method */}
                <ul>{taskArray}</ul>
                <br/>
                
                {/* Method II : Use function call */}
                <ul>{this.renderTask()}</ul>
                <br/>

                {/* Method III : Use map */}
                <ul>
                    {
                        this.state.tasks.map(task=> <li style={{color:'red'}}>{task}</li>
                        )
                    }
                </ul>
                <br/>

                {/* Method IV : Use map inside function call */}
                <ul>{this.renderTaskIV()}</ul>

            </React.Fragment>
        )
    }

}