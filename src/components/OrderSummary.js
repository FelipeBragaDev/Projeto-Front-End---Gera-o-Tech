import React from 'react';
import { Link } from 'react-router-dom';

const summaryContainerStyles = {
  backgroundColor: 'var(--light-gray-3)', // Fundo cinza claro como na imagem
  padding: '25px',
  borderRadius: '8px',
  width: '100%', // Ocupa a largura da coluna definida em CartPage
};

const titleStyles = {
  fontSize: '18px', // Menor que o título da página
  fontWeight: 'bold',
  color: 'var(--dark-gray)',
  marginBottom: '20px',
  paddingBottom: '15px',
  borderBottom: '1px solid var(--light-gray-2)', // Divisor mais sutil
  textTransform: 'uppercase', // "RESUMO" em maiúsculas
};

const rowStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '12px',
  fontSize: '14px', // Texto um pouco menor
  color: 'var(--dark-gray-2)',
};

const discountValueStyles = { // Para o valor do desconto
    color: 'var(--error)', // Cor vermelha para o desconto, como na imagem
};

const totalRowStyles = {
  ...rowStyles,
  fontSize: '18px', // Total um pouco maior
  fontWeight: 'bold',
  color: 'var(--dark-gray)',
  marginTop: '15px',
  paddingTop: '15px',
  borderTop: '1px solid var(--light-gray-2)',
};

const installmentTextStyles = {
  fontSize: '12px', // Menor
  color: 'var(--dark-gray-2)',
  textAlign: 'right',
  marginBottom: '20px',
};

const continueButtonStyles = {
  width: '100%',
  padding: '14px', // Ajustar padding
  backgroundColor: 'var(--warning)', // Laranja
  color: 'var(--white)',
  border: 'none',
  borderRadius: '4px',
  fontSize: '15px', // Ajustar tamanho
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
    <aside style={summaryContainerStyles}> {/* Supondo que summaryContainerStyles está definido */}
      <h2 style={titleStyles}>RESUMO</h2> {/* Supondo que titleStyles está definido */}
      <div style={rowStyles}> {/* Supondo que rowStyles está definido */}
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
          <span style={discountValueStyles}>- {formatCurrency(desconto)}</span> {/* Supondo que discountValueStyles está definido */}
        </div>
      )}
      <div style={totalRowStyles}> {/* Supondo que totalRowStyles está definido */}
        <span>Total:</span>
        <span>{formatCurrency(finalTotal)}</span>
      </div>
      {finalTotal > 0 && (
        <p style={installmentTextStyles}> {/* Supondo que installmentTextStyles está definido */}
          ou 10x de {formatCurrency(finalTotal / 10)} sem juros
        </p>
      )}

      {/* Renderiza o botão condicionalmente */}
      {showActionButton && (
        <Link to="/checkout" style={continueButtonStyles}>
          Continuar
        </Link>
      )}
    </aside>
  );
}

export default OrderSummary;