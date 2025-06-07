import React from 'react';
import CollectionCard from './CollectionCard';

// Estilos para a seção FeaturedCollections
const sectionStyles = {
  padding: '10px 100px',
};

const sectionTitleStyles = {
  fontSize: 'clamp(24px, 4vw, 15px)',
  fontWeight: 'bold',
  color: 'var(--dark-gray-2)',
  textAlign: 'left',
  marginBottom: '30px',
};

const collectionsContainerStyles = {
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: '25px',
  maxWidth: '1200px',
  margin: '0 auto',
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