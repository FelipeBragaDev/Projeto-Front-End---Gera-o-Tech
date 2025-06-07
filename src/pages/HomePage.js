import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection'; 
import FeaturedCollections from '../components/FeaturedCollections'; 
import CategoryNavigationSection from '../components/CategoryNavigationSection';
import TrendingProductsSection from '../components/TrendingProductsSection'; 
import CollectorEditionBanner from '../components/CollectorEditionBanner';


const homePageStyles = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
};

const mainContentStyles = {
  flex: 1,
};

function HomePage() {
  return (
    <div style={homePageStyles}>
      <Header />
      <main style={mainContentStyles}>
        <HeroSection />
        <FeaturedCollections /> 
        <CategoryNavigationSection />
        <TrendingProductsSection />
        <CollectorEditionBanner />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;