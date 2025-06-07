import React from 'react';
import Logo from './Logo';
// Importe os ícones desejados de react-icons
// Aqui, estou usando ícones da Font Awesome (Fa) como exemplo
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

// Estilos para o Footer
const footerStyles = {
  padding: '50px 30px 20px 30px', // Aumentei um pouco o padding superior
  backgroundColor: 'var(--dark-gray)',
  color: 'var(--light-gray-3)', // Cor padrão para o texto no footer, se não especificado
  textAlign: 'center', // Mantido, mas o conteúdo interno se alinha à esquerda
};

const footerContentStyles = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'flex-start',
  flexWrap: 'wrap',
  gap: '30px', // Aumentei o gap para mais respiro
  maxWidth: '1200px',
  margin: '0 auto 30px auto', // Espaço abaixo do conteúdo principal do footer
  textAlign: 'left',
};

const footerColumnStyles = {
  flex: 1,
  minWidth: '200px',
};

const logoAndTextColumnStyles = { // Estilo específico para a primeira coluna
  ...footerColumnStyles,
  // maxWidth: '300px', // Limitar a largura se necessário
};

const footerParagraphStyles = { // Estilo para o parágrafo abaixo do logo
  fontSize: '14px',
  color: 'var(--light-gray-2)', // Cor mais clara para o parágrafo
  lineHeight: '1.6',
  marginTop: '15px', // Espaço após o logo
  marginBottom: '20px', // Espaço antes dos ícones sociais
};

const footerHeadingStyles = { // Estilo para os títulos das colunas (Informação, Categorias, Contato)
  color: 'var(--white)',
  fontSize: '18px', // Um pouco maior para destaque
  fontWeight: '600', // Mais peso
  marginBottom: '20px', // Mais espaço abaixo dos títulos
};

const footerLinkStyles = {
  display: 'block',
  color: 'var(--light-gray-2)', // Cor clara para os links
  textDecoration: 'none',
  marginBottom: '10px', // Ajuste no espaçamento
  fontSize: '14px',
  transition: 'color 0.2s ease-in-out', // Efeito suave no hover
};

// Para o hover do link, não podemos fazer diretamente com estilos inline sem JS.
// Se quiser um hover, uma classe CSS seria melhor, ou lógica JS.
// Por agora, manteremos simples.

const socialIconStyles = { // Aplicado aos links <a> que envolvem os ícones
  color: 'var(--white)', // Ícones sociais brancos
  fontSize: '24px', // Tamanho dos ícones (ajuste conforme os ícones reais)
  textDecoration: 'none',
  transition: 'opacity 0.2s ease-in-out', // Efeito suave no hover
};

const contactInfoStyles = {
  fontSize: '14px',
  color: 'var(--light-gray-2)', // Cor clara para informações de contato
  lineHeight: '1.6',
};

const copyrightStyles = { // Estilo para o texto de copyright
  marginTop: '40px', // Mais espaço acima do copyright
  paddingTop: '20px',
  borderTop: '1px solid var(--dark-gray-2)', // Divisor sutil
  fontSize: '12px',
  color: 'var(--light-gray)', // Cor para o copyright
};


function Footer() {
  const socialIconsContainerStyles = {
  marginTop: '15px', // Já existia, mantido
  display: 'flex', // Para alinhar ícones
  gap: '20px', // Espaço entre ícones sociais
  };
  return (
    <footer style={footerStyles}>
      <div style={footerContentStyles}>
        <div style={logoAndTextColumnStyles}>
          <Logo color="var(--white)" iconSrc="/images/logo-icon-white.png" /> {/* Garanta que a cor branca seja passada */}
          <p style={footerParagraphStyles}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida.
            Lorem ipsum dolor sit amet.
          </p>
          <div style={socialIconsContainerStyles}>
            {/* Idealmente, use ícones SVG ou de uma biblioteca (ex: React Icons) */}
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={socialIconStyles} aria-label="Facebook">
              <FaFacebookF /> {/* Ícone do Facebook */}
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={socialIconStyles} aria-label="Instagram">
              <FaInstagram /> {/* Ícone do Instagram */}
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={socialIconStyles} aria-label="Twitter">
              <FaTwitter /> {/* Ícone do Twitter */}
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
          <p style={{...contactInfoStyles, marginTop: '10px' }}> {/* Adicionando marginTop aqui */}
            (85) 3051-3411
          </p>
        </div>
      </div>
      <div style={copyrightStyles}>
        © {new Date().getFullYear()} Digital College {/* Usando o ano atual dinamicamente */}
      </div>
    </footer>
  );
}

export default Footer;