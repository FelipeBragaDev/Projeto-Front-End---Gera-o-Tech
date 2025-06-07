import React from 'react';

// Estilos para o ProductCard
const cardStyles = {
  width: '280px', // Largura do card
  border: 'none', // sem borda
  borderRadius: '8px',
  padding: '16px',
  backgroundColor: 'var(--white)',
  fontFamily: "'Inter', sans-serif",
  textAlign: 'left',
  position: 'relative', // Para a tag de desconto
  cursor: 'pointer',
  transition: 'box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.08)',
};

const cardHoverStyles = { // Estilos para aplicar no hover
  boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.12)',
  transform: 'translateY(-5px)',
};

const imageContainerStyles = {
  width: '100%',
  height: '200px', // Altura fixa para a imagem
  borderRadius: '4px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  marginBottom: '12px',
};

const productImageStyles = {
  maxWidth: '90%', // Para ter um pequeno preenchimento
  maxHeight: '90%',
  objectFit: 'contain',
};

const discountTagStyles = {
  position: 'absolute',
  top: '24px',
  left: '24px',
  backgroundColor: '#E7FF86', // Cor de erro para destaque (vermelho/rosa)
  color: '#3F6212',
  padding: '5px 10px',
  borderRadius: '20px', // Formato de pílula
  fontSize: '12px',
  fontWeight: '600',
  zIndex: 1,
};

const productInfoStyles = {
  flexGrow: 1, // Garante que esta área cresça para preencher o espaço
};

const productNameStyles = {
  fontSize: '16px', // Tamanho da fonte do nome do produto
  fontWeight: '500', // Peso da fonte
  color: 'var(--dark-gray-2)',
  margin: '0 0 4px 0',
  lineHeight: '1.4',
  // Para limitar a duas linhas e adicionar "..."
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  minHeight: 'calc(1.4em * 2)', // Garante altura para duas linhas
};

const productCategoryStyles = {
  fontSize: '11px',
  color: 'var(--light-gray)',
  margin: '0 0 8px 0',
  textTransform: 'uppercase',
};

const priceContainerStyles = {
  display: 'flex',
  alignItems: 'baseline',
  gap: '8px', // Espaço entre os preços
  marginTop: 'auto', // Empurra os preços para baixo
};

const originalPriceStyles = {
  fontSize: '13px',
  color: 'var(--light-gray)',
  textDecoration: 'line-through',
};

const discountedPriceStyles = {
  fontSize: '18px', // Preço com desconto maior
  fontWeight: 'bold',
  color: 'var(--primary)', // Cor primária para o preço com desconto
};


function ProductCard({
  imageUrl,
  discountPercentage,
  name,
  category,
  originalPrice,
  discountedPrice,
  onClick,
}) {


  const [isHovered, setIsHovered] = React.useState(false);

  const formatPrice = (price) => {

    if (typeof price !== 'number' || isNaN(price)) {
      console.error(`formatPrice - Preço inválido detectado antes da formatação: ${price}`);
    }
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price);
  };

  return (
    <div
      style={isHovered ? {...cardStyles, ...cardHoverStyles} : cardStyles}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {discountPercentage && typeof discountPercentage === 'number' && !isNaN(discountPercentage) && (
        <span style={discountTagStyles}>{discountPercentage}% OFF</span>
      )}
      <div style={imageContainerStyles}>
        {imageUrl && typeof imageUrl === 'string' ? (
          <img src={imageUrl} alt={name || 'Imagem do produto'} style={productImageStyles} />
        ) : (
          <div style={{padding: '10px', textAlign: 'center', color: 'var(--light-gray)', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Sem imagem</div>
        )}
      </div>
      <div style={productInfoStyles}>
        <h3 style={productNameStyles}>{name || 'Produto sem nome'}</h3>
        <p style={productCategoryStyles}>{category || 'Sem categoria'}</p>
      </div>
      <div style={priceContainerStyles}>
        {typeof originalPrice === 'number' && !isNaN(originalPrice) && (!discountedPrice || originalPrice > discountedPrice) && (
            <span style={originalPriceStyles}>{formatPrice(originalPrice)}</span>
        )}
        {typeof discountedPrice === 'number' && !isNaN(discountedPrice) ? (
            <span style={discountedPriceStyles}>{formatPrice(discountedPrice)}</span>
        ) : (
            <span style={{...discountedPriceStyles, color: 'var(--error)'}}>R$ --,--</span> // Placeholder para preço inválido
        )}
      </div>
    </div>
  );
}

export default ProductCard;