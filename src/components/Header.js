import React, { useState } from 'react';
import Logo from './Logo';
import { useNavigate, Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import MiniCart from './MiniCart';

// Estilos para o Header
const headerStyles = {
  display: 'flex',
  flexDirection: 'column',
  padding: '15px 40px', 
  backgroundColor: 'var(--white)',
  borderBottom: '1px solid var(--light-gray-2)',
  color: 'var(--dark-gray)',
};

// Estilos para a linha superior (Logo, Busca, Botões de Auth)
const topRowStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  marginBottom: '15px', 
};

const logoContainerStyles = {
};

const searchContainerStyles = {
  flexGrow: 1,
  display: 'flex',
  justifyContent: 'center', 
  padding: '0 20px', 
};

const searchInputStyles = {
  padding: '10px 15px',
  border: '1px solid var(--light-gray-2)',
  borderRadius: '4px',
  width: '100%', 
  maxWidth: '500px',
  fontSize: '14px',
  backgroundColor: 'var(--light-gray-3)',
};

const authActionsStyles = {
  display: 'flex',
  alignItems: 'center',
  gap: '15px',
};

const cartIconContainerStyles = {
  position: 'relative',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
};

const cartIconStyles = {
  fontSize: '24px', 
  color: 'var(--dark-gray-2)',
};

const secondaryButtonStyles = { 
  backgroundColor: 'transparent',
  color: 'var(--primary)',
  border: '1px solid var(--primary)',
  padding: '10px 20px',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '14px',
  fontWeight: 'bold',
};

const primaryButtonStyles = { 
  backgroundColor: 'var(--primary)',
  color: 'var(--white)',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '14px',
  fontWeight: 'bold',
};

// Estilos para a linha inferior (Navegação)
const bottomRowStyles = {
  display: 'flex',
  justifyContent: 'left',
  alignItems: 'center',
  width: '100%',
  paddingTop: '10px',
};

const navLinkStyles = {
  textDecoration: 'none',
  color: 'var(--dark-gray-2)',
  fontSize: '16px',
  fontWeight: '500',
  padding: '5px 15px', 
  margin: '0 10px', 
};

const activeNavLinkStyles = {
  ...navLinkStyles,
  color: 'var(--primary)',
  fontWeight: '700',
  borderBottom: '2px solid var(--primary)',
};


function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const itemCount = 2;
  const activeLink = "Home";

  const toggleCart = () => setIsCartOpen(!isCartOpen);
  
  // Handlers para os botões
  const handleLoginClick = () => navigate('/login');
  const handleSignupClick = () => navigate('/signup');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault(); 
    if (searchTerm.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchTerm.trim())}`);

    } else {
      navigate('/products');
    }
  };


  return (
    <header style={headerStyles}>
      <div style={topRowStyles}>
        <div style={logoContainerStyles}>
          <Logo />
        </div>

        <div style={searchContainerStyles}>
          <form onSubmit={handleSearchSubmit} style={{ width: '100%', maxWidth: '500px', display: 'flex' }}>
            <input type="text" 
            placeholder="Pesquisar produto..." 
            style={searchInputStyles} 
            value={searchTerm}
            onChange={handleSearchChange}
            />
            <button type="submit" style={{padding: '10px', marginLeft: '-1px', border:'1px solid var(--light-gray-2)', cursor:'pointer'}}>🔍</button>
          </form>
        </div>

        <div style={authActionsStyles}>
          <button style={secondaryButtonStyles} onClick={handleSignupClick}>Cadastre-se</button>
          <button style={primaryButtonStyles} onClick={handleLoginClick}>Entrar</button>
          <div style={cartIconContainerStyles} onClick={toggleCart} role="button" tabIndex={0} onKeyDown={(e) => {if(e.key === 'Enter' || e.key === ' ') toggleCart()}}>
            <FaShoppingCart style={cartIconStyles} />
            {itemCount > 0 && (
              <span style={{ 
                position: 'absolute', top: '-5px', right: '-5px', backgroundColor: 'var(--primary)',
                color: 'var(--white)', borderRadius: '50%', padding: '1px 5px',
                fontSize: '11px', fontWeight: 'bold', lineHeight: '1'
              }}>
                {itemCount}
              </span>
            )}
            {isCartOpen && <MiniCart onClose={() => setIsCartOpen(false)} />} 
          </div>
        </div>
      </div>

      <div style={bottomRowStyles}>
        <nav>
          <a href="/" style={activeLink === "Home" ? activeNavLinkStyles : navLinkStyles}>Home</a>
          <a href="/products" style={activeLink === "Produtos" ? activeNavLinkStyles : navLinkStyles}>Produtos</a>
          <a href="/categories" style={activeLink === "Categorias" ? activeNavLinkStyles : navLinkStyles}>Categorias</a>
          <a href="/meus-pedidos" style={activeLink === "Meus Pedidos" ? activeNavLinkStyles : navLinkStyles}>Meus Pedidos</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;