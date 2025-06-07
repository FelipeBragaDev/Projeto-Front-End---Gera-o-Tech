import React, { useState, useEffect, useCallback } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer'; 
import { FaHardHat, FaHammer, FaTools, FaRulerCombined, FaPaintRoller, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

// Estilo para o container geral da página
const pageWrapperStyles = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
};

// Estilo para a área de conteúdo principal que terá o design "Em Construção"
const mainConstructionContentStyles = {
  flex: 1,
  background: 'linear-gradient(to bottom right, #1e1b4b, #4c1d95)',
  color: 'white',
  fontFamily: "'Inter', sans-serif",
  padding: '4rem 1rem', 
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center', 
};

// Container interno para limitar a largura do conteúdo "em construção"
const constructionInnerContainerStyles = {
    maxWidth: '1280px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
};

// Header da página de construção
const constructionHeaderStyles_full = {
  textAlign: 'center',
  marginBottom: '4rem', 
};
const constructionTitleH1Styles_full = {
  fontSize: 'clamp(2.5rem, 6vw, 3.75rem)', 
  fontWeight: 'bold',
  marginBottom: '1rem', 
};
const constructionSubtitleStyles_full = {
  fontSize: 'clamp(1.125rem, 4vw, 1.25rem)',
  opacity: 0.8,
};
const constructionIconContainerStyles_full = {
  marginBottom: '3rem',
  color: '#facc15', 
  animation: 'bounce 2s infinite',
};
const progressBarContainerStyles_full = {
  width: '80%', 
  maxWidth: '600px', 
  backgroundColor: '#374151',
  borderRadius: '9999px',
  height: '1rem',
  marginBottom: '3rem',
  overflow: 'hidden',
};
const progressBarStyle_full = (progress) => ({
  width: `${progress}%`,
  backgroundColor: '#facc15',
  height: '1rem',
  borderRadius: '9999px',
  transition: 'width 1.5s ease-in-out',
});
const countdownGridStyles_full = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', 
  gap: '1rem',
  marginBottom: '4rem',
  textAlign: 'center',
  width: '100%',
  maxWidth: '600px',
};
const countdownBoxStyles_full = {
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  padding: '1rem',
  borderRadius: '0.5rem',
};
const countdownTimeStyles_full = {
  fontSize: 'clamp(1.5rem, 5vw, 1.875rem)', 
  fontWeight: 'bold',
};
const countdownLabelStyles_full = {
  fontSize: '0.875rem',
  opacity: 0.8,
};
const newsletterContainerStyles_full = {
  backgroundColor: 'rgba(255, 255, 255, 0.05)', 
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '0.75rem',
  padding: '2rem',
  maxWidth: '42rem',
  width: 'calc(100% - 2rem)', 
  boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)',
  marginBottom: '3rem',
};
const newsletterTitleStyles_full = {
  fontSize: 'clamp(1.25rem, 5vw, 1.5rem)',
  fontWeight: 'bold',
  marginBottom: '1rem',
};
const newsletterTextStyles_full = {
  marginBottom: '1.5rem',
  opacity: 0.9,
  fontSize: 'clamp(0.875rem, 3vw, 1rem)',
};
const newsletterFormStyles_full = {
  display: 'flex',
  flexDirection: window.innerWidth < 768 ? 'column' : 'row',
  gap: '1rem',
};
const newsletterInputStyles_full = {
  flexGrow: 1,
  padding: '0.75rem 1rem',
  borderRadius: '0.5rem',
  color: '#1f2937',
  border: 'none',
  outline: 'none',
};
const newsletterButtonStyles_full = {
  backgroundColor: '#facc15',
  color: '#1f2937',
  fontWeight: 'bold',
  padding: '0.75rem 1.5rem',
  borderRadius: '0.5rem',
  transition: 'background-color 0.2s ease',
  cursor: 'pointer',
  border: 'none',
};
const constructionFooterStyles_full = {
  marginTop: 'auto', 
  paddingTop: '2rem', 
  textAlign: 'center',
  opacity: 0.7,
  width: '100%',
};
const socialLinksContainerStyles_full = {
  display: 'flex',
  justifyContent: 'center',
  gap: '1.5rem', 
  marginTop: '1rem',
};
const socialLinkStyles_full = {
  color: 'white',
  transition: 'color 0.2s ease',
  fontSize: '1.5rem', 
};


