import React from 'react';
import './App.css'
import dreams from './kids-dreams.png'

function App() {
  return (
      <React.Fragment>
      
        <h1>Hello World</h1>
        <p style={{
            fontFamily: 'Verdana',
            fontSize:'24px'
        }}> This is a beautiful world</p>

        <img src={require('./kid-coding.png').default} 
             style = {{ width : '150px'}}/>
        <img src={dreams} alt="kids dream"
             style = {{ width : '150px'}}/>
        .
      </React.Fragment>
  );
}

export default App;

