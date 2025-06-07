import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RelatedProducts from '../components/RelatedProducts';
import CartItem from '../components/CartItem';
import OrderSummary from '../components/OrderSummary';
import { Link } from 'react-router-dom';

// Mock Data inicial
const initialMockCartItems = [
  {
    id: 'prod1',
    name: 'Tênis Nike Revolution 6 Next Nature Masculino',
    color: 'Vermelho / Branco',
    size: '42',
    price: 219.00,
    quantity: 1,
    imageUrl: '/images/products/nike-revolution-thumb1.png',
  },
  {
    id: 'prod9',
    name: 'Camiseta Básica Algodão',
    color: 'Branco',
    size: 'M',
    price: 50.00,
    quantity: 2,
    imageUrl: '/images/products/camiseta-basica.png',
  },
];

// --- Estilos para a CartPage ---
const pageStyles = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  backgroundColor: 'var(--white)',
};

const mainContentContainerStyles = {
  flex: 1,
  maxWidth: '1200px',
  width: '90%',
  margin: '30px auto',
  padding: '0 10px',
  boxSizing: 'border-box',
};

const pageTitleStyles = {
  fontSize: 'clamp(22px, 4vw, 28px)',
  fontWeight: 'bold',
  color: 'var(--dark-gray)',
  marginBottom: '30px',
  textAlign: 'left',
  borderBottom: '1px solid var(--light-gray-3)',
  paddingBottom: '15px',
};

const cartLayoutStyles = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '30px',
  alignItems: 'flex-start',
};

// Coluna da Esquerda: Itens do Carrinho e Utilitários (Cupom, Frete)
const cartItemsColumnStyles = {
  flex: '2 1 600px',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
};

// Coluna da Direita: Resumo do Pedido
const orderSummaryColumnStyles = {
  flex: '1 1 300px',
  backgroundColor: 'var(--light-gray-3)',
  padding: '25px',
  borderRadius: '8px',
};

// Estilo para Resumo do Pedido (dentro de OrderSummary.js depois)
const summaryTitleStyles = { fontSize: '20px', fontWeight: 'bold', color: 'var(--dark-gray)', marginBottom: '20px', borderBottom: '1px solid var(--light-gray-2)', paddingBottom: '10px' };
const summaryRowStyles = { display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontSize: '15px', color: 'var(--dark-gray-2)'};
const summaryTotalRowStyles = { ...summaryRowStyles, fontSize: '18px', fontWeight: 'bold', color: 'var(--dark-gray)', marginTop: '15px', paddingTop: '15px', borderTop: '1px solid var(--light-gray-2)'};
const continueButtonStyles = {
    width: '100%',
    padding: '15px',
    backgroundColor: 'var(--warning)',
    color: 'var(--white)',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    cursor: 'pointer',
    marginTop: '10px',
    textAlign: 'center',
    textDecoration: 'none', 
    display: 'inline-block',
};

const utilitySectionStyles = { 
    marginTop: '20px',
    padding: '20px',
    backgroundColor: 'var(--light-gray-3)',
    borderRadius: '8px',
};
const utilityInputGroupStyles = {
    display: 'flex',
    gap: '10px',
    marginBottom: '15px',
};
const utilityInputStyles = {
    flexGrow: 1,
    padding: '10px',
    border: '1px solid var(--light-gray-2)',
    borderRadius: '4px',
    fontSize: '14px',
};
const utilityButtonStyles = {
    padding: '10px 20px',
    backgroundColor: 'var(--primary)',
    color: 'var(--white)',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '500',
};

