import React from 'react'
import axios from 'axios'

export default class ImportAxio extends React.Component {
    state = {
        tasks:[],
        loaded:false,
        colours: []

    }
    async componentDidMount(){
        console.log ("List is mounted and ready")
        let response = await axios.get('items.json');
        console.log(response.data.tasks)
        this.setState ({
            tasks : response.data.tasks,
            loaded : true
        })

        response = await axios.get("colours.json");
        console.log(response.data)

        this.setState ({
            colours : response.data
        })
    }

    renderList=()=> {
        if (this.state.tasks.length === 0) {
            return <div>There is no data </div>
        }
        else {
            return this.state.tasks.map(item=><li key={item.id}>{item.title}
            <input type="checkbox" checked={item.done}/> </li>)
        }
    }

    render() {
        return (
            <React.Fragment>
                <h2>Hell-1</h2>
                <ul>{this.renderList()} </ul>
            </React.Fragment>
        )
    }
}