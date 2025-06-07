import React from 'react';

// Caminho para o ícone do logo padrão (rosa)
const defaultLogoIconPath = '/images/logo-icon.png'; 

function Logo({ color, iconSrc }) { 
  // Estilos para o container do logo (o link <a>)
  const logoContainerStyles = {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    gap: '8px',
  };

  // Estilos para o ícone
  const iconStyles = {
    height: '24px',
    width: 'auto',
  };

  // Estilos para o texto do logo
  const textStyles = {
    fontWeight: 'bold',
    fontSize: '24px',
    color: color || 'var(--primary)',
  };

  // Determina qual ícone usar: o passado via prop ou o padrão
  const currentIconPath = iconSrc || defaultLogoIconPath;

  return (
    <a href="/" style={logoContainerStyles}>
      <img src={currentIconPath} alt="Ícone da Digital Store" style={iconStyles} />
      <span style={textStyles}>
        Digital Store
      </span>
    </a>
  );
}

export default Logo;