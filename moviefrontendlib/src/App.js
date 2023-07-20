
import './App.css';
import AddMovie from './components/AddMovie';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
       <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/AddMovie' element={<AddMovie data={{movieName:"",releasedYear:"",actor:"",camera:"",actress:"",producer:"",director:"", language:""}} method="post"/>}/>
      </Routes> 
    </div>
  );
}

export default App;
