import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import List from './List'
import Todo from './Todo'
import AdvancedTodoList from './AdvanceTodo'

function App() {
  return (
    <React.Fragment>
        <h1>Hell O world</h1>
        {/* <Todo/> */}
        <AdvancedTodoList/>
    </React.Fragment>
  );
}

export default App;
