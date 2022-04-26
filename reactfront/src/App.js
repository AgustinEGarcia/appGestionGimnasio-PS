import logo from './logo.svg';
import './App.css';

//importamos los componentes
import CompShowStudents from './appGimnasioUI/showStudents';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CompShowStudents></CompShowStudents>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
