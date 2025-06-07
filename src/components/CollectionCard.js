import React from 'react';

// Estilos para o CollectionCard
const cardStyles = {
  backgroundColor: '#D8E3F2',
  color: 'var(--white)',
  borderRadius: '8px',
  padding: '40px',
  width: '350px',
  minHeight: '220px',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  position: 'relative',
  overflow: 'visible',
  boxSizing: 'border-box',
  boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.08)',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  cursor: 'pointer',
};

const cardHoverStyles = {
  transform: 'translateY(-5px)',
  boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.12)',
};

const textContentStyles = {
  flex: 1,
  paddingRight: '15px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '100%',
};

const discountTagStyles = {
  position: 'absolute',
  top: '10px',
  left: '15px',
  backgroundColor: '#E7FF86',
  color: '#3F6212',
  padding: '6px 12px',
  borderRadius: '16px',
  fontSize: '13px',
  fontWeight: '600',
};

const titleStyles = {
  fontSize: 'clamp(22px, 3vw, 28px)',
  fontWeight: 'bold',
  color: 'var(--dark-gray)',
  margin: '0 0 20px 0',
  lineHeight: '1.2',
};

const ctaButtonStyles = {
  backgroundColor: 'var(--white)',
  color: 'var(--primary)',
  padding: '12px 25px',
  border: '1px solid transparent',
  borderRadius: '8px',
  cursor: 'pointer',
  fontSize: '15px',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  alignSelf: 'flex-start',
  transition: 'background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease',
};

const ctaButtonHoverStyles = {
  backgroundColor: 'var(--light-gray-3)',
  borderColor: 'var(--light-gray-2)',
};

const imageContainerStyles = {
  flexShrink: 0,
  width: '150px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const productImageStyles = {
  maxWidth: '100%',
  maxHeight: '180px',
  objectFit: 'contain',
};


function CollectionCard({ title, discount, imageSrc, ctaText = "Comprar", ctaLink = "#" }) {
  const [isHovered, setIsHovered] = React.useState(false);

  const dynamicCardStyles = {
    ...cardStyles,
    ...(isHovered ? cardHoverStyles : {}),
  };

  const dynamicCtaButtonStyles = {
    ...ctaButtonStyles,
    ...(isHovered ? ctaButtonHoverStyles : {}),
  };

  return (
    <a
      href={ctaLink}
      style={dynamicCardStyles}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="collection-card-link"
    >
      {discount && <span style={discountTagStyles}>{discount}</span>}
      
      <div style={textContentStyles}>
        <h3 style={titleStyles}>{title}</h3>
        <button style={dynamicCtaButtonStyles}>
          {ctaText}
        </button>
      </div>

      {imageSrc && (
        <div style={imageContainerStyles}>
          <img src={imageSrc} alt={title || 'Imagem da coleção'} style={productImageStyles} />
        </div>
      )}
    </a>
  );
}

export default CollectionCard;