// COPIANDO OS ESTILOS DA CARTPAGE PARA GARANTIR (da resposta anterior):
const pageStyles_full = { display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: 'var(--white)'};
const mainContentContainerStyles_full = { flex: 1, maxWidth: '1200px', width: '90%', margin: '30px auto', padding: '0 10px', boxSizing: 'border-box'};
const pageTitleStyles_full = { fontSize: 'clamp(22px, 4vw, 28px)', fontWeight: 'bold', color: 'var(--dark-gray)', marginBottom: '30px', textAlign: 'left', borderBottom: '1px solid var(--light-gray-3)', paddingBottom: '15px'};
const cartLayoutStyles_full = { display: 'flex', flexWrap: 'wrap', gap: '30px', alignItems: 'flex-start'};
const cartItemsColumnStyles_full = { flex: '2 1 600px', display: 'flex', flexDirection: 'column', gap: '0px' };
const orderSummaryColumnStyles_full = { flex: '1 1 300px', position: 'sticky', top: '20px' };
const utilitySectionStyles_full = { marginTop: '30px', padding: '25px', backgroundColor: 'var(--light-gray-3)', borderRadius: '8px'};
const utilityInputGroupStyles_full = { display: 'flex', gap: '10px', marginBottom: '0px' };
const utilityInputStyles_full = { flexGrow: 1, padding: '12px', border: '1px solid var(--light-gray-2)', borderRadius: '4px', fontSize: '14px'};
const utilityButtonStyles_full = { padding: '12px 22px', backgroundColor: 'var(--primary)', color: 'var(--white)', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '14px', fontWeight: '500'};

function CartPage() {

  const [cartItems, setCartItems] = useState(initialMockCartItems);

  const handleUpdateItemQuantity = (itemId, newQuantity) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
    console.log(`CartPage: Atualizar quantidade do item ${itemId} para ${newQuantity}`);
  };

  const handleRemoveItem = (itemId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
    console.log(`CartPage: Remover item ${itemId}`);
  };

  return (
    <div style={pageStyles_full}>
      <Header />
      <div style={mainContentContainerStyles_full}>
        <h1 style={pageTitleStyles_full}>MEU CARRINHO</h1>

        {cartItems.length > 0 ? (
          <main style={cartLayoutStyles_full}>
            <div style={cartItemsColumnStyles_full}>
              {cartItems.map(item => (
                <CartItem 
                  key={item.id} 
                  item={item} 
                  onRemoveItem={handleRemoveItem}
                  onUpdateQuantity={handleUpdateItemQuantity}
                />
              ))}
              
              {/* Seção de Cupom e Frete */}
              <div style={{display: 'flex', flexDirection: window.innerWidth < 768 ? 'column' : 'row', gap: '20px', marginTop: '30px'}}>
                  <div style={{...utilitySectionStyles_full, flex:1}}>
                      <label htmlFor="cupom" style={{display:'block', marginBottom:'10px', fontSize:'15px', fontWeight:'600', color: 'var(--dark-gray)'}}>Cupom de desconto</label>
                      <div style={utilityInputGroupStyles_full}>
                          <input type="text" id="cupom" placeholder="Insira seu código" style={utilityInputStyles_full} />
                          <button style={utilityButtonStyles_full}>Aplicar</button>
                      </div>
                  </div>
                  <div style={{...utilitySectionStyles_full, flex:1}}>
                      <label htmlFor="cep" style={{display:'block', marginBottom:'10px', fontSize:'15px', fontWeight:'600', color: 'var(--dark-gray)'}}>Calcular frete</label>
                      <div style={utilityInputGroupStyles_full}>
                          <input type="text" id="cep" placeholder="Insira seu CEP" style={utilityInputStyles_full} />
                          <button style={utilityButtonStyles_full}>OK</button>
                      </div>
                  </div>
              </div>
            </div>

            <div style={orderSummaryColumnStyles_full}>
                <OrderSummary cartItems={cartItems} />
            </div>
          </main>
        ) : (
          <div style={{textAlign: 'center', padding: '40px 0'}}>
            <p style={{fontSize: '18px', color: 'var(--dark-gray-2)', marginBottom: '20px'}}>Seu carrinho está vazio.</p>
            <Link to="/products" style={{...utilityButtonStyles_full, backgroundColor: 'var(--primary)', padding: '12px 25px'}}>
              Continuar comprando
            </Link>
          </div>
        )}

        <RelatedProducts 
          currentProductId={cartItems.length > 0 ? cartItems[0].id : null}
          currentProductCategory={cartItems.length > 0 ? cartItems[0].category : "Tênis"}
        />
      </div>
      <Footer />
    </div>
  );
}

export default CartPage;