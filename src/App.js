import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Create from './Components/Create';
import Read from './Components/Read';
import Update from './Components/Update';

function App() {
  return (
    <div className='main'>
      <h1>CRUD Operation</h1>
       <BrowserRouter>
          <Routes>
              <Route path='/' element={<Create/>}/>
              <Route path='/read' element={<Read/>}/>
              <Route path='/update' element={<Update/>}/>
          </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
