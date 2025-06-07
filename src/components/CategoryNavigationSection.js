import React, { useState } from 'react';
import CategoryIcon from './CategoryIcon';

// Estilos para a seção
const sectionStyles = {
  padding: '30px 20px',
  backgroundColor: 'var(--light-gray-3)', // Fundo da seção (F5F5F5)
};

const sectionTitleStyles = {
  fontSize: '28px',
  fontWeight: 'bold',
  color: 'var(--dark-gray-2)',
  textAlign: 'center', // Título centralizado como na imagem
  marginBottom: '40px',
};

const iconsContainerStyles = {
  display: 'flex',
  justifyContent: 'center', // Centraliza os ícones
  flexWrap: 'wrap',
  gap: '20px', // Espaço entre os ícones
};

const categoriesData = [
  { id: 'cat1', name: 'Camisetas', iconName: 'Camisetas' },
  { id: 'cat2', name: 'Calças', iconName: 'Calças' },
  { id: 'cat3', name: 'Bonés', iconName: 'Bone' },
  { id: 'cat4', name: 'Headphones', iconName: 'Headphones' },
  { id: 'cat5', name: 'Tênis', iconName: 'Tênis' },
];

function CategoryNavigationSection() {
  const [activeCategory, setActiveCategory] = useState('cat1'); // 'cat1' (Camisetas) como ativo por padrão

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
    // Aqui você poderia adicionar lógica para filtrar produtos ou navegar
    console.log("Categoria selecionada:", categoryId);
  };

  return (
    <section style={sectionStyles}>
      {/* O título na imagem de detalhe é "Coleções em destaque", mas pode ser "Categorias" */}
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