import React from 'react';

const filterGroupContainerStyles = { // Renomeado de filterGroupStyles para clareza
  width: '280px', // Aumentar um pouco a largura
  padding: '25px',
  border: '1px solid var(--light-gray-3)', // Borda um pouco mais clara
  borderRadius: '8px',
  backgroundColor: 'var(--white)',
  height: 'fit-content',
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.05)', // Sombra sutil
};

const mainTitleStyle = { // Renomeado de titleStyle
  fontSize: '20px', // Um pouco maior
  fontWeight: '700', // Mais bold
  color: 'var(--dark-gray)',
  marginBottom: '20px',
  // borderBottom: '1px solid var(--light-gray-2)', // Removida borda inferior do título principal
  // paddingBottom: '10px',
};

const filterSectionStyles = {
  marginBottom: '25px', // Mais espaço entre seções de filtro
  paddingBottom: '15px', // Espaço antes da borda
  borderBottom: '1px solid var(--light-gray-3)', // Borda entre seções
};

// Remove a última borda da última seção de filtro
const lastFilterSectionStyles = {
    ...filterSectionStyles,
    borderBottom: 'none',
    marginBottom: '15px', // Menos margem se for a última
    paddingBottom: '0',
};


const filterSectionTitleStyles = {
  fontSize: '16px',
  fontWeight: '600',
  color: 'var(--dark-gray-2)',
  marginBottom: '15px', // Mais espaço abaixo do título da seção
};

const filterOptionLabelStyles = { // Renomeado de filterOptionStyles
  display: 'flex', // Para alinhar checkbox e texto
  alignItems: 'center',
  marginBottom: '12px', // Mais espaço
  fontSize: '14px',
  color: 'var(--dark-gray-3)',
  cursor: 'pointer',
};

const filterInputStyles = {
  marginRight: '10px', // Mais espaço
  accentColor: 'var(--primary)',
  width: '16px', // Tamanho do checkbox/radio
  height: '16px',
  cursor: 'pointer',
};

const clearButtonStyles = {
  width: '100%',
  padding: '12px', // Botão um pouco maior
  backgroundColor: 'var(--white)',
  color: 'var(--primary)',
  border: '1px solid var(--primary)',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '14px',
  fontWeight: '600',
  marginTop: '20px', // Mais espaço acima do botão
  transition: 'background-color 0.2s ease, color 0.2s ease',
};

// Estilos para o hover do botão (exemplo, pode ser feito com CSS :hover)
// const clearButtonHoverStyles = {
//   backgroundColor: 'var(--primary-light)', // Uma variação mais clara do primário
//   color: 'var(--white)',
// };


function FilterGroup() {
  // const [isClearButtonHovered, setIsClearButtonHovered] = React.useState(false);

  const brands = ['Adidas', 'Calenciaga', 'K-Swiss', 'Nike', 'Puma']; // Exemplo de marcas
  const categories = ['Esportivo', 'Esteira', 'Academia', 'Corrida', 'Casual']; // Exemplo de categorias
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
      
      <div style={lastFilterSectionStyles}> {/* Usando o estilo para remover a última borda */}
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
        // onMouseEnter={() => setIsClearButtonHovered(true)}
        // onMouseLeave={() => setIsClearButtonHovered(false)}
      >
        Limpar filtro
      </button>
    </aside>
  );
}

export default FilterGroup;