function CategoriesPage() {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [email, setEmail] = useState('');
  const [progress, setProgress] = useState(0);

  const setupCountdown = useCallback(() => {
    const launchDate = new Date(2025, 11, 31, 23, 59, 59).getTime();
    const startDate = new Date(2025, 0, 1).getTime(); 

    const update = () => {
      const now = new Date().getTime();
      const distance = launchDate - now;

      if (distance < 0) {
        clearInterval(timer);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setProgress(100);
        return;
      }

      setCountdown({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
      
      if (launchDate > startDate) {
        const totalDuration = launchDate - startDate;
        const elapsedSinceStart = now - startDate;
        setProgress(Math.min(100, Math.max(0, Math.floor((elapsedSinceStart / totalDuration) * 100))));
      } else {
        setProgress(0);
      }
    };
    
    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setupCountdown();
  }, [setupCountdown]);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      alert(`Obrigado, ${email}! Nós te avisaremos.`);
      setEmail('');
    } else {
      alert('Por favor, insira um email válido.');
    }
  };
  
  // Lógica para responsividade da direção do formulário de newsletter
  const [formDirection, setFormDirection] = useState(window.innerWidth < 768 ? 'column' : 'row');
  useEffect(() => {
    const handleResize = () => {
        setFormDirection(window.innerWidth < 768 ? 'column' : 'row');
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const currentNewsletterFormStyles = { ...newsletterFormStyles_full, flexDirection: formDirection };


  const floatingElements = [
    { icon: <FaHammer />, color: '#facc15', top: '5%', left: '15%', delay: '0s' },
    { icon: <FaTools />, color: '#60a5fa', top: '15%', right: '15%', delay: '1s' },
    { icon: <FaRulerCombined />, color: '#f87171', bottom: '15%', left: '20%', delay: '2s' },
    { icon: <FaPaintRoller />, color: '#4ade80', bottom: '5%', right: '20%', delay: '3s' },
  ];
  // Lógica para mostrar/esconder elementos flutuantes baseada na largura da tela
  const [showFloatingElements, setShowFloatingElements] = useState(window.innerWidth >= 768);
  useEffect(() => {
    const handleResize = () => setShowFloatingElements(window.innerWidth >= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <div style={pageWrapperStyles}>
      <Header />
      <main style={mainConstructionContentStyles}>
        <div style={constructionInnerContainerStyles}>
          <header style={constructionHeaderStyles_full}>
            <h1 style={constructionTitleH1Styles_full}>Categorias</h1>
            <p style={constructionSubtitleStyles_full}>Estamos preparando algo incrível para você!</p>
          </header>

          <div style={constructionIconContainerStyles_full}>
            <FaHardHat style={{ fontSize: '5rem' }} />
          </div>

          <div style={progressBarContainerStyles_full}>
            <div style={progressBarStyle_full(progress)}></div>
          </div>

          <div style={countdownGridStyles_full}>
            {Object.entries(countdown).map(([unit, value]) => (
              <div key={unit} style={countdownBoxStyles_full}>
                <div style={countdownTimeStyles_full}>{String(value).padStart(2, '0')}</div>
                <div style={countdownLabelStyles_full}>{unit.charAt(0).toUpperCase() + unit.slice(1)}</div>
              </div>
            ))}
          </div>
          
          {showFloatingElements && (
            <div style={{ position: 'absolute', width: '100%', height: '100%', top:0, left:0, overflow:'hidden', pointerEvents:'none', zIndex:0 }}>
              {floatingElements.map((el, idx) => (
                <div
                  key={idx}
                  style={{
                    position: 'absolute', 
                    top: el.top, left: el.left, right: el.right, bottom: el.bottom,
                    animation: `float 6s ease-in-out ${el.delay} infinite`,
                    color: el.color, fontSize: '2rem',
                  }}
                >
                  {el.icon}
                </div>
              ))}
            </div>
          )}

          <div style={newsletterContainerStyles_full}>
            <h2 style={newsletterTitleStyles_full}>Quer ser avisado?</h2>
            <p style={newsletterTextStyles_full}>Deixe seu email e te avisaremos quando nossas categorias estiverem disponíveis!</p>
            <form style={currentNewsletterFormStyles} onSubmit={handleNewsletterSubmit}>
              <input 
                type="email" 
                placeholder="Seu melhor email" 
                style={newsletterInputStyles_full} 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" style={newsletterButtonStyles_full}>
                Me avise!
              </button>
            </form>
          </div>

          <footer style={constructionFooterStyles_full}>
            <p>Em Construção</p>

          </footer>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default CategoriesPage;