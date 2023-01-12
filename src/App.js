import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Landing from './components/Landing';
import EntrancePage from './components/entrancePage';

function App() {

  return (
    <div className="App">
      
      <BrowserRouter> 
        <Routes>
            <Route path="/" element={<EntrancePage/>}/>
            <Route path="/galery" element={<Landing/>}/>
        </Routes>
  
      </BrowserRouter>
      

    </div>
  );
}

export default App;
