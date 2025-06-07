import React from 'react';
import ProductCard from './ProductCard';
import { Link, useNavigate } from 'react-router-dom';
import { mockProducts } from '../data/mockData'; 

const relatedSectionStyles = {
  marginTop: '60px',
  paddingTop: '40px',
  borderTop: '1px solid var(--light-gray-3)',
};

const headerStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '25px',
};

const titleStyles = {
  fontSize: 'clamp(22px, 3.5vw, 28px)',
  fontWeight: 'bold',
  color: 'var(--dark-gray)',
};

const viewAllLinkStyles = {
  fontSize: '16px',
  color: 'var(--primary)',
  textDecoration: 'none',
  fontWeight: '500',
};

const productsGridStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))', 
  gap: '20px',
};


function RelatedProducts({ currentProductId, currentProductCategory }) {
  const navigate = useNavigate();

  let related = [];
  const maxRelatedProducts = 4;

 
  if (currentProductCategory) {
    related = mockProducts.filter(
      product => product.category === currentProductCategory && product.id !== currentProductId
    );
  }


  if (related.length < maxRelatedProducts) {
    const existingIds = new Set(related.map(p => p.id));
    if (currentProductId) {
      existingIds.add(currentProductId);
    }

    const otherProducts = mockProducts.filter(p => !existingIds.has(p.id));
    

    const shuffledOtherProducts = [...otherProducts].sort(() => 0.5 - Math.random());
    
    related.push(...shuffledOtherProducts.slice(0, maxRelatedProducts - related.length));
  }


  related = related.slice(0, maxRelatedProducts);



  if (related.length === 0) {
    console.log("Nenhum produto para mostrar em 'Relacionados'.");
    return null; 
  }

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
    window.scrollTo(0, 0);
  };

  return (
    <section style={relatedSectionStyles}>
      <div style={headerStyles}>
        <h2 style={titleStyles}>Produtos Relacionados</h2>
        <Link to="/products" style={viewAllLinkStyles}>
          Ver todos &rarr;
        </Link>
      </div>
      <div style={productsGridStyles}>
        {related.map((product) => {

          if (!product.imageUrl) {
            console.warn(`Produto relacionado "${product.name}" (ID: ${product.id}) está sem imageUrl.`);
          }
          return (
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
          );
        })}
      </div>
    </section>
  );
}

export default RelatedProducts;