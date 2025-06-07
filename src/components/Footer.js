import React from 'react';
import Logo from './Logo';

import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

// Estilos para o Footer
const footerStyles = {
  padding: '50px 30px 20px 30px', 
  backgroundColor: 'var(--dark-gray)',
  color: 'var(--light-gray-3)', 
  textAlign: 'center',
};

const footerContentStyles = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'flex-start',
  flexWrap: 'wrap',
  gap: '30px', 
  maxWidth: '1200px',
  margin: '0 auto 30px auto', 
  textAlign: 'left',
};

const footerColumnStyles = {
  flex: 1,
  minWidth: '200px',
};

const logoAndTextColumnStyles = { 
  ...footerColumnStyles,
};

const footerParagraphStyles = { 
  fontSize: '14px',
  color: 'var(--light-gray-2)', 
  lineHeight: '1.6',
  marginTop: '15px', 
  marginBottom: '20px',
};

const footerHeadingStyles = { 
  color: 'var(--white)',
  fontSize: '18px', 
  fontWeight: '600', 
  marginBottom: '20px', 
};

const footerLinkStyles = {
  display: 'block',
  color: 'var(--light-gray-2)', 
  textDecoration: 'none',
  marginBottom: '10px', 
  fontSize: '14px',
  transition: 'color 0.2s ease-in-out', 
};


const socialIconStyles = { 
  color: 'var(--white)', 
  fontSize: '24px', 
  textDecoration: 'none',
  transition: 'opacity 0.2s ease-in-out',
};

const contactInfoStyles = {
  fontSize: '14px',
  color: 'var(--light-gray-2)',
  lineHeight: '1.6',
};

const copyrightStyles = { 
  marginTop: '40px', 
  paddingTop: '20px',
  borderTop: '1px solid var(--dark-gray-2)',
  fontSize: '12px',
  color: 'var(--light-gray)',
};


function Footer() {
  const socialIconsContainerStyles = {
  marginTop: '15px',
  display: 'flex', 
  gap: '20px',
  };
  return (
    <footer style={footerStyles}>
      <div style={footerContentStyles}>
        <div style={logoAndTextColumnStyles}>
          <Logo color="var(--white)" iconSrc="/images/logo-icon-white.png" />
          <p style={footerParagraphStyles}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida.
            Lorem ipsum dolor sit amet.
          </p>
          <div style={socialIconsContainerStyles}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={socialIconStyles} aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={socialIconStyles} aria-label="Instagram">
              <FaInstagram /> 
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={socialIconStyles} aria-label="Twitter">
              <FaTwitter /> 
            </a>
          </div>
        </div>

        <div style={footerColumnStyles}>
          <h4 style={footerHeadingStyles}>Informação</h4>
          <a href="#" style={footerLinkStyles}>Sobre Drip Store</a>
          <a href="#" style={footerLinkStyles}>Segurança</a>
          <a href="#" style={footerLinkStyles}>Wishlist</a>
          <a href="#" style={footerLinkStyles}>Blog</a>
          <a href="#" style={footerLinkStyles}>Trabalhe conosco</a>
          <a href="#" style={footerLinkStyles}>Meus Pedidos</a>
        </div>

        <div style={footerColumnStyles}>
          <h4 style={footerHeadingStyles}>Categorias</h4>
          <a href="#" style={footerLinkStyles}>Camisetas</a>
          <a href="#" style={footerLinkStyles}>Calças</a>
          <a href="#" style={footerLinkStyles}>Bonés</a>
          <a href="#" style={footerLinkStyles}>Headphones</a>
          <a href="#" style={footerLinkStyles}>Tênis</a>
        </div>

        <div style={footerColumnStyles}>
          <h4 style={footerHeadingStyles}>Contato</h4>
          <p style={contactInfoStyles}>
            Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161
          </p>
          <p style={{...contactInfoStyles, marginTop: '10px' }}>
            (85) 3051-3411
          </p>
        </div>
      </div>
      <div style={copyrightStyles}>
        © {new Date().getFullYear()} Digital College
      </div>
    </footer>
  );
}

export default Footer;