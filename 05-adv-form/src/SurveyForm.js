import React from 'react'

export default class SurveyForm extends React.Component {
    state = {
        email : "",
        rating : 0,
        country: "",
        knowAbout:[],
        keepInTouch : []
    }

    updateCheckbox = (event) =>{
        //search for immutable way to mutate an array
        // How to add to an array in a immutable way
        // 1. make a clone of original
        // 2. add to the clone
        // 3. set the clone back to the state
        
        // Method I
        let clone = this.state.knowAbout.slice()
        clone.push(event.target.value)
        this.setState ({
            'knowAbout' : clone
        })

        // Method II
        // spread operator  ...arrayName
        
        
        // [...this.state.knowAbout, event.target.value]
        // alert(event.target.value)
        // let clone = [...this.state.knowAbout]
        // clone.filter( item => item !== event.target.value)
        // this.setState ({
        //     'knowAbout' : clone
        // })

    }
    updateRadio = (event) =>{
        
    }
    updateKeepInTouch = event => {
        let selectedOptions = event.target.selectedOptions;
        console.log()
        let optionInText = []
        for (let option of selectedOptions) { 
            optionInText.push(option.value)
        }
        console.log(optionInText)
    }

    render () {
        return (
            <React.Fragment>
                <div>
                    <input id='email'   />
                </div>
                <div>
                    <input type='radio' name='rating' value='1' onChange={this.updateRadio} /> 1 star
                    <input type='radio' name='rating' value='2' onChange={this.updateRadio} /> 2 star
                    <input type='radio' name='rating' value='3' onChange={this.updateRadio} /> 3 star
                    
                </div>   
                <div>
                    <input type='checkbox' value='cycling' onChange={this.updateCheckbox}/> Cycling
                    <input type='checkbox' value='swimming' onChange={this.updateCheckbox}/> Swimming
                    <input type='checkbox' value='dancing' onChange={this.updateCheckbox}/> Dancing
                </div>

                <div>
                    <select name="country">
                        <option value="Singapore">Singapore</option>
                        <option value="Malaysia">Malaysia</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                {/* Multi select */}
                <div>
                    <label >How do we keep in touch? </label>
                    <select name="keepInTouch" multiple>
                        <option value="email">Email</option>
                        <option value="sms">SMS</option>
                        <option value="call">Call</option>
                    </select>
                </div>

            </React.Fragment>
        )
    }
}