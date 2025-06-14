import React from 'react';
import ProductCard from './ProductCard';
import { useNavigate } from 'react-router-dom'; 

// Estilos para a seção
const sectionStyles = {
  padding: '40px 100px',
  backgroundColor: 'var(--light-gray-3)', 
};

const sectionHeaderStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '0px',
  padding: '0 20px', 
};

const sectionTitleStyles = {
  fontSize: '28px',
  fontWeight: 'bold',
  color: 'var(--dark-gray)',
  textAlign: 'left',
};

const viewAllLinkStyles = {
  fontSize: '16px',
  color: 'var(--primary)',
  textDecoration: 'none',
  fontWeight: '500',
  cursor: 'pointer',
};

const productsGridStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
  gap: '30px', 
  justifyContent: 'center', 
};

const trendingProductsData = [
  {
    id: 'prod1',
    name: 'K-Swiss V8 - Masculino',
    category: 'Tênis',
    originalPrice: 200,
    discountedPrice: 100,
    discountPercentage: 50,
    imageUrl: '/images/products/kswiss-v8.svg', 
  },
  {
    id: 'prod2',
    name: 'Nike Air Max Super Max Ultra 2.0',
    category: 'Tênis',
    originalPrice: 250,
    discountedPrice: 150,
    discountPercentage: 40,
    imageUrl: '/images/products/kswiss-v8.svg', 
  },
  {
    id: 'prod3',
    name: 'Adidas Performance Run',
    category: 'Tênis',
    originalPrice: 180,
    discountedPrice: 120,
    discountPercentage: 33,
    imageUrl: '/images/products/kswiss-v8.svg', 
  },
  {
    id: 'prod4',
    name: 'Puma RS-X Reinvention',
    category: 'Tênis',
    originalPrice: 220,
    discountedPrice: 100, 
    discountPercentage: 27,
    imageUrl: '/images/products/kswiss-v8.svg',
  },
  {
    id: 'prod5',
    name: 'Outro Tênis Legal Modelo X',
    category: 'Tênis',
    originalPrice: 300,
    discountedPrice: 200,
    discountPercentage: 33,
    imageUrl: '/images/products/kswiss-v8.svg',
  },
  {
    id: 'prod6',
    name: 'Super Sapato Confort Y',
    category: 'Sapato Casual',
    originalPrice: 150,
    discountedPrice: 90,
    discountPercentage: 40,
    imageUrl: '/images/products/kswiss-v8.svg',
  },
  {
    id: 'prod7',
    name: 'Chuteira de Campo Pro Z',
    category: 'Futebol',
    originalPrice: 400,
    discountedPrice: 280,
    discountPercentage: 30,
    imageUrl: '/images/products/kswiss-v8.svg',
  },
  {
    id: 'prod8',
    name: 'Chuteira de Campo Pro Z',
    category: 'Futebol',
    originalPrice: 400,
    discountedPrice: 280,
    discountPercentage: 30,
    imageUrl: '/images/products/kswiss-v8.svg',
  },
];

function TrendingProductsSection() {
  const navigate = useNavigate(); 

  const handleProductClick = (productId) => {
    console.log("Produto clicado:", productId);
    navigate(`/product/${productId}`);
  };

  const handleViewAllClick = () => {
    console.log("Ver todos os produtos");
    navigate('/products');
  };

  return (
    <section style={sectionStyles}>
      <div style={sectionHeaderStyles}>
        <h2 style={sectionTitleStyles}>Produtos em alta</h2>
        <span onClick={handleViewAllClick} style={viewAllLinkStyles} role="button" tabIndex={0}>
          Ver todos &rarr;
        </span>
      </div>
      <div style={productsGridStyles}>
        {trendingProductsData.map((product, index) => { 
          

          if (!product || !product.id || typeof product.discountedPrice === 'undefined' || isNaN(product.discountedPrice)) {
              console.warn(`Produto ${index} não será renderizado devido a dados ausentes/inválidos.`);
              return null; 
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

export default TrendingProductsSection;