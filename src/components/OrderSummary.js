import React from 'react';
import { Link } from 'react-router-dom';

const summaryContainerStyles = {
  backgroundColor: 'var(--light-gray-3)',
  padding: '25px',
  borderRadius: '8px',
  width: '100%', 
};

const titleStyles = {
  fontSize: '18px',
  fontWeight: 'bold',
  color: 'var(--dark-gray)',
  marginBottom: '20px',
  paddingBottom: '15px',
  borderBottom: '1px solid var(--light-gray-2)',
  textTransform: 'uppercase', 
};

const rowStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '12px',
  fontSize: '14px', 
  color: 'var(--dark-gray-2)',
};

const discountValueStyles = { 
    color: 'var(--error)', 
};

const totalRowStyles = {
  ...rowStyles,
  fontSize: '18px', 
  fontWeight: 'bold',
  color: 'var(--dark-gray)',
  marginTop: '15px',
  paddingTop: '15px',
  borderTop: '1px solid var(--light-gray-2)',
};

const installmentTextStyles = {
  fontSize: '12px', 
  color: 'var(--dark-gray-2)',
  textAlign: 'right',
  marginBottom: '20px',
};

const continueButtonStyles = {
  width: '100%',
  padding: '14px', 
  backgroundColor: 'var(--warning)', 
  color: 'var(--white)',
  border: 'none',
  borderRadius: '4px',
  fontSize: '15px', 
  fontWeight: 'bold',
  textTransform: 'uppercase',
  cursor: 'pointer',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'block',
  transition: 'background-color 0.2s ease',
};

const formatCurrency = (value) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);

// Adicionada a prop showActionButton, com valor padrão true
function OrderSummary({ cartItems, showActionButton = true }) {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const frete = 0.00;
  const desconto = 30.00;
  const totalBeforeDiscount = subtotal + frete;
  const finalTotal = Math.max(0, totalBeforeDiscount - desconto);

  return (
    <aside style={summaryContainerStyles}> 
      <h2 style={titleStyles}>RESUMO</h2> 
      <div style={rowStyles}> 
        <span>Subtotal:</span>
        <span>{formatCurrency(subtotal)}</span>
      </div>
      <div style={rowStyles}>
        <span>Frete:</span>
        <span>{formatCurrency(frete)}</span>
      </div>
      {desconto > 0 && (
        <div style={rowStyles}>
          <span>Desconto:</span>
          <span style={discountValueStyles}>- {formatCurrency(desconto)}</span>
        </div>
      )}
      <div style={totalRowStyles}>
        <span>Total:</span>
        <span>{formatCurrency(finalTotal)}</span>
      </div>
      {finalTotal > 0 && (
        <p style={installmentTextStyles}>
          ou 10x de {formatCurrency(finalTotal / 10)} sem juros
        </p>
      )}

      {showActionButton && (
        <Link to="/checkout" style={continueButtonStyles}>
          Continuar
        </Link>
      )}
    </aside>
  );
}

export default OrderSummary;