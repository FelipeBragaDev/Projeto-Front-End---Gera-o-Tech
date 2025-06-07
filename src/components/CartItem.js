import React, { useState } from 'react';
// Se quiser usar ícones para os botões de quantidade ou remover:
// import { FaPlus, FaMinus, FaTrashAlt } from 'react-icons/fa';

const cartItemStyles = {
  display: 'flex',
  gap: '20px', // Espaço entre imagem e o resto
  padding: '20px 0',
  borderBottom: '1px solid var(--light-gray-3)',
  alignItems: 'flex-start', // Alinha itens no topo
};

const imageStyles = {
  width: '100px',
  height: '100px',
  objectFit: 'contain',
  borderRadius: '4px',
  border: '1px solid var(--light-gray-3)',
  backgroundColor: 'var(--white)',
  alignSelf: 'center', // Centraliza a imagem verticalmente se os detalhes forem altos
};

const itemInfoContainerStyles = { // Container para detalhes do produto e o link de remover
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
  color: 'var(--error)', // Cor de erro para remover
  cursor: 'pointer',
  textDecoration: 'none', // Remover sublinhado padrão
  background: 'none',
  border: 'none',
  padding: '0',
  textAlign: 'left',
  alignSelf: 'flex-start', // Alinha à esquerda
  marginTop: 'auto', // Empurra para baixo se houver espaço
};
const removeLinkHoverStyles = {
    textDecoration: 'underline',
};


// Container para as colunas de Quantidade, Unitário, Total
const itemInteractiveColumnsStyles = {
    display: 'flex',
    alignItems: 'center', // Alinha verticalmente os controles de quantidade e os textos de preço
    gap: '15px', // Espaço entre as colunas Quantidade, Unitário, Total
    marginLeft: 'auto', // Empurra estas colunas para a direita
};

const columnSectionStyles = {
  minWidth: '90px', // Largura mínima para cada coluna de preço/qtd
  textAlign: 'right', // Alinhamento padrão para estas colunas
};

const labelStyles = {
  fontSize: '11px', // Menor
  color: 'var(--light-gray)',
  display: 'block',
  marginBottom: '5px',
  textTransform: 'uppercase',
  fontWeight: '500',
};

const valueStyles = {
  fontSize: '15px', // Um pouco menor
  fontWeight: '600',
  color: 'var(--dark-gray)',
};

// Estilos para o Seletor de Quantidade (baseado no BuyBox e na imagem do carrinho)
const quantitySelectorContainerStyles = { // Container específico para o label e o seletor
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Centraliza o seletor abaixo do label
    minWidth: '110px', // Largura para acomodar o seletor
};

const quantityInputControlsStyles = {
  display: 'flex',
  alignItems: 'center',
  border: '1px solid var(--light-gray-2)',
  borderRadius: '4px',
  overflow: 'hidden',
  marginTop: '2px', // Pequeno espaço do label
};

const quantityButtonStyles = {
  width: '30px', // Ajustar tamanho
  height: '30px',
  border: 'none',
  backgroundColor: 'var(--light-gray-3)', // Fundo dos botões +/-
  color: 'var(--dark-gray-2)',
  fontSize: '16px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const quantityInputStyles = {
  width: '40px', // Ajustar largura
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