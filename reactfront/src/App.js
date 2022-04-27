import './App.css';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import Menu from './components/Menu';



//importamos los componentes
import CompShowStudents from './appGimnasioUI/showStudents';
import CompCreateStudent from './appGimnasioUI/createStudent';
import CompEditStudent from './appGimnasioUI/editStudent';

//importamos el router
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  
  

  return (
    <div className="App">

      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path='/' element={<CompShowStudents/>}/>
          <Route path='/create' element={<CompCreateStudent/>}/>
          <Route path='/edit/:id' element={<CompEditStudent/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
