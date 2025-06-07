import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useNavigate } from 'react-router-dom';

// Estilos para a HeroSection em geral (o container do carrossel)
const heroSectionContainerStyles = {
  padding: '0px',
  backgroundColor: 'var(--light-gray-4)', 
  marginBottom: '10px',
};

// Estilos para cada Slide individual dentro do carrossel
const slideStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  padding: '60px 40px',      
  minHeight: '400px',
  boxSizing: 'border-box',
  flexWrap: 'wrap',
};

const textContentStyles = {
  maxWidth: '500px', 
  textAlign: 'left',
  paddingRight: '20px',
  zIndex: 1,
};

const preTitleStyles = { 
  color: 'var(--primary)',
  fontSize: '14px',
  fontWeight: '600', 
  textTransform: 'uppercase', 
  marginBottom: '8px',
};

const titleStyles = {
  fontSize: 'clamp(32px, 5vw, 52px)', 
  fontWeight: 'bold',
  color: 'var(--dark-gray)',
  margin: '0 0 10px 0',
  lineHeight: '1.2',
};

const subtitleStyles = {
  fontSize: 'clamp(16px, 2.5vw, 18px)',
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
  maxWidth: '450px', 
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
const slidesData = [
  {
    id: 1,
    preTitle: "Melhores ofertas personalizadas",
    title: "Queima de estoque Nike 🔥",
    subtitle: "Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.",
    buttonText: "Ver Ofertas",
    imageSrc: '/images/nike-shoe-banner.png', 
  },
  {
    id: 2,
    preTitle: "Novidades Exclusivas",
    title: "Lançamentos Imperdíveis ✨",
    subtitle: "Descubra os tênis que acabaram de chegar e defina a próxima tendência.",
    buttonText: "Explorar",
    imageSrc: '/images/nike-shoe-banner.png',
  },
  {
    id: 3,
    preTitle: "Estilo e Conforto",
    title: "Performance Elevada 🚀",
    subtitle: "Modelos desenhados para o máximo desempenho sem abrir mão do estilo.",
    buttonText: "Descobrir",
    imageSrc: '/images/nike-shoe-banner.png',
  },
  {
    id: 4,
    preTitle: "Ofertas Relâmpago",
    title: "Não Perca Tempo! ⏳",
    subtitle: "Promoções incríveis por tempo limitado. Garanta já o seu par perfeito.",
    buttonText: "Aproveitar",
    imageSrc: '/images/nike-shoe-banner.png', 
  },
];

function HeroSection() {
  const navigate = useNavigate();

  const handleNavigateToProducts = () => {
    navigate('/products'); 
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
          <div key={slide.id} style={slideStyles}>
            <div style={textContentStyles}> 
              <p style={preTitleStyles}>{slide.preTitle}</p> 
              <h1 style={titleStyles}>{slide.title}</h1>
              <p style={subtitleStyles}>{slide.subtitle}</p> 
              <button 
                style={ctaButtonStyles}
                onClick={handleNavigateToProducts} 
              >
                {slide.buttonText}
              </button>
            </div>
            <div style={imageContainerStyles}> 
              <img src={slide.imageSrc} alt={slide.title} style={productImageStyles} />
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
}

export default HeroSection;