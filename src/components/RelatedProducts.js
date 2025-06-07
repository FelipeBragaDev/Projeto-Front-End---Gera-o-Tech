import React from 'react';
import ProductCard from './ProductCard';
import { Link, useNavigate } from 'react-router-dom';
import { mockProducts } from '../data/mockData'; // Certifique-se que este caminho está correto

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
  // Para forçar 4 colunas em telas maiores, você pode usar media queries ou ajustar minmax.
  // Exemplo para desktop com 4 colunas mais fixas:
  // '@media (min-width: 1024px)': { gridTemplateColumns: 'repeat(4, 1fr)' }
  // (Mas isso exigiria uma biblioteca de CSS-in-JS que suporte media queries, ou classes CSS)
  // Por agora, 'auto-fill' com minmax é uma boa abordagem responsiva.
  gap: '20px',
};


function RelatedProducts({ currentProductId, currentProductCategory }) {
  const navigate = useNavigate();

  // Lógica para selecionar produtos relacionados
  let related = [];
  const maxRelatedProducts = 4;

  // 1. Tenta pegar produtos da mesma categoria
  if (currentProductCategory) {
    related = mockProducts.filter(
      product => product.category === currentProductCategory && product.id !== currentProductId
    );
  }

  // 2. Se não tiver 4, tenta pegar de outras categorias
  if (related.length < maxRelatedProducts) {
    const existingIds = new Set(related.map(p => p.id));
    if (currentProductId) {
      existingIds.add(currentProductId);
    }

    const otherProducts = mockProducts.filter(p => !existingIds.has(p.id));
    
    // Embaralha os outros produtos para variedade (opcional, mas bom)
    const shuffledOtherProducts = [...otherProducts].sort(() => 0.5 - Math.random());
    
    related.push(...shuffledOtherProducts.slice(0, maxRelatedProducts - related.length));
  }

  // 3. Garante que temos no máximo 4 produtos
  related = related.slice(0, maxRelatedProducts);

  // ---- LOGS PARA DEPURAR (Pode remover depois) ----
  console.log("--- RelatedProducts Component DEBUG ---");
  console.log("Current Product ID:", currentProductId);
  console.log("Current Product Category:", currentProductCategory);
  console.log("Final selected related products:", related);
  // ---- FIM DOS LOGS ----

  if (related.length === 0) {
    console.log("Nenhum produto para mostrar em 'Relacionados'.");
    return null; // Não renderiza a seção se, mesmo após as tentativas, não encontrar nada.
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
          // Verificação rápida para imagem (embora ProductCard já tenha um fallback)
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