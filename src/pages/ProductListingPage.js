import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FilterGroup from '../components/FilterGroup';
import ProductListing from '../components/ProductListing';
import { mockProducts } from '../data/mockData';

const pageStyles = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  backgroundColor: 'var(--white)', // Fundo branco para a área principal da página
};

const mainContentContainerStyles = {
  flex: 1,
  maxWidth: '1320px', // Aumentar um pouco a largura máxima para acomodar melhor
  width: '90%',
  margin: '30px auto', // Aumentar margem vertical
  padding: '0 10px',   // Padding horizontal menor, pois o gap cuidará do espaçamento
  boxSizing: 'border-box',
};

// Estilos para a barra acima da listagem (Resultados e Ordenação)
const pageHeaderStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '25px',
  paddingBottom: '25px',
  borderBottom: '1px solid var(--light-gray-2)',
};

const resultsTextContainerStyles = { // Container para "Resultados para..." e contagem
    // Não precisa de estilos específicos aqui se o <p> já os tiver
};

const resultsHighlightTextStyles = { // Para "Resultados para" e a categoria
  fontSize: '16px',
  color: 'var(--dark-gray-3)', // Cor mais suave
  fontWeight: '400',
};

const resultsCategoryTextStyles = { // Para o nome da categoria em negrito
  fontWeight: '600',
  color: 'var(--dark-gray)', // Cor mais escura para a categoria
};

const productCountStyles = {
  fontSize: '14px',
  color: 'var(--light-gray)',
  marginLeft: '8px',
};

const sortDropdownStyles = {
  padding: '10px 15px',
  borderRadius: '4px',
  border: '1px solid var(--light-gray-2)',
  fontSize: '14px',
  color: 'var(--dark-gray-2)',
  backgroundColor: 'var(--white)',
  minWidth: '200px', // Largura mínima para o dropdown
};

// Estilo para o layout de duas colunas (Filtros | Produtos)
const contentLayoutStyles = {
  display: 'flex',
  gap: '30px', // Espaço entre filtros e listagem de produtos
  alignItems: 'flex-start',
};


function ProductListingPage() {
  const [searchParams] = useSearchParams(); // Hook para ler parâmetros da URL
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [pageMessage, setPageMessage] = useState(''); // Para a mensagem "Resultados para..."

  const searchTermFromURL = searchParams.get('search'); // Pega o valor do parâmetro 'search'

  useEffect(() => {
    let filteredProducts = [...mockProducts]; // Começa com todos os produtos

    if (searchTermFromURL) {
      const lowercasedSearchTerm = searchTermFromURL.toLowerCase();
      filteredProducts = mockProducts.filter(product =>
        product.name.toLowerCase().includes(lowercasedSearchTerm)
        // Você pode expandir para buscar na categoria, descrição, etc.
        || product.category.toLowerCase().includes(lowercasedSearchTerm)
      );
      if (filteredProducts.length > 0) {
          setPageMessage(`Resultados para busca: "${searchTermFromURL}"`);
      } else {
          setPageMessage(`Nenhum resultado encontrado para: "${searchTermFromURL}"`);
      }
    } else {
      // Se não houver termo de busca, mostra todos os produtos ou uma categoria padrão
      // A lógica de categoria padrão que tínhamos pode ser adicionada aqui
      setPageMessage('Nossos Produtos'); // Ou "Resultados para: Tênis" se tiver categoria padrão
    }
    
    setDisplayedProducts(filteredProducts);
  }, [searchTermFromURL]); // Re-executa o efeito quando o termo de busca na URL mudar

  return (
    <div style={pageStyles}>
      <Header />
      <div style={mainContentContainerStyles}>
        <div style={pageHeaderStyles}>
          <div style={resultsTextContainerStyles}>
            <span style={resultsHighlightTextStyles}>{pageMessage}</span>
            {displayedProducts.length > 0 && (
              <span style={productCountStyles}>({displayedProducts.length} produtos)</span>
            )}
          </div>
          <select style={sortDropdownStyles} defaultValue="">
            <option value="" disabled>Ordenar por</option>
            <option value="recentes">Mais recentes</option>
            <option value="menor-preco">Menor preço</option>
            <option value="maior-preco">Maior preço</option>
          </select>
        </div>

        <main style={contentLayoutStyles}>
          <FilterGroup />
          <ProductListing products={displayedProducts} />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default ProductListingPage;