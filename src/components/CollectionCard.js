import React from 'react';

// Estilos para o CollectionCard
const cardStyles = {
  backgroundColor: '#D8E3F2', // <<< NOVA COR DE FUNDO SÓLIDO
  color: 'var(--white)',
  borderRadius: '8px',
  padding: '40px',
  width: '350px', // Ajuste a largura conforme necessário
  minHeight: '220px', // Ajuste a altura mínima
  display: 'flex',
  justifyContent: 'flex-end', // Espaço entre o conteúdo de texto e a imagem
  alignItems: 'center', // Alinha verticalmente o texto e a imagem
  position: 'relative', // Para a tag de desconto
  overflow: 'visible', // Permitir que a imagem "vaze" um pouco se for o design
  boxSizing: 'border-box',
  boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.08)', // Sombra mais sutil
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  cursor: 'pointer',
};

const cardHoverStyles = {
  transform: 'translateY(-5px)', // Elevar um pouco no hover
  boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.12)',
};

const textContentStyles = {
  flex: 1, // Ocupa o espaço disponível à esquerda
  paddingRight: '15px', // Espaço para a imagem não colar no texto
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center', // Centraliza o conteúdo de texto verticalmente
  height: '100%', // Para o justify-content funcionar bem
};

const discountTagStyles = {
  position: 'absolute',
  top: '10px',
  left: '15px',
  backgroundColor: '#E7FF86', // Um amarelo-esverdeado claro (ajuste esta cor!)
  color: '#3F6212',          // Um verde escuro para o texto da tag (ajuste esta cor!)
  padding: '6px 12px',
  borderRadius: '16px',
  fontSize: '13px',
  fontWeight: '600', // Um pouco menos bold que antes
};

const titleStyles = {
  fontSize: 'clamp(22px, 3vw, 28px)',
  fontWeight: 'bold',
  color: 'var(--dark-gray)', // <<< TEXTO ESCURO
  margin: '0 0 20px 0', // Aumentar margem inferior
  lineHeight: '1.2',
};

const ctaButtonStyles = {
  backgroundColor: 'var(--white)',
  color: 'var(--primary)', // Texto rosa
  padding: '12px 25px',
  border: '1px solid transparent', // Borda transparente que pode mudar no hover
  borderRadius: '8px', // Bordas um pouco mais arredondadas
  cursor: 'pointer',
  fontSize: '15px',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  alignSelf: 'flex-start', // Alinha o botão à esquerda do container de texto
  transition: 'background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease',
};

const ctaButtonHoverStyles = {
  backgroundColor: 'var(--light-gray-3)',
  borderColor: 'var(--light-gray-2)', // Uma borda sutil no hover
};

const imageContainerStyles = {
  flexShrink: 0, // Impede que o container da imagem encolha
  width: '150px', // Largura para a imagem (ajuste conforme necessário)
  // height: '100%', // Para alinhar com a altura do card, se a imagem for alta
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  // Se a imagem precisar "sair" do card, você pode usar posicionamento absoluto
  // ou margens negativas, mas isso pode complicar o layout.
  // Por enquanto, vamos mantê-la contida ou levemente ajustada.
};

const productImageStyles = {
  maxWidth: '100%',
  maxHeight: '180px', // Limitar altura da imagem dentro do seu espaço
  objectFit: 'contain',
};

// NOTA: A prop "backgroundImage" será agora usada como "imageSrc" para uma tag <img>
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
    // O <a> agora envolve todo o card, mas não precisa de estilos de imagem de fundo
    <a
      href={ctaLink}
      style={dynamicCardStyles}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="collection-card-link" // Adicionar uma classe para CSS externo se necessário
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
// Adicione isto ao seu CSS global (ex: index.css) se quiser remover o sublinhado do link
// a.collection-card-link { text-decoration: none; }
// a.collection-card-link:hover { text-decoration: none; }


export default CollectionCard;