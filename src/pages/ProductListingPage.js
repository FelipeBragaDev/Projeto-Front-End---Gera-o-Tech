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
  backgroundColor: 'var(--white)', 
};

const mainContentContainerStyles = {
  flex: 1,
  maxWidth: '1320px',
  width: '90%',
  margin: '30px auto', 
  padding: '0 10px',   
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

const resultsTextContainerStyles = { 

};

const resultsHighlightTextStyles = { 
  fontSize: '16px',
  color: 'var(--dark-gray-3)', 
  fontWeight: '400',
};

const resultsCategoryTextStyles = { 
  fontWeight: '600',
  color: 'var(--dark-gray)', 
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
  minWidth: '200px', 
};

// Estilo para o layout de duas colunas (Filtros | Produtos)
const contentLayoutStyles = {
  display: 'flex',
  gap: '30px', 
  alignItems: 'flex-start',
};


function ProductListingPage() {
  const [searchParams] = useSearchParams(); 
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [pageMessage, setPageMessage] = useState(''); 

  const searchTermFromURL = searchParams.get('search'); 

  useEffect(() => {
    let filteredProducts = [...mockProducts]; 

    if (searchTermFromURL) {
      const lowercasedSearchTerm = searchTermFromURL.toLowerCase();
      filteredProducts = mockProducts.filter(product =>
        product.name.toLowerCase().includes(lowercasedSearchTerm)
        || product.category.toLowerCase().includes(lowercasedSearchTerm)
      );
      if (filteredProducts.length > 0) {
          setPageMessage(`Resultados para busca: "${searchTermFromURL}"`);
      } else {
          setPageMessage(`Nenhum resultado encontrado para: "${searchTermFromURL}"`);
      }
    } else {

      setPageMessage('Nossos Produtos'); 
    }
    
    setDisplayedProducts(filteredProducts);
  }, [searchTermFromURL]); 

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