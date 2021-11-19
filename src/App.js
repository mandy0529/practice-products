import {Route, Routes} from 'react-router';
import Navbar from './components/Navbar';
import SideBar from './components/SIdeBar';
import './index.css';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Products from './pages/Products';
import SingleProduct from './pages/SingleProduct';

function App() {
  return (
    <>
      <Navbar />
      <SideBar />
      <Routes>
        <Route path="/" element={<Home />}>
          home
        </Route>
        <Route path="/products" element={<Products />}>
          products
        </Route>
        <Route path="/cart" element={<Cart />}>
          Cart
        </Route>
        <Route path="/products/:id" element={<SingleProduct />} />
      </Routes>
    </>
  );
}

export default App;
