import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom'; 
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductDetails from '../components/ProductDetails';
import ProductOptions from '../components/ProductOptions';
import BuyBox from '../components/BuyBox';
import RelatedProducts from '../components/RelatedProducts';
import { mockProducts } from '../data/mockData';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';


const pageStyles = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  backgroundColor: 'var(--white)', 
};

const mainContentContainerStyles = {
  flex: 1,
  maxWidth: '1200px',
  width: '90%',
  margin: '20px auto', 
  padding: '0',
  boxSizing: 'border-box',
};

// Estilos para Breadcrumbs
const breadcrumbsContainerStyles = {
  padding: '15px 0',
  marginBottom: '25px',
  fontSize: '14px',
  color: 'var(--dark-gray-3)',
};

const breadcrumbLinkStyles = {
  color: 'var(--primary)',
  textDecoration: 'none',
};

const breadcrumbSeparatorStyles = {
  margin: '0 8px',
  color: 'var(--light-gray)',
};

const productViewLayoutStyles = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '30px', 
  alignItems: 'flex-start',
};

// Estilos para a Galeria de Imagens (Coluna da Esquerda)
const imageGalleryStyles = {
  flex: '1 1 calc(55% - 15px)', 
  position: 'relative',
};

const mainImageContainerStyles = {
    position: 'relative',
    border: '1px solid var(--light-gray-3)',
    borderRadius: '8px',
    overflow: 'hidden', 
    backgroundColor: 'var(--white)', 
};

const mainImageStyles = {
  width: '100%',
  maxHeight: '550px', 
  objectFit: 'contain',
  display: 'block', 
};

const galleryArrowStyles = {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  border: 'none',
  borderRadius: '50%',
  width: '40px',
  height: '40px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  zIndex: 2,
  color: 'var(--dark-gray-2)',
  boxShadow: '0px 2px 5px rgba(0,0,0,0.1)',
};

const prevArrowStyles = {
  ...galleryArrowStyles,
  left: '15px',
};

const nextArrowStyles = {
  ...galleryArrowStyles,
  right: '15px',
};

const thumbnailContainerStyles = {
  display: 'flex',
  gap: '10px',
  justifyContent: 'flex-start', 
  flexWrap: 'nowrap', 
  marginTop: '15px',
  overflowX: 'auto', 
  paddingBottom: '5px',
};

const thumbnailStyles = {
  width: '80px',
  height: '80px',
  objectFit: 'cover',
  border: '2px solid var(--light-gray-3)',
  borderRadius: '6px',
  cursor: 'pointer',
  opacity: 0.7,
  transition: 'opacity 0.2s ease, border-color 0.2s ease',
};

const thumbnailActiveStyles = {
  ...thumbnailStyles,
  opacity: 1,
  borderColor: 'var(--primary)',
};

// Estilos para a Coluna de Informações (Direita)
const productInfoColumnStyles = {
  flex: '1 1 calc(45% - 15px)', 
  display: 'flex',
  flexDirection: 'column',
};

function ProductViewPage() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const foundProduct = mockProducts.find(p => p.id === productId);
    setProduct(foundProduct);
    if (foundProduct && foundProduct.images && foundProduct.images.length > 0) {
      setSelectedImage(foundProduct.images[0]);
      setCurrentImageIndex(0);
    } else if (foundProduct) {
      setSelectedImage(foundProduct.imageUrl);
      setCurrentImageIndex(0); 
    }
    window.scrollTo(0,0); 
  }, [productId]);

  const productImages = product?.images || (product?.imageUrl ? [product.imageUrl] : []).filter(Boolean);

  const handlePrevImage = () => {
    const newIndex = currentImageIndex === 0 ? productImages.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(newIndex);
    setSelectedImage(productImages[newIndex]);
  };

  const handleNextImage = () => {
    const newIndex = currentImageIndex === productImages.length - 1 ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(newIndex);
    setSelectedImage(productImages[newIndex]);
  };


  if (!product) {
    return (
      <div style={pageStyles}>
        <Header />
        <main style={mainContentContainerStyles}>
          <p>Produto não encontrado ou carregando...</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div style={pageStyles}>
      <Header />
      <div style={mainContentContainerStyles}>
        <nav style={breadcrumbsContainerStyles} aria-label="Breadcrumb">
          <Link to="/" style={breadcrumbLinkStyles}>Home</Link>
          <span style={breadcrumbSeparatorStyles}>/</span>
          <Link to="/products" style={breadcrumbLinkStyles}>Produtos</Link>
          <span style={breadcrumbSeparatorStyles}>/</span>
          {/* Idealmente, a categoria viria do produto e seria um link */}
          <span style={breadcrumbSeparatorStyles}>{product.category}</span>
          <span style={breadcrumbSeparatorStyles}>/</span>
          <span>{product.name}</span>
        </nav>

        <div style={productViewLayoutStyles}>
          <section style={imageGalleryStyles}>
            {productImages.length > 0 && (
              <div style={mainImageContainerStyles}>
                <img src={selectedImage} alt={product.name} style={mainImageStyles} />
                {productImages.length > 1 && (
                  <>
                    <button onClick={handlePrevImage} style={prevArrowStyles} aria-label="Imagem anterior">
                      <FaChevronLeft />
                    </button>
                    <button onClick={handleNextImage} style={nextArrowStyles} aria-label="Próxima imagem">
                      <FaChevronRight />
                    </button>
                  </>
                )}
              </div>
            )}
            {productImages.length > 1 && (
                <div style={thumbnailContainerStyles}>
                    {productImages.map((imgUrl, index) => (
                        <img
                            key={index}
                            src={imgUrl}
                            alt={`${product.name} - miniatura ${index + 1}`}
                            style={selectedImage === imgUrl ? thumbnailActiveStyles : thumbnailStyles}
                            onClick={() => { setSelectedImage(imgUrl); setCurrentImageIndex(index); }}
                        />
                    ))}
                </div>
            )}
          </section>

          <section style={productInfoColumnStyles}>
            <ProductDetails product={product} />
            <ProductOptions product={product} />
            <BuyBox product={product} />
          </section>
        </div>

        <RelatedProducts 
          currentProductId={product.id} 
          currentProductCategory={product.category} 
        />
      </div>
      <Footer />
    </div>
  );
}

export default ProductViewPage;