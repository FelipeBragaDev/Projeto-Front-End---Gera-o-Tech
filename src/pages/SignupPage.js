import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';
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


const pageContainerStyles = {
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'linear-gradient(135deg, #B5B6F2, #EFEFFF)', // indigo-900 to purple-700 (Tailwind shades)
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
    maxWidth: '450px', 
    textAlign: 'left',
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

const subLinkActionStyles = {
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

const imageContainerStyles = {
  maxWidth: '400px', // Tamanho da imagem do tênis
  display: 'block', // Esconder em telas muito pequenas se necessário
};

const sneakerImageStyles = {
    width: '100%',
    height: 'auto',
    objectFit: 'contain',
};


function SignupPage() {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    console.log('Tentativa de cadastro com os dados do formulário');
    alert('Cadastro (simulado) bem-sucedido! Redirecionando para Login...');
    navigate('/signup-details');
  };

  return (
    <div style={pageWrapperStyles}>
      <Header />
        <main style={mainContentAreaStyles}>
            <div style={layoutContainerStyles}>
                <div style={formContainerStyles}>
                <h1 style={formTitleStyles}>Crie sua conta</h1>
                <p style={subLinkStyles}>
                    Já possui uma conta?{' '}
                    <Link to="/login" style={subLinkActionStyles}>
                    Entre aqui.
                    </Link>
                </p>

                <form onSubmit={handleSignup}>
                    {/* A imagem de referência só mostra email, mas um signup real precisaria de mais */}
                    {/*<div style={inputGroupStyles}>
                    <label htmlFor="name" style={labelStyles}>Nome Completo *</label>
                    <input type="text" id="name" style={inputStyles} placeholder="Insira seu nome completo" required />
                    </div>*/}
                    <div style={inputGroupStyles}>
                    <label htmlFor="email" style={labelStyles}>Email *</label>
                    <input type="email" id="email" style={inputStyles} placeholder="Insira seu email" required />
                    </div>
                    {/*<div style={inputGroupStyles}>
                    <label htmlFor="password" style={labelStyles}>Senha *</label>
                    <input type="password" id="password" style={inputStyles} placeholder="Crie uma senha" required />
                    </div>*/}
                    {/* Poderia adicionar "Confirmar Senha" aqui */}
                    <div style={{marginTop: '30px'}}> {/* Espaço antes do botão */}
                        <button type="submit" style={primaryButtonStyles}>
                        Criar Conta
                        </button>
                    </div>
                </form>

                <p style={socialLoginTextStyles}>Ou faça login com:</p>
                <div style={socialIconsContainerStyles}>
                    <FaGoogle style={socialIconStyles} onClick={() => alert('Login com Google não implementado.')} />
                    <FaFacebookF style={socialIconStyles} onClick={() => alert('Login com Facebook não implementado.')} />
                </div>
                </div>

                <div style={imageContainerStyles}>
                    <img src="/images/sneaker-login-highlight.svg" alt="Sneaker em destaque" style={sneakerImageStyles}/>
                </div>
            </div>
        </main>
      <Footer />
    </div>
  );
}

export default SignupPage;