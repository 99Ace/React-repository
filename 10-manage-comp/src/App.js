import React from 'react'
import Form from './Form';
import Confirmation from './Confirmation';

export default class App extends React.Component {

    state = {
        username : "",
        email : "",
        submitted: false
    }

    render () {
        return (
            <React.Fragment>
                { !this.state.submitted ? (
                    <Form
                        username={this.state.username}
                        email={this.state.email}
                        eventHandler = {this.eventHandler}
                        confirmUpdate = {this.confirmUpdate}
                    />
                ): (
                    <Confirmation 
                        username={this.state.username}
                        email={this.state.email}
                    />
                )}

                
            </React.Fragment>
        )
    }
  
    eventHandler =e=> {
        this.setState ({
            [e.target.name] : e.target.value
        });
    }
    confirmUpdate =e=> {
        // Step 1 : test the data is passed correctly
        // alert(this.state.username + " -> " + this.state.email)

        // Step 2: Replace with following code to set submission to be true
        this.setState ({
            submitted : true
        })
    }
}