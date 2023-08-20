import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Item from './pages/Item';
import Category from './pages/Category';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/item" element={<Item />} />
          <Route path="/category" element={<Category />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
