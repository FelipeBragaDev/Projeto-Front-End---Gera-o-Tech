import React, { useState, useEffect } from 'react';

const optionsContainerStyles = {
  marginBottom: '25px',
  borderTop: '1px solid var(--light-gray-3)', // Divisor acima das opções
  paddingTop: '25px', // Espaço acima do primeiro grupo de opções
};

const optionGroupStyles = {
  marginBottom: '25px', // Aumentar espaço entre grupos de opção (Tamanho, Cor)
};

const optionLabelStyles = {
  display: 'block',
  fontSize: '16px',
  fontWeight: '600', // Um pouco mais de peso
  color: 'var(--dark-gray)', // Cor mais escura para o label
  marginBottom: '12px', // Mais espaço
};

// Estilos para Seleção de Tamanho
const sizeSelectorStyles = {
  display: 'flex',
  flexWrap: 'wrap', // Para quebrar se muitos tamanhos
  gap: '10px',
};

const sizeOptionStyles = {
  padding: '10px 18px', // Ajustar padding
  border: '1px solid var(--light-gray-2)',
  borderRadius: '4px',
  cursor: 'pointer',
  backgroundColor: 'var(--white)',
  color: 'var(--dark-gray-2)',
  minWidth: '45px', // Largura mínima
  textAlign: 'center',
  fontSize: '14px',
  fontWeight: '500',
  transition: 'border-color 0.2s ease, background-color 0.2s ease, color 0.2s ease',
};

const sizeOptionSelectedStyles = {
  ...sizeOptionStyles,
  borderColor: 'var(--primary)',
  backgroundColor: 'var(--primary-light)', // Usando a variável que definimos
  color: 'var(--primary)',
  fontWeight: 'bold', // Mais destaque para o selecionado
};

// Estilos para Seleção de Cor
const colorSelectorStyles = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '12px', // Espaço entre as bolinhas de cor
};

const colorSwatchOuterStyles = { // Círculo externo para o efeito de borda no selecionado
  width: '36px',  // Tamanho do círculo externo
  height: '36px',
  borderRadius: '50%',
  padding: '3px', // Espaçamento para a "borda"
  cursor: 'pointer',
  border: '2px solid transparent', // Borda transparente por padrão
  transition: 'border-color 0.2s ease',
};

const colorSwatchOuterSelectedStyles = {
  ...colorSwatchOuterStyles,
  borderColor: 'var(--primary)', // Borda rosa no círculo externo do selecionado
};

const colorSwatchInnerStyles = (colorHex, isAvailable) => ({
  width: '100%', // Ocupa todo o espaço do círculo externo
  height: '100%',
  borderRadius: '50%',
  backgroundColor: colorHex,
  border: `1px solid ${isAvailable ? 'rgba(0,0,0,0.1)' : 'var(--light-gray)'}`, // Borda sutil na bolinha interna
  opacity: isAvailable ? 1 : 0.5, // Menos opacidade se indisponível
  pointerEvents: isAvailable ? 'auto' : 'none', // Não clicável se indisponível
  display: 'flex', // Para o X de indisponível
  alignItems: 'center',
  justifyContent: 'center',
});

// Estilo para o "X" em cores indisponíveis
const unavailableMarkStyles = {
  color: 'var(--dark-gray)', // Cor do X
  fontSize: '14px',
  fontWeight: 'bold',
  lineHeight: '1',
};


function ProductOptions({ product, onOptionChange }) { // Adicionada prop onOptionChange
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState(null); // Armazena o objeto da cor

  // Inicializa a cor selecionada com a primeira disponível
  useEffect(() => {
    if (product && product.colors && product.colors.length > 0) {
      const firstAvailableColor = product.colors.find(c => c.available);
      if (firstAvailableColor) {
        setSelectedColor(firstAvailableColor);
      } else if (product.colors.length > 0) {
        setSelectedColor(product.colors[0]); // Seleciona a primeira mesmo se indisponível
      }
    }
  }, [product]);

  // Inicializa o tamanho selecionado com o primeiro disponível
   useEffect(() => {
    if (product && product.sizes && product.sizes.length > 0) {
      setSelectedSize(product.sizes[0]); // Seleciona o primeiro tamanho por padrão
    }
  }, [product]);


  const handleSizeChange = (size) => {
    setSelectedSize(size);
    if (onOptionChange) {
      onOptionChange({ size: size, color: selectedColor });
    }
  };

  const handleColorChange = (colorObj) => {
    if (colorObj.available) {
      setSelectedColor(colorObj);
      if (onOptionChange) {
        onOptionChange({ size: selectedSize, color: colorObj });
      }
    }
  };

  if (!product) return null;

  const availableSizes = product.sizes || [];
  const availableColors = product.colors || [];

  return (
    <div style={optionsContainerStyles}>
      {/* Seleção de Tamanho */}
      {availableSizes.length > 0 && (
        <div style={optionGroupStyles}>
          <span style={optionLabelStyles}>Tamanho:</span>
          <div style={sizeSelectorStyles}>
            {availableSizes.map(size => (
              <button
                key={size}
                style={selectedSize === size ? sizeOptionSelectedStyles : sizeOptionStyles}
                onClick={() => handleSizeChange(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Seleção de Cor */}
      {availableColors.length > 0 && (
        <div style={optionGroupStyles}>
          <span style={optionLabelStyles}>Cor: {selectedColor ? selectedColor.name : ''}</span>
          <div style={colorSelectorStyles}>
            {availableColors.map(colorObj => (
              <div
                key={colorObj.name}
                style={selectedColor?.hex === colorObj.hex ? colorSwatchOuterSelectedStyles : colorSwatchOuterStyles}
                onClick={() => handleColorChange(colorObj)}
                title={colorObj.name + (!colorObj.available ? ' (Indisponível)' : '')}
              >
                <div style={colorSwatchInnerStyles(colorObj.hex, colorObj.available)}>
                  {!colorObj.available && <span style={unavailableMarkStyles}>X</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductOptions;