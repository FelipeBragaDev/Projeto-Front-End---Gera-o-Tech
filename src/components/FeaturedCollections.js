import React from 'react';
import CollectionCard from './CollectionCard';

// Estilos para a seção FeaturedCollections
const sectionStyles = {
  padding: '10px 100px', // Aumentar padding vertical
};

const sectionTitleStyles = {
  fontSize: 'clamp(24px, 4vw, 15px)', // Ajustar tamanho da fonte
  fontWeight: 'bold',
  color: 'var(--dark-gray-2)',
  textAlign: 'left',
  marginBottom: '30px', // Aumentar margem inferior
};

const collectionsContainerStyles = {
  display: 'flex',
  justifyContent: 'center', // <<< CENTRALIZAR OS CARDS NO CONTAINER
  flexWrap: 'wrap',
  gap: '25px', // Ajustar o espaço entre os cards
  maxWidth: '1200px', // Definir uma largura máxima para o container e centralizá-lo
  margin: '0 auto',    // Centraliza o container na página
};

// Dados das coleções
const collectionsData = [
  {
    id: 1,
    title: 'Novo drop Supreme',
    discount: '30% OFF',
    imageSrc: '/images/supreme-collection.png',
    ctaLink: '/products',
  },
  {
    id: 2,
    title: 'Coleção Adidas',
    discount: '20% OFF',
    imageSrc: '/images/adidas-collection.png',
    ctaLink: '/products',
  },
  {
    id: 3,
    title: 'Novo Beats Bass',
    discount: '15% OFF',
    imageSrc: '/images/beats-collection.png',
    ctaLink: '/products',
  },
];

function FeaturedCollections() {
  return (
    <section style={sectionStyles}>
      <h2 style={sectionTitleStyles}>Coleções em destaque</h2>
      <div style={collectionsContainerStyles}>
        {collectionsData.map((collection) => (
          <CollectionCard
            key={collection.id}
            title={collection.title}
            discount={collection.discount}
            imageSrc={collection.imageSrc}
            ctaLink={collection.ctaLink}
          />
        ))}
      </div>
    </section>
  );
}

export default FeaturedCollections;