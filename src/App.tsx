import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Products from './components/Products';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='product' element={ <Products />} />
      </Routes>
    </div>
  );
}

export default App;
