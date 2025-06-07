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
  width: '60px',  // Ajuste o tamanho conforme necessário
  height: '60px', // Ajuste o tamanho conforme necessário
};

// ATENÇÃO: Para que a cor do SVG mude com o CSS (usando 'filter' ou se o SVG usar 'currentColor'),
// o SVG precisa ser monocromático ou preparado para isso.
// A abordagem com 'filter' pode não dar a cor exata --primary.
// Uma alternativa é ter SVGs separados para o estado ativo ou importar SVGs como componentes React.
// Por enquanto, a principal indicação visual de 'ativo' será a borda do círculo.
// Se seus SVGs usam "currentColor" para fill/stroke, a propriedade color do estilo pai pode funcionar.

const categoryNameStyles = {
  fontSize: '14px',
  color: 'var(--dark-gray-2)',
  fontWeight: '500',
};

// Componente IconDisplay atualizado para usar SVGs
const IconDisplay = ({ iconName, isActive }) => {
  const basePath = '/images/icons/'; // Caminho base para os ícones na pasta public
  let iconSrc = '';
  let altText = iconName;

  // Mapeamento do iconName para o nome do arquivo SVG correspondente
  switch (iconName.toLowerCase()) {
    case 'camisetas':
      iconSrc = `${basePath}camiseta.svg`;
      break;
    case 'calças': // Assumindo que 'iconName' em categoriesData para Calças é 'Calças'
      iconSrc = `${basePath}calca.svg`;
      break;
    case 'bone': // Assumindo que 'iconName' em categoriesData para Bonés é 'Bonés'
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

  // Estilo para tentar aplicar a cor primária se ativo.
  // Isso funciona melhor se o SVG usar `currentColor`.
  const activeSvgStyle = isActive ? { filter: 'invert(22%) sepia(84%) saturate(3436%) hue-rotate(316deg) brightness(85%) contrast(95%)' } : {};
  // A filter acima tenta converter para a cor primária (#C92071). Pode precisar de ajustes.
  // Se não quiser usar filter, remova activeSvgStyle e a cor do ícone não mudará.

  if (iconSrc) {
    return (
      <img
        src={iconSrc}
        alt={altText}
        style={{
            ...svgIconStyles,
            // Se os SVGs forem projetados para herdar cor (usando currentColor),
            // a linha abaixo pode funcionar para mudar a cor:
            // color: isActive ? 'var(--primary)' : 'var(--dark-gray-3)',
            // Caso contrário, a borda do círculo será o principal indicador.
            // A propriedade filter é uma tentativa de colorir SVGs via CSS:
            ...(isActive && { filter: 'url(#filter-primary)' }) // requer definir o filtro SVG
        }}
      />
    );
  }
  // Fallback se iconSrc não for definido (não deve acontecer com o switch acima)
  return <span style={{ fontSize: '40px', color: isActive ? 'var(--primary)' : 'var(--dark-gray-3)' }}>?</span>;
};


function CategoryIcon({ name, iconName, isActive, onClick }) {
  return (
    <>
      {/* Definição do filtro SVG para tentar colorir os ícones para a cor primária */}
      {/* Este filtro é uma tentativa, a eficácia depende do SVG original */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <filter id="filter-primary">
            {/* Matrix para tentar aproximar a cor #C92071 (Rosa Primário) */}
            {/* Esta é uma aproximação e pode não ser perfeita. */}
            {/* Converte para tons de cinza, depois colore. */}
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