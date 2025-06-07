import React from 'react';
import ProductCard from './ProductCard'; // Reutilizando o ProductCard
import { useNavigate } from 'react-router-dom';
import { mockProducts } from '../data/mockData';

const productListingStyles = {
  flex: 1, // Ocupa o espaço restante ao lado dos filtros
};

const productsGridStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '30px',
};

function ProductListing({ products = mockProducts }) { // Default para mockProducts se nenhuma prop for passada
  const navigate = useNavigate();

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  if (!products || products.length === 0) {
    return <p>Nenhum produto encontrado.</p>;
  }

  return (
    <section style={productListingStyles}>
      <div style={productsGridStyles}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            category={product.category}
            originalPrice={product.originalPrice}
            discountedPrice={product.discountedPrice}
            discountPercentage={product.discountPercentage}
            imageUrl={product.imageUrl}
            onClick={() => handleProductClick(product.id)}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductListing;