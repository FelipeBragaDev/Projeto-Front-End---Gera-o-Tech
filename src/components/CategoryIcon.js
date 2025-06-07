import React from 'react';

const iconContainerStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  width: '120px',
  cursor: 'pointer',
};

const iconCircleStyles = {
  width: '104px',
  height: '104px',
  borderRadius: '50%',
  backgroundColor: 'var(--white)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '12px',
  border: 'none',
  boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05)',
  transition: 'box-shadow 0.3s ease',
};

const iconCircleActiveStyles = {
  ...iconCircleStyles,
  boxShadow: '0px 4px 12px rgba(201, 32, 113, 0.2)',
};

// Estilos para a tag <img> do SVG
const svgIconStyles = {
  width: '60px',
  height: '60px',
};

const categoryNameStyles = {
  fontSize: '14px',
  color: 'var(--dark-gray-2)',
  fontWeight: '500',
};

// Componente IconDisplay atualizado para usar SVGs
const IconDisplay = ({ iconName, isActive }) => {
  const basePath = '/images/icons/';
  let iconSrc = '';
  let altText = iconName;


  switch (iconName.toLowerCase()) {
    case 'camisetas':
      iconSrc = `${basePath}camiseta.svg`;
      break;
    case 'calças':
      iconSrc = `${basePath}calca.svg`;
      break;
    case 'bone':
      iconSrc = `${basePath}bone.svg`;
      break;
    case 'headphones':
      iconSrc = `${basePath}headphones.svg`;
      break;
    case 'tênis':
      iconSrc = `${basePath}tenis.svg`;
      break;
    default:
      // Placeholder para ícones não encontrados
      return <span style={{ fontSize: '40px', color: isActive ? 'var(--primary)' : 'var(--dark-gray-3)' }}>?</span>;
  }


  const activeSvgStyle = isActive ? { filter: 'invert(22%) sepia(84%) saturate(3436%) hue-rotate(316deg) brightness(85%) contrast(95%)' } : {};

  if (iconSrc) {
    return (
      <img
        src={iconSrc}
        alt={altText}
        style={{
            ...svgIconStyles,
            ...(isActive && { filter: 'url(#filter-primary)' })
        }}
      />
    );
  }

  return <span style={{ fontSize: '40px', color: isActive ? 'var(--primary)' : 'var(--dark-gray-3)' }}>?</span>;
};


function CategoryIcon({ name, iconName, isActive, onClick }) {
  return (
    <>
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <filter id="filter-primary">
            <feColorMatrix type="matrix" values="0.33 0.33 0.33 0 0
                                                 0.33 0.33 0.33 0 0
                                                 0.33 0.33 0.33 0 0
                                                 0    0    0    1 0" />
            <feComponentTransfer>
                <feFuncR type="table" tableValues="0.788 0.788" /> 
                <feFuncG type="table" tableValues="0.125 0.125" /> 
                <feFuncB type="table" tableValues="0.443 0.443" /> 
            </feComponentTransfer>
          </filter>
        </defs>
      </svg>

      <div style={iconContainerStyles} onClick={onClick}>
        <div style={isActive ? iconCircleActiveStyles : iconCircleStyles}>
          <IconDisplay iconName={iconName || name} isActive={isActive} />
        </div>
        <span style={categoryNameStyles}>{name}</span>
      </div>
    </>
  );
}

export default CategoryIcon;