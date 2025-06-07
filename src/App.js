import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import ProductListingPage from './pages/ProductListingPage';
import ProductViewPage from './pages/ProductViewPage';
import CategoriesPage from './pages/CategoriesPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage'; 
import OrderSuccessPage from './pages/OrderSuccessPage';
import MyOrdersPage from './pages/MyOrdersPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import DetailedSignupPage from './pages/DetailedSignupPage';

function App() {
  return (
    <Router>
      {/* Se você quisesse um Header e Footer que persistissem em TODAS as páginas
          sem precisar importá-los em cada uma, você os colocaria aqui, fora do <Routes>.
          Exemplo:
          <Header />
          <Routes> ... </Routes>
          <Footer />
          Mas, como já os temos dentro da HomePage, vamos manter essa estrutura por enquanto,
          e as novas páginas também importarão Header e Footer.
      */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/product/:productId" element={<ProductViewPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/order-success" element={<OrderSuccessPage />} />
        <Route path="/meus-pedidos" element={<MyOrdersPage />} />
        <Route path="/login" element={<LoginPage />} />         {/* <<< ADICIONE */}
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signup-details" element={<DetailedSignupPage />} />
        {/* Você pode adicionar uma rota curinga para página não encontrada (404) depois */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;