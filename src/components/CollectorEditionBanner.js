import React from 'react';
import { useNavigate } from 'react-router-dom';

// Estilos para a CollectorEditionBanner
const bannerStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  padding: '60px 40px',
  backgroundColor: 'var(--white)',
  borderRadius: '8px',
  margin: '10px 0',
  flexWrap: 'wrap-reverse',
  overflow: 'hidden',
};

// Container da imagem principal (tênis + elipse)
const imageContainerStyles = {
  flex: 1,
  minWidth: '300px',
  maxWidth: '500px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px',
  position: 'relative',
};

// Estilo para a imagem da Elipse
const ellipseImageStyles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)', 
  width: '70%',
  maxWidth: '500px',
  height: 'auto',
  zIndex: 0,
};

// Estilo para a imagem do produto (tênis)
const productImageStyles = {
  maxWidth: '100%',
  maxHeight: '400px',
  objectFit: 'contain',
  position: 'relative',
  zIndex: 1,
};

// Container para o conteúdo de texto
const textContentStyles = {
  flex: 1,
  minWidth: '300px',
  maxWidth: '500px',
  padding: '20px',
  textAlign: 'left',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
};

// Estilo para o texto "Oferta Especial"
const preTitleStyles = {
  color: 'var(--primary)',
  fontSize: '14px',
  fontWeight: '600',
  textTransform: 'uppercase',
  marginBottom: '10px',
};

const titleStyles = {
  fontSize: 'clamp(26px, 4vw, 38px)',
  fontWeight: 'bold',
  color: 'var(--dark-gray)',
  margin: '0 0 15px 0',
  lineHeight: '1.2',
};

const descriptionStyles = {
  fontSize: 'clamp(15px, 2vw, 17px)',
  color: 'var(--dark-gray-2)',
  marginBottom: '30px',
  lineHeight: '1.6',
};

const ctaButtonStyles = {
  backgroundColor: 'var(--primary)',
  color: 'var(--white)',
  padding: '12px 28px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '15px',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  alignSelf: 'flex-start',
};

// Caminhos das imagens (a partir da pasta public)
const airJordanImage = '/images/air-jordan-collector.svg';
const ellipseImage = '/images/Ellipse.png';

function CollectorEditionBanner() {
const navigate = useNavigate();

  const handleNavigateToProducts = () => {
    navigate('/product/prod1');
  };

  return (
    <section style={bannerStyles}>
      <div style={imageContainerStyles}>
        <img src={ellipseImage} alt="" style={ellipseImageStyles} />
        <img src={airJordanImage} alt="Air Jordan Edição de Colecionador" style={productImageStyles} />
      </div>
      <div style={textContentStyles}>
        <p style={preTitleStyles}>Oferta Especial</p>
        <h2 style={titleStyles}>Air Jordan Edição de Colecionador</h2>
        <p style={descriptionStyles}>
          Descubra a exclusividade e o estilo inconfundível da edição de colecionador Air Jordan.
          Peças limitadas que elevam seu visual a um novo nível de autenticidade e performance.
          Não perca a chance de possuir uma lenda.
        </p>
        <button 
          style={ctaButtonStyles}
          onClick={handleNavigateToProducts}
        >
          Ver Oferta 
        </button>
      </div>
    </section>
  );
}

export default CollectorEditionBanner;