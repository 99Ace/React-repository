import React from 'react'

export default class App extends React.Component {
    state ={
        expenses : [
            {   
                id      : "123456",
                title   :   "NTUC",
                cost    :   50.99,
                category:   "Grocery",
                claimed : false
            },
            { 
                id      : "123457",
                title   :   "Sushi Tei",
                cost    :   60.99,
                category:   "Dining",
                claimed : false
            },
            { 
                id      : "123458",
                title   :   "ShengSiong",
                cost    :   9.99,
                category:   "Grocery",
                claimed : true
            }
        ],
        title : "",
        cost : 0,
        category : "Grocery"
    }
    // Display list generator
    renderList() {
    return (this.state.expenses.map(item=><tr>
        <td>{item.title}</td>
        <td>{item.cost}</td>
        <td>{item.category}</td>
        <td><input 
            type="checkbox"
            name="claimed"
            checked={item.claimed}
            onChange ={ ()=>this.updateCheckbox(item) } />
        </td>
        <td>
            <button>Edit</button> 
            <button onClick={()=>{this.deleteList(item)}}>Delete</button>
        </td>
    </tr> ))
    }
    // Eventhandler
    eventHandler=e=>{
        this.setState ({
            [e.target.name]:e.target.value
        })
    }
    // New list entry form
    newList () {
        return <div style={{padding:"10px"}}>
            <div>
            <input 
                type="text"
                name="title"
                placeholder="Enter new expenses"
                onChange={this.eventHandler}/>
            </div>
            <div>
            <input 
                type="text"
                name="cost"
                placeholder="$9.99"
                onChange={this.eventHandler}/>
            </div>
            <div>
            <select 
                name="category"
                value={this.state.category}
                onChange={this.eventHandler}>                
                <option>Grocery</option>
                <option>Dining</option>
                <option>Insurance</option>
            </select>
            </div>
            <button onClick={this.addList}>
                Add expenses</button>

        </div>
    }
    addList =e=> {
        let newExpense = {
            id  : Math.floor(Math.random() * 999999 + 100000),
            title : this.state.title,
            cost : parseFloat(this.state.cost),
            category : this.state.category,
            claimed : false
        }
        this.setState ({
            expenses : [...this.state.expenses, newExpense]
        })
    }
    updateCheckbox =item=> {
        let index = this.state.expenses.findIndex(t => t.id === item.id)

        this.setState({
            expenses : [...this.state.expenses.slice(0,index),
                        {...item, claimed:!item.claimed},
                        ...this.state.expenses.slice(index+1)]
        })
    }
    deleteList =item=>{
        let index = this.state.expenses.findIndex(t => t.id === item.id)

        this.setState({
            expenses : [...this.state.expenses.slice(0,index),
                        ...this.state.expenses.slice(index+1)]
        })
    }
    render() {
        return (
            <React.Fragment>
                <h1>Hell-o world</h1>
                <table>
                {this.renderList()}
                </table>

                {this.newList()}
            </React.Fragment>
        )
    }
}

