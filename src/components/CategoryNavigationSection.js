import React, { useState } from 'react';
import CategoryIcon from './CategoryIcon';

// Estilos para a seção
const sectionStyles = {
  padding: '30px 20px',
  backgroundColor: 'var(--light-gray-3)',
};

const sectionTitleStyles = {
  fontSize: '28px',
  fontWeight: 'bold',
  color: 'var(--dark-gray-2)',
  textAlign: 'center',
  marginBottom: '40px',
};

const iconsContainerStyles = {
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: '20px',
};

const categoriesData = [
  { id: 'cat1', name: 'Camisetas', iconName: 'Camisetas' },
  { id: 'cat2', name: 'Calças', iconName: 'Calças' },
  { id: 'cat3', name: 'Bonés', iconName: 'Bone' },
  { id: 'cat4', name: 'Headphones', iconName: 'Headphones' },
  { id: 'cat5', name: 'Tênis', iconName: 'Tênis' },
];

function CategoryNavigationSection() {
  const [activeCategory, setActiveCategory] = useState('cat1');

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);

    console.log("Categoria selecionada:", categoryId);
  };

  return (
    <section style={sectionStyles}>
      <h2 style={sectionTitleStyles}>Coleções em destaque</h2>
      <div style={iconsContainerStyles}>
        {categoriesData.map((category) => (
          <CategoryIcon
            key={category.id}
            name={category.name}
            iconName={category.iconName}
            isActive={activeCategory === category.id}
            onClick={() => handleCategoryClick(category.id)}
          />
        ))}
      </div>
    </section>
  );
}

export default CategoryNavigationSection;