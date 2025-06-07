import React, { useState } from 'react';

const cartItemStyles = {
  display: 'flex',
  gap: '20px',
  padding: '20px 0',
  borderBottom: '1px solid var(--light-gray-3)',
  alignItems: 'flex-start',
};

const imageStyles = {
  width: '100px',
  height: '100px',
  objectFit: 'contain',
  borderRadius: '4px',
  border: '1px solid var(--light-gray-3)',
  backgroundColor: 'var(--white)',
  alignSelf: 'center',
};

const itemInfoContainerStyles = { 
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
};

const nameStyles = {
  fontSize: '16px',
  fontWeight: '600',
  color: 'var(--dark-gray)',
  marginBottom: '4px',
  lineHeight: '1.3',
};

const attributesStyles = {
  fontSize: '13px',
  color: 'var(--dark-gray-2)',
  marginBottom: '8px',
};

const removeLinkStyles = {
  fontSize: '13px',
  color: 'var(--error)',
  cursor: 'pointer',
  textDecoration: 'none',
  background: 'none',
  border: 'none',
  padding: '0',
  textAlign: 'left',
  alignSelf: 'flex-start',
  marginTop: 'auto',
};
const removeLinkHoverStyles = {
    textDecoration: 'underline',
};


// Container para as colunas de Quantidade, Unitário, Total
const itemInteractiveColumnsStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    marginLeft: 'auto',
};

const columnSectionStyles = {
  minWidth: '90px',
  textAlign: 'right',
};

const labelStyles = {
  fontSize: '11px',
  color: 'var(--light-gray)',
  display: 'block',
  marginBottom: '5px',
  textTransform: 'uppercase',
  fontWeight: '500',
};

const valueStyles = {
  fontSize: '15px',
  fontWeight: '600',
  color: 'var(--dark-gray)',
};

// Estilos para o Seletor de Quantidade
const quantitySelectorContainerStyles = { 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minWidth: '110px',
};

const quantityInputControlsStyles = {
  display: 'flex',
  alignItems: 'center',
  border: '1px solid var(--light-gray-2)',
  borderRadius: '4px',
  overflow: 'hidden',
  marginTop: '2px',
};

const quantityButtonStyles = {
  width: '30px',
  height: '30px',
  border: 'none',
  backgroundColor: 'var(--light-gray-3)',
  color: 'var(--dark-gray-2)',
  fontSize: '16px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const quantityInputStyles = {
  width: '40px',
  height: '28px',
  textAlign: 'center',
  border: 'none',
  borderLeft: '1px solid var(--light-gray-2)',
  borderRight: '1px solid var(--light-gray-2)',
  fontSize: '14px',
  color: 'var(--dark-gray)',
  appearance: 'textfield',
  MozAppearance: 'textfield',
};


const formatCurrency = (value) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);

function CartItem({ item, onRemoveItem, onUpdateQuantity }) {
  const [quantity, setQuantity] = useState(item.quantity);
  const [isRemoveHovered, setIsRemoveHovered] = useState(false);

  const handleQuantityChange = (newQuantity) => {
    newQuantity = Math.max(1, newQuantity);
    setQuantity(newQuantity);
    if (onUpdateQuantity) {
      onUpdateQuantity(item.id, newQuantity);
    }
  };

  const currentRemoveLinkStyles = {
    ...removeLinkStyles,
    ...(isRemoveHovered ? removeLinkHoverStyles : {})
  };

  return (
    <div style={cartItemStyles}>
      <img src={item.imageUrl} alt={item.name} style={imageStyles} />
      
      <div style={itemInfoContainerStyles}>
        <h3 style={nameStyles}>{item.name}</h3>
        <p style={attributesStyles}>
          {item.color && `Cor: ${item.color}${item.size ? ' | ' : ''}`}
          {item.size && `Tamanho: ${item.size}`}
        </p>
        <button 
            onClick={() => onRemoveItem(item.id)} 
            style={currentRemoveLinkStyles}
            onMouseEnter={() => setIsRemoveHovered(true)}
            onMouseLeave={() => setIsRemoveHovered(false)}
        >
          Remover item
        </button>
      </div>

      <div style={itemInteractiveColumnsStyles}>
        <div style={quantitySelectorContainerStyles}>
          <span style={labelStyles}>Quantidade</span>
          <div style={quantityInputControlsStyles}>
            <button style={quantityButtonStyles} onClick={() => handleQuantityChange(quantity - 1)}>-</button>
            <input
              type="number"
              style={quantityInputStyles}
              value={quantity}
              onChange={(e) => handleQuantityChange(parseInt(e.target.value, 10) || 1)}
              min="1"
            />
            <button style={quantityButtonStyles} onClick={() => handleQuantityChange(quantity + 1)}>+</button>
          </div>
        </div>

        <div style={columnSectionStyles}>
          <span style={labelStyles}>Unitário</span>
          <p style={valueStyles}>{formatCurrency(item.price)}</p>
        </div>

        <div style={columnSectionStyles}>
          <span style={labelStyles}>Total</span>
          <p style={valueStyles}>{formatCurrency(item.price * quantity)}</p>
        </div>
      </div>
    </div>
  );
}

export default CartItem;