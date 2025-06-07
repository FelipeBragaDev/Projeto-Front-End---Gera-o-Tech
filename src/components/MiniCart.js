import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

// Mock data para os itens do mini-carrinho (substituir por estado global depois)
const mockMiniCartItems = [
  {
    id: 'prod1',
    name: 'Tênis Nike Revolution 6 Next Nature Masculino',
    price: 219.00,
    originalPrice: 299.00,
    imageUrl: '/images/products/nike-revolution-thumb1.png', 
    quantity: 1,
  },
  {
    id: 'prod9',
    name: 'Camiseta Básica Algodão',
    price: 50.00,
    originalPrice: 80.00, 
    imageUrl: '/images/products/camiseta-basica.png',
    quantity: 2,
  },
];

const miniCartStyles = {
  position: 'absolute',
  top: 'calc(100% + 10px)', 
  right: 0,
  width: '360px',
  backgroundColor: 'var(--white)',
  borderRadius: '8px',
  boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.15)',
  zIndex: 100, 
  padding: '20px',
  border: '1px solid var(--light-gray-3)',
};

const titleStyles = {
  fontSize: '18px',
  fontWeight: '600',
  color: 'var(--dark-gray)',
  marginBottom: '15px',
  paddingBottom: '10px',
  borderBottom: '1px solid var(--light-gray-3)',
};

const itemListStyles = {
  maxHeight: '250px',
  overflowY: 'auto',
  marginBottom: '15px',
  paddingRight: '5px',
};

const itemStyles = {
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  marginBottom: '15px',
  paddingBottom: '10px',
  borderBottom: '1px solid var(--light-gray-3)',
};
// Último item sem borda inferior
const lastItemStyles = { ...itemStyles, borderBottom: 'none', marginBottom: '0', paddingBottom: '0' };


const itemImageStyles = {
  width: '60px',
  height: '60px',
  objectFit: 'contain',
  borderRadius: '4px',
  border: '1px solid var(--light-gray-3)',
};

const itemDetailsStyles = {
  flexGrow: 1,
};

const itemNameStyles = {
  fontSize: '14px',
  fontWeight: '500',
  color: 'var(--dark-gray-2)',
  marginBottom: '4px',
  lineHeight: '1.2',
};

const itemPriceStyles = {
  fontSize: '14px',
  fontWeight: '600',
  color: 'var(--primary)', 
};
const itemOriginalPriceStyles = {
    fontSize: '12px',
    color: 'var(--light-gray)',
    textDecoration: 'line-through',
    marginLeft: '5px',
};


const totalSectionStyles = {
  paddingTop: '15px',
  borderTop: '1px solid var(--light-gray-3)',
  marginBottom: '20px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontSize: '16px',
  fontWeight: 'bold',
  color: 'var(--dark-gray)',
};

const buttonsContainerStyles = {
  display: 'flex',
  justifyContent: 'space-between', 
  gap: '10px',
};

const secondaryButtonStyles = { 
  flex: 1, 
  padding: '10px',
  backgroundColor: 'var(--light-gray-3)',
  color: 'var(--dark-gray-2)',
  border: '1px solid var(--light-gray-2)',
  borderRadius: '4px',
  fontSize: '14px',
  fontWeight: '500',
  cursor: 'pointer',
  textAlign: 'center',
};

const primaryButtonStyles = { 
  flex: 1,
  padding: '10px',
  backgroundColor: 'var(--primary)',
  color: 'var(--white)',
  border: 'none',
  borderRadius: '4px',
  fontSize: '14px',
  fontWeight: 'bold',
  cursor: 'pointer',
  textAlign: 'center',
  textDecoration: 'none', 
};

const formatCurrency = (value) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);

function MiniCart({ onClose }) { 
  const navigate = useNavigate();
  const cartItems = mockMiniCartItems; 

  // Calcular valor total
  const totalValue = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleViewCart = () => {
    navigate('/cart');
    if (onClose) onClose(); 
  };

  const handleEmptyCart = () => {
    console.log("Esvaziando carrinho (simulado)...");

    if (onClose) onClose(); 
  };
  

  return (
    <div style={miniCartStyles} onClick={(e) => e.stopPropagation()} /* Evita que o clique feche o carrinho imediatamente se o toggle estiver no mesmo elemento pai */ >
      <h3 style={titleStyles}>Meu Carrinho</h3>
      {cartItems.length > 0 ? (
        <>
          <div style={itemListStyles}>
            {cartItems.map((item, index) => (
              <div key={item.id} style={index === cartItems.length - 1 ? lastItemStyles : itemStyles}>
                <img src={item.imageUrl} alt={item.name} style={itemImageStyles} />
                <div style={itemDetailsStyles}>
                  <p style={itemNameStyles}>{item.name}</p>
                  <p style={itemPriceStyles}>
                    {formatCurrency(item.price)}
                    {item.originalPrice && item.originalPrice > item.price && (
                        <span style={itemOriginalPriceStyles}>{formatCurrency(item.originalPrice)}</span>
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div style={totalSectionStyles}>
            <span>Valor total:</span>
            <span>{formatCurrency(totalValue)}</span>
          </div>
          <div style={buttonsContainerStyles}>
            <button style={secondaryButtonStyles} onClick={handleEmptyCart}>Esvaziar</button>
            {/* Usando Link para "Ver Carrinho" para melhor prática de navegação */}
            <Link to="/cart" style={primaryButtonStyles} onClick={onClose}>Ver Carrinho</Link>
          </div>
        </>
      ) : (
        <p style={{textAlign: 'center', color: 'var(--dark-gray-2)', padding: '20px 0'}}>Seu carrinho está vazio.</p>
      )}
    </div>
  );
}

export default MiniCart;