import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const buyBoxContainerStyles = {
  padding: '25px', // Aumentar padding
  backgroundColor: 'var(--white)', // Mudar para branco para destacar mais os elementos internos
  borderRadius: '8px',
  border: '1px solid var(--light-gray-3)', // Borda sutil
  // boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.05)', // Mantida ou ajustada
  marginTop: '10px', // Espaço acima do buybox
};

const quantitySelectorStyles = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '25px', // Mais espaço abaixo do seletor de quantidade
};

const quantityLabelStyles = {
  fontSize: '16px',
  fontWeight: '600',
  color: 'var(--dark-gray)', // Label mais escura
  marginRight: '15px',
};

const quantityInputControlsStyles = {
  display: 'flex',
  alignItems: 'center',
  border: '1px solid var(--light-gray-2)',
  borderRadius: '4px',
  overflow: 'hidden', // Para garantir que os cantos arredondados funcionem bem com os botões internos
};

const quantityButtonStyles = {
  width: '40px', // Botões um pouco maiores
  height: '40px',
  border: 'none',
  backgroundColor: 'var(--light-gray-3)', // Fundo mais suave para os botões +/-
  color: 'var(--dark-gray-2)', // Cor mais suave para os sinais
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
  height: '38px', // Para alinhar com os botões (considerando a borda do container)
  textAlign: 'center',
  border: 'none',
  // Removidas bordas laterais do input, pois o container já tem
  // borderLeft: '1px solid var(--light-gray-2)',
  // borderRight: '1px solid var(--light-gray-2)',
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
  backgroundColor: 'var(--warning)', // <<< COR LARANJA
  color: 'var(--white)',             // <<< TEXTO BRANCO
  border: 'none',
  borderRadius: '4px',
  fontSize: '16px',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  cursor: 'pointer',
  transition: 'background-color 0.2s ease, transform 0.1s ease', // Adicionada transição de transform
  boxShadow: '0px 2px 5px rgba(0,0,0,0.1)', // Sombra sutil no botão
};

const buyNowButtonHoverStyles = {
  backgroundColor: '#EAA20E', // Um laranja um pouco mais escuro para o hover (ajuste se necessário)
  transform: 'scale(1.01)', // Leve aumento no hover
};


function BuyBox({ product }) {
  const [quantity, setQuantity] = useState(1);
  const [isBuyButtonHovered, setIsBuyButtonHovered] = useState(false);
  const navigate = useNavigate();
  // Para os botões de quantidade, podemos aplicar o hover via CSS se usarmos classes,
  // ou criar mais estados de hover se precisarmos de lógica JS. Por simplicidade,
  // os estilos de hover para os botões +/- podem ser adicionados se usarmos :hover em CSS.

  const handleQuantityChange = (amount) => {
    setQuantity(prev => Math.max(1, prev + amount));
  };

  const handleBuyNow = () => {
    console.log(`Comprando: ${quantity} x ${product.name} (ID: ${product.id})`);
    // Lógica real de compra ou adicionar ao carrinho e ir para checkout viria aqui
    // Por exemplo: addToCartContext(product, quantity);
    navigate('/cart'); // <<< NAVEGAR PARA O CARRINHO
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
        Comprar {/* <<< TEXTO ALTERADO */}
      </button>
      {/* Você poderia adicionar um botão secundário "Adicionar ao Carrinho" aqui se desejado */}
      {/* Ex: <button style={secondaryButtonStyles}>Adicionar ao Carrinho</button> */}
    </div>
  );
}

export default BuyBox;