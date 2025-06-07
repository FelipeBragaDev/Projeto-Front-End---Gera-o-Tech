import React, { useState } from 'react';
import Logo from './Logo';
import { useNavigate, Link } from 'react-router-dom'; // Importar Link para navegação e useNavigate se necessário
import { FaShoppingCart } from 'react-icons/fa';
import MiniCart from './MiniCart';

// Estilos para o Header
const headerStyles = {
  display: 'flex',
  flexDirection: 'column', // Para organizar em duas linhas
  padding: '15px 40px',    // Padding vertical e horizontal
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
  marginBottom: '15px', // Espaço entre a linha superior e a de navegação
};

const logoContainerStyles = {
  // O Logo já deve ter seu próprio estilo, aqui apenas para posicionamento se necessário
  // Ex: flex: '0 0 auto'; // Não cresce, não encolhe, baseia-se no conteúdo
};

const searchContainerStyles = {
  flexGrow: 1, // Faz o container da busca ocupar o espaço central
  display: 'flex',
  justifyContent: 'center', // Centraliza a barra de busca dentro deste container
  padding: '0 20px', // Espaçamento para não colar no logo ou botões
};

const searchInputStyles = {
  padding: '10px 15px',
  border: '1px solid var(--light-gray-2)',
  borderRadius: '4px',
  width: '100%', // Ocupa a largura do searchContainerStyles
  maxWidth: '500px', // Limita a largura máxima da barra de busca
  fontSize: '14px',
  backgroundColor: 'var(--light-gray-3)',
};

const authActionsStyles = {
  display: 'flex',
  alignItems: 'center',
  gap: '15px', // Espaço entre "Cadastre-se" e "Entrar"
};

const cartIconContainerStyles = {
  position: 'relative', // Para posicionar o MiniCart em relação a este container
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
};

const cartIconStyles = {
  fontSize: '24px', // Tamanho do ícone do carrinho
  color: 'var(--dark-gray-2)', // Cor do ícone
  // Se precisar de um contador de itens:
  // position: 'relative', // Para o badge
};

// Badge para o número de itens (exemplo, não funcional ainda sem estado global)
// const itemCountBadgeStyles = {
//   position: 'absolute',
//   top: '-8px',
//   right: '-8px',
//   backgroundColor: 'var(--primary)',
//   color: 'var(--white)',
//   borderRadius: '50%',
//   padding: '2px 6px',
//   fontSize: '10px',
//   fontWeight: 'bold',
//   minWidth: '10px', // Para garantir que seja um círculo mesmo com 1 dígito
//   textAlign: 'center',
//   lineHeight: '1',
// };

const secondaryButtonStyles = { // Estilo para "Cadastre-se" (sem fundo, borda primária)
  backgroundColor: 'transparent',
  color: 'var(--primary)',
  border: '1px solid var(--primary)',
  padding: '10px 20px',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '14px',
  fontWeight: 'bold',
};

const primaryButtonStyles = { // Estilo para "Entrar" (fundo primário)
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
  justifyContent: 'left', // Centraliza os links de navegação
  alignItems: 'center',
  width: '100%',
  paddingTop: '10px', // Um pequeno espaço acima dos links, se a borda do header não for suficiente
};

const navLinkStyles = {
  textDecoration: 'none',
  color: 'var(--dark-gray-2)',
  fontSize: '16px',
  fontWeight: '500',
  padding: '5px 15px', // Padding para cada link
  margin: '0 10px', // Espaço entre os links
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
    event.preventDefault(); // Previne o recarregamento da página se estiver em um form
    if (searchTerm.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchTerm.trim())}`);
      // Opcional: limpar o campo de busca após pesquisar
      // setSearchTerm('');
    } else {
      // Opcional: navegar para /products sem filtro se a busca for vazia
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
              <span style={{ /* itemCountBadgeStyles - cole o seu aqui e descomente se quiser o badge */
                position: 'absolute', top: '-5px', right: '-5px', backgroundColor: 'var(--primary)',
                color: 'var(--white)', borderRadius: '50%', padding: '1px 5px',
                fontSize: '11px', fontWeight: 'bold', lineHeight: '1'
              }}>
                {itemCount}
              </span>
            )}
            {isCartOpen && <MiniCart onClose={() => setIsCartOpen(false)} />} {/* Passando onClose para fechar o MiniCart */}
          </div>
        </div>
      </div>

      {/* Linha Inferior - Navegação */}
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