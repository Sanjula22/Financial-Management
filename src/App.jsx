import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Items from './pages/Items';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Payment from './pages/Payment';
import Header from './components/Header';
import Footer from './components/Footer';
import Invoice from './pages/Invoice.jsx';
import Buyer from './pages/buyer.jsx';
import PaymentEdit from './pages/paymentEdit.jsx';
import BuyerEdit from './pages/buyerEdit.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Items />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/invoice' element={<Invoice />} />
        <Route path='/buyer' element={<Buyer />} />
        <Route path='/paymentEdit/:id' element={<PaymentEdit />} />
        <Route path='/buyerEdit/:id' element={<BuyerEdit />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}





