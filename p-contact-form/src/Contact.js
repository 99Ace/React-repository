import React from 'react'

export default class Contact extends React.Component {
    state = {
        fname : '',
        lname : '',
        enquiry: ['support','marketing','sales'],
        country : 'Singapore',
        gender : 'Male',
        formReadyToSubmit : false
    };
    eventHandler = event => {
        this.setState ({
            [event.target.name]: event.target.value
        })
    }
    updateCheckboxes = event => {
        if (this.state.enquiry.includes(event.target.value) == false) {
            this.setState ({
                enquiry : [...this.state.enquiry, event.target.value]
            })
        }
        else {
            this.setState ({
                enquiry : [...this.state.enquiry].filter( item => item !== event.target.value)
            }) 
        }
    }

    render () {
        return (
            <React.Fragment>
                <div className="p-3">Contact Us Form</div>
                {/* input fname lname */}
                <div className="p-3">
                    <input type="text" className="form-control" name="fname" placeholder="First name" onChange={this.eventHandler}/>
                    <input type="text" className="form-control" name="lname" placeholder="Last name" onChange={this.eventHandler}/>
                </div>
                
                <div>
                    <input type='radio' name='gender' value='Male' onChange={this.eventHandler} checked={ (this.state.gender) === 'Male'} /> Male
                    <input type='radio' name='gender' value='Female' onChange={this.eventHandler} checked={ (this.state.gender) === 'Female'} /> Female
                </div>

                <div className="p-3">
                    <input name='enquiry' type="checkbox" value="{support}" onChange={this.updateCheckboxes} checked={this.state.enquiry.includes('support')}/>Support
                    <input name='enquiry' type="checkbox" value="sales" onChange={this.updateCheckboxes} checked={this.state.enquiry.includes('sales')}/>Sales
                    <input name='enquiry' type="checkbox" value="marketing" onChange={this.updateCheckboxes} checked={this.state.enquiry.includes('marketing')}/>Marketing
                </div>
                <div>
                    <select name='country' value={this.state.country} onChange={this.eventHandler} >
                        <option>Singapore</option>
                        <option>Malaysia</option>
                        <option>Thailand</option>
                    </select>
                </div>
                <div>
                    <button onClick={this.showInfo} disabled={!this.state.formReadyToSubmit}></button>
                </div>
            </React.Fragment>

        )
    }


}