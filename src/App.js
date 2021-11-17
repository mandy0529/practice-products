import {Route, Routes} from 'react-router';
import Navbar from './components/Navbar';
import './index.css';
import Home from './pages/Home';
import Products from './pages/Products';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
          home
        </Route>
        <Route path="/products" element={<Products />}>
          products
        </Route>
      </Routes>
    </>
  );
}

export default App;
