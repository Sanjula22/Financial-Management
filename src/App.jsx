import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Items from './pages/Items';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Payment from './pages/Payment';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Items />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/payment' element={<Payment />} />
      </Routes>
    </BrowserRouter>
  );
}





