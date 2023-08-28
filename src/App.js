// import logo from './logo.svg';
import './App.css';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <h1>Derek Fidoro</h1>
      <h2>Educational Background</h2>
      <p>Bachelor of Science in Electrical Electronics Engineering</p>
      <p>Anambra State University</p>
      
      <h2>Professional Background</h2>
      <p>Control Room Operator at Geometric Power</p>
      <p>Intern, Software Developer at FivSys</p>
      
      <h2>Skills</h2>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>HTML/CSS</li>
        <li>Node.js</li>
      </ul>

      <Button label="Log in"/>
      <Button label="Sign in"/>

    </div>
  
  );
}

export default App;
