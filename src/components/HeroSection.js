import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useNavigate } from 'react-router-dom';

// Estilos para a HeroSection em geral (o container do carrossel)
const heroSectionContainerStyles = {
  padding: '0px',
  backgroundColor: 'var(--light-gray-4)', // Cor de fundo geral da seção hero
  marginBottom: '10px', // Já tínhamos, pode manter ou ajustar
};

// Estilos para cada Slide individual dentro do carrossel
const slideStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around', // Ou 'space-between'
  padding: '60px 40px',       // Padding interno do slide
  minHeight: '400px',          // Altura mínima para cada slide (ajuste conforme necessário)
  boxSizing: 'border-box',
  flexWrap: 'wrap', // Para responsividade, se necessário
};

const textContentStyles = {
  maxWidth: '500px', // Ajustado para ocupar mais espaço se a imagem for menor
  textAlign: 'left',
  paddingRight: '20px', // Espaço para não colar na imagem
  zIndex: 1, // Para garantir que o texto fique acima de qualquer elemento de fundo do carrossel
};

const preTitleStyles = { // Estilo para "Melhores ofertas personalizadas"
  color: 'var(--primary)',
  fontSize: '14px', // Ou 16px
  fontWeight: '600', // Ou 'bold'
  textTransform: 'uppercase', // Como no exemplo Vercel
  marginBottom: '8px',
};

const titleStyles = {
  fontSize: 'clamp(32px, 5vw, 52px)', // Ajustado para ser um pouco maior
  fontWeight: 'bold',
  color: 'var(--dark-gray)',
  margin: '0 0 10px 0',
  lineHeight: '1.2',
};

const subtitleStyles = {
  fontSize: 'clamp(16px, 2.5vw, 18px)', // Ajustado para ser um pouco menor
  color: 'var(--dark-gray-2)',
  marginBottom: '30px',
  lineHeight: '1.5',
};

const ctaButtonStyles = {
  backgroundColor: 'var(--primary)',
  color: 'var(--white)',
  padding: '15px 30px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '16px',
  fontWeight: 'bold',
  textTransform: 'uppercase',
};

const imageContainerStyles = {
  maxWidth: '450px', // Ajustar conforme necessário
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1,
};

const productImageStyles = {
  maxWidth: '100%',
  maxHeight: '350px',
  objectFit: 'contain',
};

// Dados para os slides do carrossel
// Você pode expandir isso com diferentes textos ou imagens para cada slide
const slidesData = [
  {
    id: 1,
    preTitle: "Melhores ofertas personalizadas",
    title: "Queima de estoque Nike 🔥",
    subtitle: "Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.",
    buttonText: "Ver Ofertas",
    imageSrc: '/images/nike-shoe-banner.png', // Use a imagem que já tinha
  },
  {
    id: 2,
    preTitle: "Novidades Exclusivas",
    title: "Lançamentos Imperdíveis ✨",
    subtitle: "Descubra os tênis que acabaram de chegar e defina a próxima tendência.",
    buttonText: "Explorar",
    imageSrc: '/images/nike-shoe-banner.png', // Pode usar a mesma imagem ou outra
  },
  {
    id: 3,
    preTitle: "Estilo e Conforto",
    title: "Performance Elevada 🚀",
    subtitle: "Modelos desenhados para o máximo desempenho sem abrir mão do estilo.",
    buttonText: "Descobrir",
    imageSrc: '/images/nike-shoe-banner.png', // Pode usar a mesma imagem ou outra
  },
  {
    id: 4,
    preTitle: "Ofertas Relâmpago",
    title: "Não Perca Tempo! ⏳",
    subtitle: "Promoções incríveis por tempo limitado. Garanta já o seu par perfeito.",
    buttonText: "Aproveitar",
    imageSrc: '/images/nike-shoe-banner.png', // Pode usar a mesma imagem ou outra
  },
];

function HeroSection() {
  const navigate = useNavigate(); // Passo 2: Inicializar navigate

  const handleNavigateToProducts = () => {
    navigate('/products'); // Passo 3: Função para navegar para /products
  };

  return (
    <section style={heroSectionContainerStyles}>
      <Carousel
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        swipeable={true}
        emulateTouch={true}
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          const indicatorStyles = {
            background: isSelected ? 'var(--primary)' : 'var(--light-gray-2)',
            width: 10,
            height: 10,
            borderRadius: '50%',
            display: 'inline-block',
            margin: '0 5px',
            cursor: 'pointer',
          };
          return (
            <li
              style={indicatorStyles}
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              value={index}
              key={index}
              role="button"
              tabIndex={0}
              aria-label={`${label} ${index + 1}`}
            />
          );
        }}
      >
        {slidesData.map((slide) => (
          <div key={slide.id} style={slideStyles}> {/* Supondo que slideStyles está definido */}
            <div style={textContentStyles}> {/* Supondo que textContentStyles está definido */}
              <p style={preTitleStyles}>{slide.preTitle}</p> {/* Supondo que preTitleStyles está definido */}
              <h1 style={titleStyles}>{slide.title}</h1> {/* Supondo que titleStyles está definido */}
              <p style={subtitleStyles}>{slide.subtitle}</p> {/* Supondo que subtitleStyles está definido */}
              <button 
                style={ctaButtonStyles}
                onClick={handleNavigateToProducts} // Passo 4: Adicionar onClick ao botão
              >
                {slide.buttonText}
              </button>
            </div>
            <div style={imageContainerStyles}> {/* Supondo que imageContainerStyles está definido */}
              <img src={slide.imageSrc} alt={slide.title} style={productImageStyles} /> {/* Supondo que productImageStyles está definido */}
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
}

export default HeroSection;