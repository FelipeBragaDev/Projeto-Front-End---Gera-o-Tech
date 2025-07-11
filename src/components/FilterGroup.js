import React from 'react';

const filterGroupContainerStyles = { 
  width: '280px',
  padding: '25px',
  border: '1px solid var(--light-gray-3)',
  borderRadius: '8px',
  backgroundColor: 'var(--white)',
  height: 'fit-content',
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.05)',
};

const mainTitleStyle = { 
  fontSize: '20px', 
  fontWeight: '700', 
  color: 'var(--dark-gray)',
  marginBottom: '20px',
};

const filterSectionStyles = {
  marginBottom: '25px',
  paddingBottom: '15px', 
  borderBottom: '1px solid var(--light-gray-3)',
};

// Remove a última borda da última seção de filtro
const lastFilterSectionStyles = {
    ...filterSectionStyles,
    borderBottom: 'none',
    marginBottom: '15px', 
    paddingBottom: '0',
};


const filterSectionTitleStyles = {
  fontSize: '16px',
  fontWeight: '600',
  color: 'var(--dark-gray-2)',
  marginBottom: '15px', 
};

const filterOptionLabelStyles = { 
  display: 'flex', 
  alignItems: 'center',
  marginBottom: '12px', 
  fontSize: '14px',
  color: 'var(--dark-gray-3)',
  cursor: 'pointer',
};

const filterInputStyles = {
  marginRight: '10px', 
  accentColor: 'var(--primary)',
  width: '16px', 
  height: '16px',
  cursor: 'pointer',
};

const clearButtonStyles = {
  width: '100%',
  padding: '12px',
  backgroundColor: 'var(--white)',
  color: 'var(--primary)',
  border: '1px solid var(--primary)',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '14px',
  fontWeight: '600',
  marginTop: '20px',
  transition: 'background-color 0.2s ease, color 0.2s ease',
};



function FilterGroup() {
 
  const brands = ['Adidas', 'Calenciaga', 'K-Swiss', 'Nike', 'Puma']; 
  const categories = ['Esportivo', 'Esteira', 'Academia', 'Corrida', 'Casual'];
  const genders = ['Masculino', 'Feminino', 'Unissex'];

  return (
    <aside style={filterGroupContainerStyles}>
      <h3 style={mainTitleStyle}>Filtrar por</h3>

      <div style={filterSectionStyles}>
        <h4 style={filterSectionTitleStyles}>Marca</h4>
        {brands.map(brand => (
          <label key={brand} style={filterOptionLabelStyles}>
            <input type="checkbox" style={filterInputStyles} name="marca" value={brand.toLowerCase()} /> {brand}
          </label>
        ))}
      </div>

      <div style={filterSectionStyles}>
        <h4 style={filterSectionTitleStyles}>Categoria</h4>
        {categories.map(category => (
          <label key={category} style={filterOptionLabelStyles}>
            <input type="checkbox" style={filterInputStyles} name="categoria" value={category.toLowerCase()} /> {category}
          </label>
        ))}
      </div>

      <div style={filterSectionStyles}>
        <h4 style={filterSectionTitleStyles}>Gênero</h4>
        {genders.map(gender => (
          <label key={gender} style={filterOptionLabelStyles}>
            <input type="checkbox" style={filterInputStyles} name="genero" value={gender.toLowerCase()} /> {gender}
          </label>
        ))}
      </div>
      
      <div style={lastFilterSectionStyles}>
        <h4 style={filterSectionTitleStyles}>Estado</h4>
        <label style={filterOptionLabelStyles}>
          <input type="radio" style={filterInputStyles} name="estado" value="novo" /> Novo
        </label>
        <label style={filterOptionLabelStyles}>
          <input type="radio" style={filterInputStyles} name="estado" value="usado" /> Usado
        </label>
      </div>

      <button
        style={clearButtonStyles}
      >
        Limpar filtro
      </button>
    </aside>
  );
}

export default FilterGroup;