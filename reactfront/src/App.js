import logo from './logo.svg';
import './App.css';

//importamos los componentes
import CompShowStudents from './appGimnasioUI/showStudents';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <CompShowStudents></CompShowStudents>
    </div>
  );
}

export default App;
