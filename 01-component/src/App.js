import logo from './logo.svg';
import './App.css';

function Alert (props) {
    return <div 
    style ={{
        backgroundColor : props.bgcolor
    }}>
        {props.warning}
        <img src={props.image}/>

    </div>
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrser"
        >
          <Alert 
          warning="Learn Alert" 
          bgcolor = "yellow"
          image={require('./logo.svg').default}/>
        </a>
      </header>
    </div>
  );
}

export default App;
