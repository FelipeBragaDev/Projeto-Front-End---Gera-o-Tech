import React from 'react';
import { useNavigate } from 'react-router-dom';

// Estilos para a CollectorEditionBanner
const bannerStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  padding: '60px 40px',
  backgroundColor: 'var(--white)', // Fundo branco para a seção, como na screenshot
  borderRadius: '8px',
  margin: '10px 0',
  flexWrap: 'wrap-reverse', // Mantém o texto acima da imagem em telas menores
  overflow: 'hidden', // Para conter a elipse se ela for muito grande
};

// Container da imagem principal (tênis + elipse)
const imageContainerStyles = {
  flex: 1,
  minWidth: '300px',
  maxWidth: '500px', // Pode aumentar um pouco para dar espaço à elipse
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px',
  position: 'relative', // <<< NECESSÁRIO para posicionar a elipse absolutamente dentro dele
};

// Estilo para a imagem da Elipse
const ellipseImageStyles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)', // Centraliza a elipse
  width: '70%', // Faz a elipse um pouco maior que o container do tênis,
  maxWidth: '500px', // Limita o tamanho máximo da elipse
  height: 'auto',
  zIndex: 0, // Garante que a elipse fique atrás do tênis
};

// Estilo para a imagem do produto (tênis)
const productImageStyles = {
  maxWidth: '100%', // Tênis ocupa a largura do seu container direto
  maxHeight: '400px',
  objectFit: 'contain',
  position: 'relative', // Para garantir que fique sobre a elipse
  zIndex: 1, // Acima da elipse
};

// Container para o conteúdo de texto
const textContentStyles = {
  flex: 1,
  minWidth: '300px',
  maxWidth: '500px',
  padding: '20px',
  textAlign: 'left',
  display: 'flex', // Para usar flex-direction
  flexDirection: 'column', // Empilhar pré-título, título, descrição, botão
  justifyContent: 'center', // Centralizar o conteúdo de texto verticalmente
};

// Estilo para o texto "Oferta Especial"
const preTitleStyles = {
  color: 'var(--primary)', // Cor rosa
  fontSize: '14px',
  fontWeight: '600',
  textTransform: 'uppercase',
  marginBottom: '10px', // Espaço abaixo dele
};

const titleStyles = {
  fontSize: 'clamp(26px, 4vw, 38px)', // Pode ser um pouco menor que o hero principal
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
  padding: '12px 28px', // Ajuste no padding
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '15px', // Ajuste no tamanho da fonte
  fontWeight: 'bold',
  textTransform: 'uppercase',
  alignSelf: 'flex-start', // Para o botão não esticar se o textContentStyles for flex
};

// Caminhos das imagens (a partir da pasta public)
const airJordanImage = '/images/air-jordan-collector.svg';
const ellipseImage = '/images/Ellipse.png';

function CollectorEditionBanner() {
const navigate = useNavigate(); // Passo 2: Inicializar navigate

  const handleNavigateToProducts = () => {
    navigate('/product/prod1'); // Passo 3: Função para navegar para /products
  };

  return (
    <section style={bannerStyles}> {/* Supondo que bannerStyles está definido */}
      <div style={imageContainerStyles}> {/* Supondo que imageContainerStyles está definido */}
        <img src={ellipseImage} alt="" style={ellipseImageStyles} /> {/* Supondo que ellipseImageStyles está definido */}
        <img src={airJordanImage} alt="Air Jordan Edição de Colecionador" style={productImageStyles} /> {/* Supondo que productImageStyles está definido */}
      </div>
      <div style={textContentStyles}> {/* Supondo que textContentStyles está definido */}
        <p style={preTitleStyles}>Oferta Especial</p> {/* Supondo que preTitleStyles está definido */}
        <h2 style={titleStyles}>Air Jordan Edição de Colecionador</h2> {/* Supondo que titleStyles está definido */}
        <p style={descriptionStyles}>
          Descubra a exclusividade e o estilo inconfundível da edição de colecionador Air Jordan.
          Peças limitadas que elevam seu visual a um novo nível de autenticidade e performance.
          Não perca a chance de possuir uma lenda.
        </p>
        <button 
          style={ctaButtonStyles}
          onClick={handleNavigateToProducts} // Passo 4: Adicionar onClick ao botão
        >
          Ver Oferta 
        </button>
      </div>
    </section>
  );
}

export default CollectorEditionBanner;