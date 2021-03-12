
import React from 'react'

export default function Form(props) {
    
 
   
    return (
        <React.Fragment>
            <div>
                <label>User name</label>
                <input
                    type="text"
                    name="username"
                    // value={this..username}
                    onChange={props.eventHandler}
                />
            </div>
            <div>
                <label>Email</label>
                <input
                    type="text"
                    name="email"
                    //  value={this.state.email}
                    onChange={props.eventHandler}
                />
            </div>
            <button onClick={props.confirmUpdate}>Update</button>
        </React.Fragment>
    )
    


}

