import React from 'react'

export default function Confirmation(props) {
    return (
        <React.Fragment>
            <div>
                <ul>
                    <li>Username : {props.username}</li>
                    <li>Email : {props.email}</li>
                </ul>
            </div>
        </React.Fragment>
    )
}