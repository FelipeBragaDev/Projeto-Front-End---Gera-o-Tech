import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const detailsContainerStyles = {
  marginBottom: '20px', 
};

const productNameStyles = {
  fontSize: 'clamp(26px, 4vw, 30px)',
  fontWeight: '700',
  color: 'var(--dark-gray)',
  marginBottom: '8px', 
  lineHeight: '1.3',
};

const subInfoStyles = { 
  fontSize: '13px',
  color: 'var(--light-gray)', 
  marginBottom: '12px',
};

const brandTextStyles = { 
  color: 'var(--dark-gray-3)',
};

const ratingContainerStyles = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '15px',
  fontSize: '14px',
  color: 'var(--dark-gray-2)',
};

const starIconStyles = {
  color: 'var(--warning)', 
  marginRight: '2px', 
  fontSize: '16px', 
};

const reviewCountStyles = {
  marginLeft: '8px',
  color: 'var(--light-gray)',
};

const priceStyles = {
  marginBottom: '20px',
  display: 'flex',
  alignItems: 'flex-end',
  gap: '12px',
};

const currentPriceStyles = {
  fontSize: 'clamp(28px, 5vw, 36px)',
  fontWeight: 'bold',
  color: 'var(--dark-gray)',
  lineHeight: '1',
};

const originalPriceStyles = {
  fontSize: '16px', 
  color: 'var(--light-gray)',
  textDecoration: 'line-through',
  marginBottom: '5px',
};

const productDescriptionStyles = {
  fontSize: '15px', 
  color: 'var(--dark-gray-2)',
  lineHeight: '1.7',
  marginBottom: '20px',
};

// Função para renderizar estrelas
const renderStars = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={`full-${i}`} style={starIconStyles} />);
  }
  if (halfStar) {
    stars.push(<FaStarHalfAlt key="half" style={starIconStyles} />);
  }
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<FaRegStar key={`empty-${i}`} style={starIconStyles} />);
  }
  return stars;
};

const formatPrice = (price) => {
  if (typeof price !== 'number' || isNaN(price)) return ''; 
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price);
};

function ProductDetails({ product }) {
  if (!product) {
    return <p>Carregando detalhes do produto...</p>;
  }

  
  const description = product.description || "Este produto combina estilo e conforto, ideal para diversas ocasiões. Fabricado com materiais de alta qualidade, garante durabilidade e um ajuste perfeito.";

  return (
    <div style={detailsContainerStyles}>
      <h1 style={productNameStyles}>{product.name || 'Nome do Produto Indisponível'}</h1>

      <p style={subInfoStyles}>
        {product.category || 'Categoria'} | <span style={brandTextStyles}>{product.brand || 'Marca'}</span> - REF: {product.refCode || 'N/A'}
      </p>

      {typeof product.rating === 'number' && (
        <div style={ratingContainerStyles}>
          {renderStars(product.rating)}
          <span style={{ marginLeft: '5px', fontWeight: '600' }}>{product.rating.toFixed(1)}</span>
          <span style={reviewCountStyles}>({product.reviewCount || 0} avaliações)</span>
        </div>
      )}

      <div style={priceStyles}>
        <span style={currentPriceStyles}>{formatPrice(product.discountedPrice)}</span>
        {product.originalPrice && product.originalPrice > product.discountedPrice && (
          <span style={originalPriceStyles}>{formatPrice(product.originalPrice)}</span>
        )}
      </div>
      
      <p style={productDescriptionStyles}>{description}</p>
    </div>
  );
}

export default ProductDetails;