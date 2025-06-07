import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer'; 
import { FaGoogle, FaFacebookF } from 'react-icons/fa';

// Estilo para o wrapper da página inteira
const pageWrapperStyles = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
};

// Estilo para a área de conteúdo principal (onde ficará o gradiente e o form/imagem)
const mainContentAreaStyles = {
  flex: 1, // Ocupa o espaço entre Header e Footer
  display: 'flex',
  alignItems: 'center',    // Centraliza o layoutContainerStyles verticalmente
  justifyContent: 'center', // Centraliza o layoutContainerStyles horizontalmente
  padding: '40px 20px',     // Padding para a área principal
  background: 'linear-gradient(to bottom right, #E9E4F0, #D3CCE3)', // Gradiente lilás/roxo claro como no exemplo
  // Se preferir o gradiente mais escuro do exemplo HTML: 'linear-gradient(to bottom right, #4A00E0, #8E2DE2)'
  // Ou o var(--secondary) que usamos: 'var(--secondary)'
  boxSizing: 'border-box',
  fontFamily: "'Inter', sans-serif",
};

// --- Estilos para LoginPage ---
const pageContainerStyles = {
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column', // Para posicionar o logo acima do conteúdo principal
  alignItems: 'center', // Centraliza o conteúdo principal horizontalmente
  justifyContent: 'center', // Centraliza o conteúdo principal verticalmente (se o conteúdo for menor que a tela)
  background: 'linear-gradient(135deg, #B5B6F2, #EFEFFF)',
  backgroundColor: 'var(--secondary)',
  padding: '20px',
  boxSizing: 'border-box',
  fontFamily: "'Inter', sans-serif",
};

const logoTopLeftStyles = {
    position: 'absolute',
    top: '30px',
    left: '40px',
};

const layoutContainerStyles = { // Container para form e imagem
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center', // Centraliza o par form+imagem
    width: '100%',
    maxWidth: '1000px', // Ajustar a largura máxima do conteúdo login+imagem
    gap: '50px', // Espaço entre form e imagem
    flexWrap: 'wrap', // Para telas menores
};

const formContainerStyles = {
  backgroundColor: 'var(--white)',
  padding: '40px',
  borderRadius: '12px',
  boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)',
  width: '100%',
  maxWidth: '450px', // Largura do formulário
  textAlign: 'left',
  order: 1, // Para o form vir primeiro em telas menores se houver wrap
};

const formTitleStyles = {
  fontSize: '28px',
  fontWeight: 'bold',
  color: 'var(--dark-gray)',
  marginBottom: '10px',
};

const subLinkStyles = {
  fontSize: '14px',
  color: 'var(--dark-gray-2)',
  marginBottom: '30px',
};

const subLinkActionStyles = { // Para "registre-se aqui"
  color: 'var(--primary)',
  fontWeight: '500',
  textDecoration: 'underline',
  cursor: 'pointer',
};

const inputGroupStyles = { marginBottom: '20px' };
const labelStyles = { display: 'block', fontSize: '14px', color: 'var(--dark-gray-2)', marginBottom: '6px', fontWeight: '500' };
const inputStyles = {
  width: '100%',
  padding: '12px 15px',
  border: '1px solid var(--light-gray-2)',
  borderRadius: '4px',
  fontSize: '14px',
  boxSizing: 'border-box',
  backgroundColor: 'var(--light-gray-3)',
};

const forgotPasswordLinkStyles = {
  display: 'block',
  textAlign: 'right',
  fontSize: '13px',
  color: 'var(--primary)',
  textDecoration: 'underline',
  marginBottom: '25px',
  cursor: 'pointer',
};

const primaryButtonStyles = {
  width: '100%',
  padding: '14px',
  backgroundColor: 'var(--primary)',
  color: 'var(--white)',
  border: 'none',
  borderRadius: '4px',
  fontSize: '16px',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'background-color 0.2s ease',
};

const socialLoginTextStyles = {
  textAlign: 'center',
  fontSize: '13px',
  color: 'var(--dark-gray-2)',
  margin: '25px 0 15px 0',
};

const socialIconsContainerStyles = {
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
};

const socialIconStyles = {
  fontSize: '24px',
  color: 'var(--dark-gray-2)', // Ou cores específicas das marcas
  cursor: 'pointer',
  transition: 'color 0.2s ease',
};

// Imagem à Direita
const imageContainerStyles = {
  maxWidth: '400px', // Tamanho da imagem do tênis
  width: '100%',     // Para ser responsivo
  order: 2,          // Para a imagem vir depois em telas menores
  display: window.innerWidth < 768 ? 'none' : 'block', // Ocultar imagem em telas muito pequenas (exemplo)
};

const sneakerImageStyles = {
    width: '100%',
    height: 'auto',
    objectFit: 'contain',
};


function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Tentativa de login com:', { /* login, password */ });
    alert('Login (simulado) bem-sucedido! Redirecionando para Home...');
    navigate('/');
  };

  // Lógica para esconder imagem em telas menores (exemplo simples)
  const [showSneakerImage, setShowSneakerImage] = useState(window.innerWidth >= 768);
  React.useEffect(() => {
    const handleResize = () => setShowSneakerImage(window.innerWidth >= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const currentImageContainerStyles = {...imageContainerStyles, display: showSneakerImage ? 'block' : 'none'};

  return (
    <div style={pageWrapperStyles}>
      <Header />
      <main style={mainContentAreaStyles}>
        <div style={layoutContainerStyles}>
          {/* Coluna do Formulário */}
          <div style={formContainerStyles}>
            <h1 style={formTitleStyles}>Acesse sua conta</h1>
            <p style={subLinkStyles}>
              Novo cliente? Então{' '}
              <Link to="/signup" style={subLinkActionStyles}>
                registre-se aqui.
              </Link>
            </p>

            <form onSubmit={handleLogin}>
              <div style={inputGroupStyles}>
                <label htmlFor="login" style={labelStyles}>Login *</label>
                <input type="text" id="login" style={inputStyles} placeholder="Insira seu login ou email" required />
              </div>
              <div style={inputGroupStyles}>
                <label htmlFor="password" style={labelStyles}>Senha *</label>
                <input type="password" id="password" style={inputStyles} placeholder="Insira sua senha" required />
              </div>
              <span style={forgotPasswordLinkStyles} onClick={() => alert('Funcionalidade "Esqueci minha senha" não implementada.')}>
                Esqueci minha senha
              </span>
              <button type="submit" style={primaryButtonStyles}>
                Acessar Conta
              </button>
            </form>

            <p style={socialLoginTextStyles}>Ou faça login com:</p>
            <div style={socialIconsContainerStyles}>
              <FaGoogle style={socialIconStyles} onClick={() => alert('Login com Google não implementado.')} />
              <FaFacebookF style={socialIconStyles} onClick={() => alert('Login com Facebook não implementado.')} />
            </div>
          </div>

          {/* Coluna da Imagem */}
          <div style={imageContainerStyles}>
              <img src="/images/sneaker-login-highlight.svg" alt="Sneaker em destaque" style={sneakerImageStyles}/>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default LoginPage;