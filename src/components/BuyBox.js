import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const buyBoxContainerStyles = {
  padding: '25px',
  backgroundColor: 'var(--white)',
  borderRadius: '8px',
  border: '1px solid var(--light-gray-3)',
  marginTop: '10px',
};

const quantitySelectorStyles = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '25px',
};

const quantityLabelStyles = {
  fontSize: '16px',
  fontWeight: '600',
  color: 'var(--dark-gray)',
  marginRight: '15px',
};

const quantityInputControlsStyles = {
  display: 'flex',
  alignItems: 'center',
  border: '1px solid var(--light-gray-2)',
  borderRadius: '4px',
  overflow: 'hidden',
};

const quantityButtonStyles = {
  width: '40px',
  height: '40px',
  border: 'none',
  backgroundColor: 'var(--light-gray-3)',
  color: 'var(--dark-gray-2)',
  fontSize: '20px',
  cursor: 'pointer',
  transition: 'background-color 0.2s ease',
};

// Efeito hover para os botões de quantidade
const quantityButtonHoverStyles = {
    backgroundColor: 'var(--light-gray-2)',
};

const quantityInputStyles = {
  width: '50px',
  height: '38px',
  textAlign: 'center',
  border: 'none',
  fontSize: '16px',
  color: 'var(--dark-gray)',
  appearance: 'textfield',
  MozAppearance: 'textfield',
  WebkitAppearance: 'none',
};

// Estilo para o botão "COMPRAR"
const buyNowButtonStyles = {
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
  transition: 'background-color 0.2s ease, transform 0.1s ease',
  boxShadow: '0px 2px 5px rgba(0,0,0,0.1)',
};

const buyNowButtonHoverStyles = {
  backgroundColor: '#EAA20E',
  transform: 'scale(1.01)',
};


function BuyBox({ product }) {
  const [quantity, setQuantity] = useState(1);
  const [isBuyButtonHovered, setIsBuyButtonHovered] = useState(false);
  const navigate = useNavigate();

  const handleQuantityChange = (amount) => {
    setQuantity(prev => Math.max(1, prev + amount));
  };

  const handleBuyNow = () => {
    console.log(`Comprando: ${quantity} x ${product.name} (ID: ${product.id})`);

    navigate('/cart');
  };

  if (!product) return null;

  return (
    <div style={buyBoxContainerStyles}>
      <div style={quantitySelectorStyles}>
        <span style={quantityLabelStyles}>Quantidade:</span>
        <div style={quantityInputControlsStyles}>
          <button 
            style={quantityButtonStyles} 
            onClick={() => handleQuantityChange(-1)} 
            aria-label="Diminuir quantidade"
            onMouseEnter={e => e.currentTarget.style.backgroundColor = quantityButtonHoverStyles.backgroundColor}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = quantityButtonStyles.backgroundColor}
          >
            -
          </button>
          <input
            type="number"
            style={quantityInputStyles}
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
            aria-label="Quantidade do produto"
          />
          <button 
            style={quantityButtonStyles} 
            onClick={() => handleQuantityChange(1)} 
            aria-label="Aumentar quantidade"
            onMouseEnter={e => e.currentTarget.style.backgroundColor = quantityButtonHoverStyles.backgroundColor}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = quantityButtonStyles.backgroundColor}
          >
            +
          </button>
        </div>
      </div>
      <button
        style={isBuyButtonHovered ? {...buyNowButtonStyles, ...buyNowButtonHoverStyles} : buyNowButtonStyles}
        onMouseEnter={() => setIsBuyButtonHovered(true)}
        onMouseLeave={() => setIsBuyButtonHovered(false)}
        onClick={handleBuyNow}
      >
        Comprar
      </button>
    </div>
  );
}

export default BuyBox;