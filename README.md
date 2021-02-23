# React-repository
find React Developer Tools to the browser --> F12

### To install app
npx create-react-app <name>

<!-- after that, go to the folder -->
cd <name>
npm start

<!-- if lost then go to root and type -->
yarn install

### Add images
#### Method I
<img src={require('./<filename>').default}/>

#### Method II
import <name> from './<filename>'

<img src={<name>}/>


### Add CSS file
#### External CSS
import './App.css'

#### Inline-CSS
<p style={{
    fontFamily: 'Verdana',
    fontSize:'24px'
}}>

### Add Components
Three criteria for a component
    function
    upper case in naming <Alert>
    return JSX

any component pass over will be in object call 'props'

function Alert (props) {
    return <div> 
        {props.warning}
    </div>
}

### Pass image as props
#### Method I:
image={require('./logo.svg').default}/>

#### Method II:
image={sushiDish} <-- name imported in 



### Add Bootstrap
yarn add bootstrap

add to App.js
import 'bootstrap/dist/css/bootstrap.min.css'